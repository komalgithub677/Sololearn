import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  progress: [
    {
      courseId: {
        type: String, // e.g., "html", "css", "javascript"
        required: true,
      },
      completedLessons: [
        {
          chapterId: Number,
          lessonId: Number,
        },
      ],
    },
  ],
});

const User = mongoose.model("Login", userSchema);

export default User;