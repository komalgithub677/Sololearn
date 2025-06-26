import bcrypt from "bcrypt";
import User from "../models/userModel.js";

// Create a new user
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      progress: [],
    });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(400).json({ message: "Error creating user", error: error.message });
  }
};

// Get user details by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: "Error fetching user", error: error.message });
  }
};

// Update user information
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(400).json({ message: "Error updating user", error: error.message });
  }
};

// SignIn function
export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json({
      success: true,
      userId: user._id.toString(),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        progress: user.progress,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Save course progress
export const saveProgress = async (req, res) => {
  const { userId, courseId, chapterId, lessonId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    let courseProgress = user.progress.find((p) => p.courseId === courseId);
    if (!courseProgress) {
      courseProgress = { courseId, completedLessons: [] };
      user.progress.push(courseProgress);
    }
    if (
      !courseProgress.completedLessons.some(
        (l) => l.chapterId === chapterId && l.lessonId === lessonId
      )
    ) {
      courseProgress.completedLessons.push({ chapterId, lessonId });
    }
    await user.save();
    res.status(200).json({ message: "Progress saved successfully", progress: user.progress });
  } catch (error) {
    res.status(500).json({ message: "Error saving progress", error: error.message });
  }
};

// Get course progress
export const getProgress = async (req, res) => {
  const { userId, courseId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const courseProgress = user.progress.find((p) => p.courseId === courseId) || {
      courseId,
      completedLessons: [],
    };
    res.status(200).json(courseProgress);
  } catch (error) {
    res.status(500).json({ message: "Error fetching progress", error: error.message });
  }
};

// Get leaderboard data
export const getLeaderboard = async (req, res) => {
  try {
    const users = await User.find({}, 'name email progress');
    const leaderboard = users.map(user => {
      const totalXP = user.progress.reduce((sum, course) => {
        return sum + (course.completedLessons.length * 10); // 10 XP per lesson
      }, 0);
      return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        totalXP,
        totalLessons: user.progress.reduce((sum, course) => sum + course.completedLessons.length, 0),
      };
    });
    // Sort by totalXP in descending order
    leaderboard.sort((a, b) => b.totalXP - a.totalXP);
    // Assign ranks
    const rankedLeaderboard = leaderboard.map((user, index) => ({
      ...user,
      rank: index + 1,
    }));
    res.status(200).json(rankedLeaderboard);
  } catch (error) {
    res.status(500).json({ message: "Error fetching leaderboard", error: error.message });
  }
};

// other exports...
export const useStreakSaver = (req, res, next) => {
  try {
    console.log("Streak middleware triggered");
    // implement your streak saving logic here
    next();
  } catch (error) {
    console.error("Streak middleware error:", error);
    res.status(500).json({ error: "Failed to update streak" });
  }
};
