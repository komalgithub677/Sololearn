

import { CheckCircle2, ChevronDown, ChevronUp, Lock, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import NavBarP from './NavBarP';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface Lesson {
  id: number;
  title: string;
  type: 'text';
  content: string;
  duration: string;
  isCompleted: boolean;
  isLocked: boolean;
  quiz: QuizQuestion[];
}

interface Chapter {
  id: number;
  title: string;
  isExpanded: boolean;
  lessons: Lesson[];
}

export default function CoursePlayer() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // --- JAVASCRIPT COURSE DATA ---
  const [chapters, setChapters] = useState<Chapter[]>([
    {
      id: 1,
      title: 'Welcome to JavaScript',
      isExpanded: true,
      lessons: [
        {
          id: 1,
          title: 'What is JavaScript?',
          type: 'text',
          content: `JavaScript is a programming language that adds interactivity to your website. It works in web browsers and can also be used on servers (Node.js) and in mobile apps. Unlike HTML (which structures content) and CSS (which styles content), JavaScript makes web pages dynamic and interactive.`,
          duration: '8 min',
          isCompleted: false,
          isLocked: false,
          quiz: [
            {
              question: "What is the primary use of JavaScript?",
              options: [
                "To structure web content",
                "To style web pages",
                "To add interactivity to websites",
                "To create database tables"
              ],
              correctAnswer: "To add interactivity to websites"
            }
          ]
        },
        {
          id: 2,
          title: 'JavaScript Code Basics',
          type: 'text',
          content: `JavaScript code can be written directly in HTML files using <script> tags or in separate .js files. Example:\n\n<script>\n  // Your JavaScript code here\n  alert('Hello World!');\n</script>\n\nBest practice is to use external files for larger projects.`,
          duration: '10 min',
          isCompleted: false,
          isLocked: false,
          quiz: [
            {
              question: "Where can JavaScript code be written?",
              options: [
                "Only in HTML files",
                "Only in .js files",
                "In both HTML and .js files",
                "Neither HTML nor .js files"
              ],
              correctAnswer: "In both HTML and .js files"
            }
          ]
        },
        {
          id: 3,
          title: 'Data & Variables',
          type: 'text',
          content: `Variables store data values. JavaScript has three ways to declare variables:\n\n1. var (old way)\n2. let (block-scoped)\n3. const (constant, can't be changed)\n\nExample:\nlet name = 'Alice';\nconst age = 30;`,
          duration: '10 min',
          isCompleted: false,
          isLocked: false,
          quiz: [
            {
              question: "Which variable type cannot be changed after declaration?",
              options: ["var", "let", "const", "all of them"],
              correctAnswer: "const"
            }
          ]
        },
        {
          id: 4,
          title: 'Working with Variables',
          type: 'text',
          content: `Variables can hold different data types:\n\n- Strings: 'Hello'\n- Numbers: 42\n- Booleans: true/false\n- Arrays: [1, 2, 3]\n- Objects: {name: 'Alice'}\n\nYou can perform operations like:\nlet x = 5;\nlet y = x + 2; // y is now 7`,
          duration: '12 min',
          isCompleted: false,
          isLocked: false,
          quiz: [
            {
              question: "Which is NOT a JavaScript data type?",
              options: ["String", "Number", "Boolean", "Float"],
              correctAnswer: "Float"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Going Deeper with JavaScript',
      isExpanded: false,
      lessons: [
        {
          id: 5,
          title: 'JavaScript Functions',
          type: 'text',
          content: `Functions are reusable blocks of code. They can take parameters and return values.\n\nExample:\nfunction greet(name) {\n  return 'Hello ' + name;\n}\n\n// Call the function\ngreet('Alice'); // Returns 'Hello Alice'`,
          duration: '12 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "What is the purpose of a function?",
              options: [
                "To store data",
                "To create reusable code blocks",
                "To style elements",
                "To structure HTML"
              ],
              correctAnswer: "To create reusable code blocks"
            }
          ]
        },
        {
          id: 6,
          title: 'Standard and Best Practices',
          type: 'text',
          content: `JavaScript best practices include:\n\n- Using const by default, let when needed\n- Using meaningful variable names\n- Adding comments for complex code\n- Using strict equality (===) instead of (==)\n- Following consistent indentation`,
          duration: '10 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which equality operator is preferred in JavaScript?",
              options: ["==", "===", "=", "!=="],
              correctAnswer: "==="
            }
          ]
        },
        {
          id: 7,
          title: 'Writing JS Code',
          type: 'text',
          content: `JavaScript statements end with semicolons (though they're optional). Code is executed from top to bottom.\n\nExample:\nlet x = 5;\nlet y = 10;\nlet sum = x + y;\nconsole.log(sum); // Outputs 15 to console`,
          duration: '8 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "How is JavaScript code executed?",
              options: [
                "Random order",
                "Bottom to top",
                "Top to bottom",
                "Only functions are executed"
              ],
              correctAnswer: "Top to bottom"
            }
          ]
        },
        {
          id: 8,
          title: 'User Input',
          type: 'text',
          content: `You can get user input using:\n\n1. prompt() - displays a dialog box\n2. HTML form inputs\n\nExample:\nlet name = prompt('What is your name?');\nconsole.log('Hello ' + name);`,
          duration: '10 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which method displays a dialog box for user input?",
              options: ["alert()", "prompt()", "console.log()", "input()"],
              correctAnswer: "prompt()"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Working with Data',
      isExpanded: false,
      lessons: [
        {
          id: 9,
          title: 'Comparison Operations',
          type: 'text',
          content: `JavaScript has comparison operators:\n\n- Equal: == or ===\n- Not equal: != or !==\n- Greater than: >\n- Less than: <\n\nExample:\n5 > 3 // true\n'5' === 5 // false (different types)`,
          duration: '10 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which comparison checks both value and type?",
              options: ["==", "===", "=", ">"],
              correctAnswer: "==="
            }
          ]
        },
        {
          id: 10,
          title: 'Objects and Dot Notation',
          type: 'text',
          content: `Objects store key-value pairs:\n\nlet person = {\n  name: 'Alice',\n  age: 30\n};\n\nAccess properties with dot notation:\nperson.name // 'Alice'\n\nOr bracket notation:\nperson['age'] // 30`,
          duration: '12 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "How do you access object properties?",
              options: [
                "Only with dot notation",
                "Only with bracket notation",
                "With either dot or bracket notation",
                "Objects don't have properties"
              ],
              correctAnswer: "With either dot or bracket notation"
            }
          ]
        },
        {
          id: 11,
          title: 'Logical Operations',
          type: 'text',
          content: `Logical operators:\n\n- AND: &&\n- OR: ||\n- NOT: !\n\nExample:\nlet age = 25;\nage > 18 && age < 30 // true\n\nThese are often used in conditional statements.`,
          duration: '10 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which operator represents logical AND?",
              options: ["||", "&&", "!", "AND"],
              correctAnswer: "&&"
            }
          ]
        },
        {
          id: 12,
          title: 'Data Types',
          type: 'text',
          content: `JavaScript has dynamic types. The same variable can hold different types:\n\nlet x = 5; // Number\nx = 'hello'; // String\nx = true; // Boolean\n\nUse typeof to check a variable's type:\ntypeof x // 'boolean'`,
          duration: '10 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "How do you check a variable's type?",
              options: ["type()", "typeof", "checkType()", "variable.type"],
              correctAnswer: "typeof"
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: 'Control Flow',
      isExpanded: false,
      lessons: [
        {
          id: 13,
          title: 'Control Flow Basics',
          type: 'text',
          content: `Control flow determines the order in which code executes. JavaScript has:\n\n- Conditionals (if/else)\n- Loops (for, while)\n- Switch statements\n\nThese let you make decisions and repeat actions.`,
          duration: '8 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "What controls the order of code execution?",
              options: [
                "Control flow",
                "Variable declarations",
                "Comments",
                "Functions"
              ],
              correctAnswer: "Control flow"
            }
          ]
        },
        {
          id: 14,
          title: 'Conditional Statements',
          type: 'text',
          content: `if/else statements execute code based on conditions:\n\nlet age = 20;\nif (age >= 18) {\n  console.log('Adult');\n} else {\n  console.log('Minor');\n}\n\n// Outputs 'Adult'`,
          duration: '10 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "What does an if statement check?",
              options: [
                "Variable types",
                "Conditions",
                "Function returns",
                "Loop counts"
              ],
              correctAnswer: "Conditions"
            }
          ]
        },
        {
          id: 15,
          title: 'Verification',
          type: 'text',
          content: `You can verify values before using them:\n\nlet name = '';\nif (!name) {\n  name = 'Guest';\n}\n\n// Falsy values: false, 0, '', null, undefined, NaN\n// Truthy values: everything else`,
          duration: '10 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "Which is NOT a falsy value in JavaScript?",
              options: ["0", "''", "null", "'false'"],
              correctAnswer: "'false'"
            }
          ]
        },
        {
          id: 16,
          title: 'While Loops',
          type: 'text',
          content: `while loops repeat code while a condition is true:\n\nlet count = 0;\nwhile (count < 5) {\n  console.log(count);\n  count++;\n}\n\n// Outputs 0, 1, 2, 3, 4\n\nBe careful to avoid infinite loops!`,
          duration: '10 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "When does a while loop stop?",
              options: [
                "After a set number of iterations",
                "When the condition becomes false",
                "When it reaches a return statement",
                "Never, it runs forever"
              ],
              correctAnswer: "When the condition becomes false"
            }
          ]
        },
        {
          id: 17,
          title: 'For Loops',
          type: 'text',
          content: `for loops are often used when you know how many times to repeat:\n\nfor (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n\n// Outputs 0, 1, 2, 3, 4\n\nStructure:\n1. Initialization (let i = 0)\n2. Condition (i < 5)\n3. Increment (i++)`,
          duration: '10 min',
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              question: "What are the three parts of a for loop?",
              options: [
                "if, else, end",
                "start, middle, end",
                "initialization, condition, increment",
                "variable, function, return"
              ],
              correctAnswer: "initialization, condition, increment"
            }
          ]
        }
      ]
    }
  ]);

  const [activeLesson, setActiveLesson] = useState<{
    chapterId: number;
    lesson: Lesson;
  } | null>(null);

  const totalLessons = chapters.reduce((sum, ch) => sum + ch.lessons.length, 0);
  const completedLessons = chapters.reduce(
    (sum, ch) => sum + ch.lessons.filter(l => l.isCompleted).length,
    0
  );
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);

  const toggleChapter = (chapterId: number) => {
    setChapters(prev =>
      prev.map(ch =>
        ch.id === chapterId
          ? { ...ch, isExpanded: !ch.isExpanded }
          : ch
      )
    );
  };

  const QuizComponent = ({
    questions,
    onComplete
  }: {
    questions: QuizQuestion[];
    onComplete: () => void;
  }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);

    const handleAnswer = (answer: string) => {
      if (answer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
      setSelectedAnswer(answer);
    };

    const nextQuestion = () => {
      setSelectedAnswer('');
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        onComplete();
      }
    };

    return (
        <div className="mt-6 bg-gray-50 dark:bg-gray-100 p-4 rounded-lg animate-fadeIn">
          <h3 className="text-xl font-semibold mb-4">Quiz ({currentQuestion + 1}/{questions.length})</h3>
          <p className="mb-4 font-medium">{questions[currentQuestion].question}</p>
          <div className="grid gap-2">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`p-3 rounded-lg text-left transition-all ${
                  selectedAnswer === option
                    ? option === questions[currentQuestion].correctAnswer
                      ? 'bg-green-100 dark:bg-green-900 text-white '
                      : 'bg-red-100 dark:bg-red-900 text-white' 
                    : 'bg-white dark:bg-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-white'
                }`}
                disabled={!!selectedAnswer}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={nextQuestion}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            disabled={!selectedAnswer}
          >
            {currentQuestion < questions.length - 1 ? 'Next Question →' : 'Finish Quiz'}
          </button>
          {currentQuestion === questions.length - 1 && selectedAnswer && (
            <p className="mt-4 font-semibold">
              Your Score: {score}/{questions.length}
            </p>
          )}
        </div>
      );
    };
  
  const handleLessonComplete = (chapterId: number, lessonId: number) => {
    setChapters(prevChapters => {
      const updatedChapters = prevChapters.map(chapter => {
        if (chapter.id === chapterId) {
          return {
            ...chapter,
            lessons: chapter.lessons.map(lesson =>
              lesson.id === lessonId ? { ...lesson, isCompleted: true } : lesson
            )
          };
        }
        return chapter;
      });

      const currentChapterIndex = updatedChapters.findIndex(ch => ch.id === chapterId);
      const currentChapter = updatedChapters[currentChapterIndex];
      const allCompleted = currentChapter.lessons.every(lesson => lesson.isCompleted);

      if (allCompleted && updatedChapters[currentChapterIndex + 1]) {
        updatedChapters[currentChapterIndex + 1] = {
          ...updatedChapters[currentChapterIndex + 1],
          lessons: updatedChapters[currentChapterIndex + 1].lessons.map(lesson => ({
            ...lesson,
            isLocked: false
          }))
        };
      }

      return updatedChapters;
    });
    setActiveLesson(null);
  };

  
  return (
    <>
    <NavBarP/>
    <div className={`min-h-screen transition-colors duration-300 `}>
      
      <div className="flex items-center justify-between max-w-4xl mx-auto pt-8 pb-4 px-4">
        <h1 className="text-3xl font-extrabold tracking-tight">JavaScript Interactive Course</h1>
        
      </div>

      
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="flex items-center gap-6 mb-4">
          
          <div className="flex-shrink-0">
          <svg width="64" height="64" viewBox="0 0 128 128">
              <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
              <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Introduction to JavaScript</h2>
            <p className="text-base text-gray-100 dark:text-gray-600">
            Ever wanted to make websites interactive, code fun mobile apps, or work with artificial intelligence? JavaScript lets you do all of that! No wonder it's one of the most popular programming languages out there. This course is perfect for beginners — no coding experience is needed. By the end of this course, you'll know the basics of using JavaScript to make an interactive website.
            </p>
            </div>
        </div>
      </div>

      
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-sm font-medium">Progress</span>
          <span className="text-xs text-gray-500">{completedLessons}/{totalLessons} lessons</span>
          <span className="text-xs text-gray-500">{progressPercent}%</span>
        </div>
        <div className="w-full bg-gray-300 dark:bg-gray-350 rounded-full h-4 overflow-hidden">
          <div
            className="bg-blue-600 h-4 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      
      <div className="max-w-4xl mx-auto px-4 pb-16">
        {chapters.map(chapter => {
          const chapterCompleted = chapter.lessons.every(l => l.isCompleted);
          return (
            <div key={chapter.id} className="mb-6 bg-white dark:bg-gray-100 rounded-xl shadow-lg transition-all">
              <button
                className="w-full flex items-center justify-between p-4 border-b dark:border-gray-800 rounded-t-xl focus:outline-none"
                onClick={() => toggleChapter(chapter.id)}
                aria-expanded={chapter.isExpanded}
              >
                <div className="flex items-center gap-2">
                  <span className={`font-semibold text-lg ${chapterCompleted ? 'text-green-600' : ''}`}>{chapter.title}</span>
                  {chapterCompleted && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                </div>
                {chapter.isExpanded ? <ChevronUp /> : <ChevronDown />}
              </button>
              {chapter.isExpanded && (
                <div className="p-4 animate-fadeIn">
                  {chapter.lessons.map(lesson => (
                    <div
                      key={lesson.id}
                      className={`flex items-center justify-between p-4 mb-2 rounded-lg transition-colors border dark:border-gray-800 ${
                        lesson.isLocked
                          ? 'bg-gray-100 dark:bg-gray-100 text-black cursor-not-allowed'
                          : 'bg-gray-50 dark:bg-gray-200 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-white cursor-pointer'
                      }`}
                      onClick={() => !lesson.isLocked && setActiveLesson({ chapterId: chapter.id, lesson })}
                    >
                      <div>
                        <h3 className="font-medium">{lesson.title}</h3>
                        <p className="text-xs text-gray-500">{lesson.duration}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {lesson.isLocked && <Lock className="w-5 h-5" />}
                        {lesson.isCompleted && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      
      {activeLesson && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white dark:bg-gray-100 p-6 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl animate-fadeIn">
            <button
              onClick={() => setActiveLesson(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-100 rounded-full"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4">{activeLesson.lesson.title}</h2>
            <div className="prose dark:prose-invert mb-6">
              {activeLesson.lesson.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
            {activeLesson.lesson.quiz ? (
              <QuizComponent
                questions={activeLesson.lesson.quiz}
                onComplete={() => handleLessonComplete(activeLesson.chapterId, activeLesson.lesson.id)}
              />
            ) : (
              <button
                onClick={() => handleLessonComplete(activeLesson.chapterId, activeLesson.lesson.id)}
                className="w-full bg-green-100 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Mark as Complete
              </button>
            )}
          </div>
        </div>
      )}

      <style>{`
        .animate-fadeIn { animation: fadeIn 0.3s; }
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
    </>
  );
}
