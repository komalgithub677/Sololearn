import { Gift, PlayCircle, PlusCircle, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";

export default function Profile() {
  return (
    <>
    <div className="w-screen max-w-[99.9%] min-h-[99%] overflow-x-hidden relative dark:bg-gray-900">
      
      {/* SoloLearn-style gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f3443] via-[#34e89e] to-[#0f3443] opacity-20 dark:opacity-10" />
      
      <div className="min-h-screen w-[60%] ml-[20%] mt-[6%] flex-col gap-1 items-center">
        <ProfileHeader />
        <ProBanner />
        <StreakTracker />
        <Dashboard />
      </div>
      
    </div>
    </>
    
  );
}

const ProfileHeader = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <motion.div 
      className="w-full text-black dark:text-white py-10 px-5 rounded-b-3xl text-center"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-[4%]">
        <motion.img
          height={120}
          width={120}
          src="https://imgcdn.stablediffusionweb.com/2024/9/24/ed4d3b06-90f7-4d8d-ae20-9e6059147870.jpg"
          alt="profile picture"
          className="rounded-full w-[18%] border-4 border-white dark:border-gray-800 shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <div className="text-left font-bold">
          <h2 className="text-2xl">Dust Bin</h2>
          <p className="flex items-center gap-2 mt-[4%]">
            <motion.span 
              className="text-gray-700 dark:text-gray-300 cursor-pointer hover:text-gray-500"
              onClick={() => setIsFollowing(!isFollowing)}
              whileTap={{ scale: 0.95 }}
            >
              {isFollowing ? '1 Following |' : '0 Following |'}
            </motion.span>
            <span className="text-gray-700 dark:text-gray-300">0 Followers</span>
          </p>
          <div className="flex items-center gap-1 mt-[2%]">
            <Star size={20} fill="currentColor" className="text-yellow-500" />
            <span className="text-lg">10 XP</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProBanner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="bg-gradient-to-r from-[#020C1B] to-[#0a192f] flex justify-between items-center p-5 rounded-lg shadow-2xl w-full mb-3 relative overflow-hidden"
      whileHover={{ scale: 1.01 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {isHovered && (
        <motion.div 
          className="absolute inset-0 bg-white/10 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}
      
      <div className="flex items-center gap-2">
        <span className="text-white text-lg font-semibold">sololearn</span>
        <motion.span 
          className="bg-yellow-500 text-black text-sm font-bold px-2 py-1 rounded"
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          PRO
        </motion.span>
      </div>

      <motion.div 
        className="bg-[#1C2836] p-2 rounded-md shadow-md border border-gray-700 cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-16 h-10 flex flex-col gap-1">
          {[100, 75, 100, 66].map((width, i) => (
            <motion.div 
              key={i}
              className="h-1 bg-yellow-500"
              style={{ width: `${width}%` }}
              animate={{ width: [width, width-20, width] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: i*0.2 }}
            />
          ))}
        </div>
      </motion.div>

      <motion.button 
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded transition-all flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Zap size={16} fill="currentColor" />
        Start Today
      </motion.button>
    </motion.div>
  );
};

const StreakTracker = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const [currentStreak, setCurrentStreak] = useState(0);

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-full border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Streak</h2>

      <div className="flex items-center gap-4 mt-4">
        <div className="flex gap-2">
          {days.map((day, index) => (
            <motion.div 
              key={day}
              className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors ${
                index < currentStreak ? 'bg-yellow-400' : 'bg-gray-200 dark:bg-gray-700'
              }`}
              whileHover={{ scale: 1.1 }}
              onClick={() => setCurrentStreak(index + 1)}
            >
              <Gift 
                size={20} 
                className={`${index < currentStreak ? 'text-white' : 'text-gray-400'}`} 
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 my-4" />

      <div className="flex justify-between items-center">
        {[
          { label: 'Current Streak', value: '0 days', color: 'green-500' },
          { label: 'Longest Streak', value: '0 days', color: 'orange-500' },
          { label: 'Streak Saver', value: '0 of 3', color: 'blue-500' }
        ].map((item, index) => (
          <div key={index} className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white flex items-center justify-center">
              <Zap size={16} className={`text-${item.color} mr-1`} />
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <motion.button 
        className="w-full mt-4 px-4 py-2 text-blue-600 dark:text-blue-400 border border-blue-400 dark:border-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        Get Streak Saver
      </motion.button>
    </motion.div>
  );
};

const Dashboard = () => {
  const courses = [
    { name: "Python Core", color: "bg-blue-600", icon: "🐍", progress: 65 },
    { name: "HTML", color: "bg-orange-500", icon: "🌐", progress: 80 },
    { name: "CSS", color: "bg-green-500", icon: "🎨", progress: 45 }
  ];

  return (
    <motion.div 
      className="grid grid-cols-2 gap-6 p-6 bg-gray-100 dark:bg-gray-900 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {/* Courses Progress */}
      <div className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg transition-all hover:shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Courses Progress</h2>
          <motion.a 
            href="#" 
            className="text-blue-500 dark:text-blue-400 text-sm"
            whileHover={{ x: 5 }}
          >
            Manage
          </motion.a>
        </div>
        <div className="mt-4 space-y-4">
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <div className={`${course.color} w-10 h-10 flex items-center justify-center rounded-full text-white text-lg`}>
                  {course.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">{course.name}</p>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-600 rounded-full mt-1">
                    <div 
                      className="h-full bg-current rounded-full transition-all duration-500"
                      style={{ width: `${course.progress}%`, backgroundColor: course.color }}
                    />
                  </div>
                </div>
              </div>
              <PlayCircle size={20} className="text-blue-500 dark:text-blue-400" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Achievements</h2>
        <div className="grid grid-cols-4 gap-3 mt-3">
          {["🏆", "⭐", "🚀", "🎯"].map((emoji, index) => (
            <motion.div 
              key={index}
              className="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-2xl cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600"
              whileHover={{ rotate: 15, scale: 1.1 }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg col-span-2">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Certificates</h2>
        <div className="grid grid-cols-3 gap-4">
          {["HTML", "CSS", "Python"].map((lang, index) => (
            <motion.div 
              key={index}
              className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 text-white cursor-pointer overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-black/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-bold">{lang}</h3>
              <p className="text-sm mt-2">Completed: 2024-01-15</p>
              <div className="absolute bottom-2 right-2 text-4xl opacity-50">
                {index === 0 ? "📄" : index === 1 ? "🎖️" : "🏅"}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
    
  );
};