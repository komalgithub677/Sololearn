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

  // --- COURSE DATA ---
  const [chapters, setChapters] = useState<Chapter[]>([
{
      id: 1,
      title: 'Python Introduction',
      isExpanded: true,
      lessons: [
        {
          id: 1,
          title: 'What is Python?',
          type: 'text',
          content: `Python is a very popular general-purpose interpreted, object-oriented, and high-level programming language. Python is dynamically-typed and garbage-collected programming language. It was created by Guido van Rossum during 1985- 1990. It has the represented by .py`,
          duration: '5 min',
          isCompleted: false,
          isLocked: false,
          quiz: [
         {
          question: "Who developed Python?",
          options: ["Dennis Ritchie", "Guido van Rossum", "James Gosling", "Bjarne Stroustrup"],
          correctAnswer: "Guido van Rossum"
        },
        {
          question: "What is the correct file extension for Python files?",
          options: [".python", ".py", ".pt", ".p"],
          correctAnswer: ".py"
        },        
            {
              question: "What type of language is Python?",
              options: [
              "Compiled, low-level, and Structured",
              "Compiled, high-level, object-oriented",
              "Interpreted, high-level, and object-oriented.",
              "Interpreted, low-level, and object-oriented."

              ],
              correctAnswer: "Interpreted, high-level, and object-oriented."
            }
          ]
        },
        {
          id: 2,
          title: 'Python Basics and Syntax',
          type: 'text',
          content: `A basic Python code has a specific structure:\n\nprint ("Hello, World!")
          We use print() to print the code in Python and there will be no semicolon at the end of the print statement.`,
          duration: '10 min',
          isCompleted: false,
          isLocked: false,
          quiz: [
            {
              question: "What is the correct syntax of the code",
              options: ["printf(\"Hello, World!\");", "print(\"Hello, World!\")", "console.log(\"Hello, World!\");", "prints(\"Hello, World!\");"],
              correctAnswer: "print(\"Hello, World!\")"
            }
          ]
        },
        {
          id: 3,
          title: 'Python Variables',
          type: 'text',
          content: "In Python, variables are used to store data values. A variable is created the moment you assign a value to it. \nExample: \nx = 10        # Integer\nname = 'Tom'  # String\nprice = 19.99 # Float "
          ,
          duration: '8 min',
          isCompleted: false,
          isLocked: false,
          quiz: [
            {
              question: "What data type is assigned to the variable 'price' in the code?",
              options: ["int", "str", "float", "bool"],
              correctAnswer: "float"
            },

            {
              question: "Which of the following is a valid variable name?",
              options: ["2value", "value_1", "value-1", "value 1"],
              correctAnswer: "value_1"
            },

            {
              question: "Do we declare the type of variable in Python?",
              options:["Yes", "No"],
              correctAnswer: "No"
            },
          ]
        },
        {
          id: 4,
          title: 'Python Datatypes',
          type: 'text',
          content: `In Python, data types define the kind of value a variable holds. Python is dynamically typed, so you don't need to declare types explicitly.

Here are some common data types in Python:

- int: Integer numbers (e.g., x = 5)
- float: Decimal numbers (e.g., pi = 3.14)
- str: Text or characters (e.g., name = "Alice")
- bool: Boolean values (True or False)
- list: Ordered, mutable collection (e.g., items = [1, 2, 3])
- tuple: Ordered, immutable collection (e.g., coords = (10, 20))
- dict: Key-value pairs (e.g., student = {"name": "Tom", "age": 20})

Python automatically determines the type when you assign a value.`,
          duration: '5 min',
          isCompleted: false,
          isLocked: false,
          quiz: [
            {
      question: "Which data type is used to store a sequence of key-value pairs in Python?",
      options: ["list", "tuple", "dict", "set"],
      correctAnswer: "dict"
    },
    {
      question: "What is the data type of the value: True?",
      options: ["bool", "str", "int", "float"],
      correctAnswer: "bool"
    },
    {
      question: "Which of the following is an immutable data type in Python?",
      options: ["list", "dict", "tuple", "set"],
      correctAnswer: "tuple"
    }
          ]
        },
      ]
},
{
  id: 2,
  title: 'Variables and Data Types',
  isExpanded: true,
  lessons: [
    {
      id: 5,
      title: 'Python Variables',
      type: 'text',
      content: `Variables store data values in Python. They are created when you assign a value using the = operator.

Example:
x = 5
name = "Alice"`,
      duration: '6 min',
      isCompleted: false,
      isLocked: false,
      quiz: [
        {
          question: "Which of these is a valid variable assignment?",
          options: ["x == 5", "5 = x", "x = 5", "let x = 5"],
          correctAnswer: "x = 5"
        },
        {
          question: "What symbol is used to assign a value to a variable in Python?",
          options: ["==", "=", ":=", "->"],
          correctAnswer: "="
        }
      ]
    },
    {
      id: 6,
      title: 'Data Types',
      type: 'text',
      content: `Python has several built-in data types:

- int for integers
- float for decimal numbers
- str for text (strings)
- bool for True or False
- list, tuple, dict, set for collections`,
      duration: '7 min',
      isCompleted: false,
      isLocked: false,
      quiz: [
        {
          question: "What data type is used to store text?",
          options: ["int", "str", "float", "bool"],
          correctAnswer: "str"
        },
        {
          question: "Which of these is a floating-point number?",
          options: ["5", "'5.0'", "5.0", "True"],
          correctAnswer: "5.0"
        }
      ]
    }
  ]
},

{
  id: 3,
  title: 'User Input and Type Conversion',
  isExpanded: true,
  lessons: [
    {
      id: 7,
      title: 'Getting User Input',
      type: 'text',
      content: `Use the input() function to get input from the user. It always returns a string.

Example:
name = input("Enter your name: ")
print("Hello, " + name)`,
      duration: '6 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "What function is used to get input from the user?",
          options: ["get()", "input()", "read()", "scanf()"],
          correctAnswer: "input()"
        },
        {
          question: "What is the data type of input() return value?",
          options: ["int", "str", "float", "bool"],
          correctAnswer: "str"
        }
      ]
    },
    {
      id: 8,
      title: 'Type Conversion',
      type: 'text',
      content: `Use built-in functions to convert data types:

- int() to convert to integer
- float() to convert to float
- str() to convert to string

Example:
age = int(input("Enter age: "))`,
      duration: '7 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "How do you convert a string to an integer?",
          options: ["str()", "float()", "int()", "bool()"],
          correctAnswer: "int()"
        },
        {
          question: "What will int('5.6') return?",
          options: ["5.6", "6", "Error", "5"],
          correctAnswer: "Error"
        }
      ]
    }
  ]
},

{
  id: 4,
  title: 'Control Flow',
  isExpanded: true,
  lessons: [
    {
      id: 9,
      title: 'If Statements',
      type: 'text',
      content: `Python uses if, elif, and else to perform conditional logic.

Example:
x = 10
if x > 5:
    print("x is greater than 5")
elif x == 5:
    print("x is 5")
else:
    print("x is less than 5")`,
      duration: '7 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "Which keyword is used to start a conditional block?",
          options: ["switch", "when", "if", "for"],
          correctAnswer: "if"
        },
        {
          question: "What does the 'elif' keyword mean?",
          options: [
            "Else If",
            "Else Loop",
            "Element If",
            "Error If"
          ],
          correctAnswer: "Else If"
        }
      ]
    },
    {
      id: 10,
      title: 'For Loops',
      type: 'text',
      content: `Use for loops to iterate over a sequence.

Example:
for i in range(3):
    print(i)

This prints 0, 1, 2.`,
      duration: '6 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "What does range(3) return?",
          options: [
            "[1, 2, 3]",
            "[0, 1, 2]",
            "[0, 1, 2, 3]",
            "3"
          ],
          correctAnswer: "[0, 1, 2]"
        },
        {
          question: "Which keyword is used to iterate in Python?",
          options: ["loop", "repeat", "foreach", "for"],
          correctAnswer: "for"
        }
      ]
    },
    {
      id: 11,
      title: 'While Loops',
      type: 'text',
      content: `A while loop repeats as long as a condition is true.

Example:
x = 0
while x < 3:
    print(x)
    x += 1`,
      duration: '6 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "When does a while loop stop?",
          options: [
            "After 1 loop",
            "When a break is found",
            "When the condition becomes false",
            "When the variable is 0"
          ],
          correctAnswer: "When the condition becomes false"
        },
        {
          question: "What will happen if the while condition is always True?",
          options: [
            "The program stops",
            "It gives an error",
            "An infinite loop occurs",
            "It skips the loop"
          ],
          correctAnswer: "An infinite loop occurs"
        }
      ]
    }
  ]
},

{
  id: 5,
  title: 'Functions',
  isExpanded: true,
  lessons: [
    {
      id: 12,
      title: 'Defining Functions',
      type: 'text',
      content: `Functions help reuse code and make programs more organized.\n\nUse the \`def\` keyword to define a function:\n\nExample:\ndef greet():\n    print("Hello!")\n\ngreet()  # Calling the function`,
      duration: '6 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "Which keyword is used to define a function in Python?",
          options: ["func", "function", "def", "define"],
          correctAnswer: "def"
        },
        {
          question: "How do you call a function named greet?",
          options: ["call greet()", "run greet", "greet()", "call(greet)"],
          correctAnswer: "greet()"
        }
      ]
    },
    {
      id: 13,
      title: 'Function Parameters and Return',
      type: 'text',
      content: `Functions can accept parameters and return values.\n\nExample:\ndef add(a, b):\n    return a + b\n\nresult = add(5, 3)  # result = 8`,
      duration: '8 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "What is the purpose of the 'return' keyword?",
          options: [
            "To print the output",
            "To end the function",
            "To return a value from the function",
            "To define a loop"
          ],
          correctAnswer: "To return a value from the function"
        },
        {
          question: "What will be the output of add(2, 3) if the function is defined as def add(a, b): return a + b?",
          options: ["23", "2", "3", "5"],
          correctAnswer: "5"
        }
      ]
    },
    {
      id: 14,
      title: 'Default and Keyword Arguments',
      type: 'text',
      content: `Python allows default parameter values and keyword arguments.\n\nExample:\ndef greet(name="User"):\n    print("Hello,", name)\n\ngreet()       # Hello, User\ngreet("Tom")  # Hello, Tom`,
      duration: '7 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "What is a default parameter?",
          options: [
            "A required input",
            "A variable defined outside the function",
            "A parameter with a pre-set value",
            "An error handler"
          ],
          correctAnswer: "A parameter with a pre-set value"
        },
        {
          question: "What does greet() print in the example above?",
          options: ["Hello, name", "Hello, Tom", "Hello, User", "Error"],
          correctAnswer: "Hello, User"
        }
      ]
    }
  ]
},

{
  id: 6,
  title: 'Lists and Tuples',
  isExpanded: true,
  lessons: [
    {
      id: 15,
      title: 'Introduction to Lists',
      type: 'text',
      content: `A list is a collection of items that is **ordered** and **mutable** (changeable).\n\nExample:\nfruits = ["apple", "banana", "cherry"]\n\nYou can access list items by index (starting from 0):\nprint(fruits[1])  # banana`,
      duration: '6 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "What is the index of 'banana' in the list ['apple', 'banana', 'cherry']?",
          options: ["0", "1", "2", "3"],
          correctAnswer: "1"
        },
        {
          question: "Are lists mutable in Python?",
          options: ["Yes", "No", "Only sometimes", "Depends on the items"],
          correctAnswer: "Yes"
        }
      ]
    },
    {
      id: 16,
      title: 'List Methods',
      type: 'text',
      content: `Python provides several methods to work with lists:\n- append() to add an item\n- remove() to delete an item\n- sort() to sort the list\n\nExample:\nnumbers = [4, 2, 9]\nnumbers.append(1)  # [4, 2, 9, 1]`,
      duration: '7 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "Which method adds an item to the end of a list?",
          options: ["add()", "append()", "insert()", "push()"],
          correctAnswer: "append()"
        },
        {
          question: "What does sort() do to a list?",
          options: [
            "Deletes it",
            "Returns the length",
            "Reverses it",
            "Arranges items in order"
          ],
          correctAnswer: "Arranges items in order"
        }
      ]
    },
    {
      id: 17,
      title: 'Tuples',
      type: 'text',
      content: `A tuple is a collection of items that is **ordered** but **immutable** (cannot be changed).\n\nExample:\ncoordinates = (10, 20)\nprint(coordinates[0])  # 10\n\nUse tuples when you want to make sure data cannot be changed.`,
      duration: '6 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "What is the main difference between a list and a tuple?",
          options: [
            "Lists are unordered, tuples are ordered",
            "Lists are immutable, tuples are mutable",
            "Lists are mutable, tuples are immutable",
            "No difference"
          ],
          correctAnswer: "Lists are mutable, tuples are immutable"
        },
        {
          question: "How do you define a tuple?",
          options: [
            "Using square brackets []",
            "Using curly braces {}",
            "Using parentheses ()",
            "Using angle brackets <>"
          ],
          correctAnswer: "Using parentheses ()"
        }
      ]
    }
  ]
},

{
  id: 7,
  title: 'Dictionaries',
  isExpanded: true,
  lessons: [
    {
      id: 18,
      title: 'Introduction to Dictionaries',
      type: 'text',
      content: `A dictionary is a collection of **key-value** pairs. It is **unordered**, **mutable**, and indexed by keys.\n\nExample:\nstudent = {"name": "Alice", "age": 20, "grade": "A"}\n\nAccess values using keys:\nprint(student["name"])  # Alice`,
      duration: '6 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "What is the correct syntax for a dictionary?",
          options: [
            '["key" = "value"]',
            '{"key": "value"}',
            '(key: value)',
            '<key = value>'
          ],
          correctAnswer: '{"key": "value"}'
        },
        {
          question: "How do you access the value of 'name' in this dictionary: student = {\"name\": \"Tom\"}?",
          options: [
            'student.name',
            'student["name"]',
            'student->name',
            'student["Tom"]'
          ],
          correctAnswer: 'student["name"]'
        }
      ]
    },
    {
      id: 19,
      title: 'Dictionary Methods',
      type: 'text',
      content: `Dictionaries have useful methods:\n- keys() – returns a list of keys\n- values() – returns a list of values\n- items() – returns all key-value pairs\n- get(key) – returns the value or None if key not found\n\nExample:\nstudent.get("grade")`,
      duration: '7 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "Which method safely accesses a value from a dictionary?",
          options: ["fetch()", "get()", "retrieve()", "access()"],
          correctAnswer: "get()"
        },
        {
          question: "Which method returns all key-value pairs in a dictionary?",
          options: ["pairs()", "keys()", "items()", "values()"],
          correctAnswer: "items()"
        }
      ]
    },
    {
      id: 20,
      title: 'Adding and Updating Items',
      type: 'text',
      content: `You can add a new key-value pair or update an existing one:\n\nstudent = {"name": "Tom"}\nstudent["age"] = 21  # Add new key\nstudent["name"] = "Alice"  # Update existing key`,
      duration: '6 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "How do you add a new key 'grade' to a dictionary?",
          options: [
            'dict.add("grade", "A")',
            'dict["grade"] = "A"',
            'dict.insert("grade", "A")',
            'dict.push("grade", "A")'
          ],
          correctAnswer: 'dict["grade"] = "A"'
        },
        {
          question: "What happens if you assign a new value to an existing key?",
          options: [
            "It creates a new key",
            "It updates the value",
            "It deletes the key",
            "It raises an error"
          ],
          correctAnswer: "It updates the value"
        }
      ]
    }
  ]
},

{
  id: 8,
  title: 'Object-Oriented Programming (OOP)',
  isExpanded: true,
  lessons: [
    {
      id: 21,
      title: 'Classes and Objects',
      type: 'text',
      content: `A class is a blueprint for creating objects. An object is an instance of a class.\n\nExample:\nclass Person:\n  def __init__(self, name):\n    self.name = name\n\np1 = Person("Alice")\nprint(p1.name)`,
      duration: '7 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "What is a class in Python?",
          options: [
            "A collection of functions",
            "A blueprint for objects",
            "A method inside a function",
            "A loop structure"
          ],
          correctAnswer: "A blueprint for objects"
        },
        {
          question: "How do you create an object in Python?",
          options: [
            "obj = Person.create()",
            "obj = new Person()",
            "obj = Person()",
            "obj = Person.new()"
          ],
          correctAnswer: "obj = Person()"
        }
      ]
    },
    {
      id: 22,
      title: 'The __init__ Method',
      type: 'text',
      content: `The __init__ method is called when an object is created. It initializes the object.\n\nclass Car:\n  def __init__(self, model):\n    self.model = model`,
      duration: '6 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "What is the purpose of the __init__ method?",
          options: [
            "To destroy an object",
            "To print a value",
            "To initialize an object",
            "To create a class"
          ],
          correctAnswer: "To initialize an object"
        },
        {
          question: "What does 'self' refer to in a class?",
          options: [
            "A global variable",
            "The current module",
            "The instance of the class",
            "The class itself"
          ],
          correctAnswer: "The instance of the class"
        }
      ]
    },
    {
      id: 23,
      title: 'Methods and Attributes',
      type: 'text',
      content: `Attributes are variables inside a class. Methods are functions defined inside a class.\n\nclass Dog:\n  def __init__(self, name):\n    self.name = name\n  def bark(self):\n    return "Woof!"`,
      duration: '7 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "What is an attribute in a Python class?",
          options: [
            "A loop",
            "A method",
            "A variable that belongs to a class",
            "A built-in function"
          ],
          correctAnswer: "A variable that belongs to a class"
        },
        {
          question: "How do you define a method in a class?",
          options: [
            "def methodName():",
            "methodName():",
            "define methodName():",
            "function methodName():"
          ],
          correctAnswer: "def methodName():"
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
                    ? 'bg-green-100 dark:bg-green-900 text-white'
                    : 'bg-red-100 dark:bg-red-900 text-white'
                  : 'bg-white dark:bg-gray-200 dark:hover:bg-gray-600 hover:text-white'
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
        <h1 className="text-3xl font-extrabold tracking-tight">Python Interactive Course</h1>
        
      </div>

      
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="flex items-center gap-6 mb-4">
          
          <div className="flex-shrink-0">
          <svg
    viewBox="0 0 128 128"
    width={64}
    height={64}
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
      <stop offset="0" stopColor="#5A9FD4" />
      <stop offset="1" stopColor="#306998" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M63.79 0c-5.66.026-11.09.51-15.94 1.368-14.12 2.467-16.65 7.63-16.65 17.187v12.59h33.3v4.197H23.4c-9.444 0-17.73 5.674-20.3 16.45-2.97 12.348-3.104 20.064 0 32.926 2.31 9.652 7.82 16.45 17.265 16.45h11.394v-15.17c0-10.94 9.468-20.61 20.3-20.61h33.282c9.06 0 16.65-7.62 16.65-17.188V18.555c0-9.17-7.592-15.63-16.65-17.188C75.28.52 69.45-.026 63.79 0zm-18.43 9.854c2.766 0 5.002 2.273 5.002 5.08 0 2.8-2.236 5.054-5.002 5.054-2.767 0-5.002-2.254-5.002-5.054 0-2.807 2.235-5.08 5.002-5.08z"
    />
    <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
      <stop offset="0" stopColor="#FFD43B" />
      <stop offset="1" stopColor="#FFE873" />
    </linearGradient>
    <path
      fill="url(#b)"
      d="M92.57 36.173v14.884c0 11.32-9.63 20.916-20.3 20.916H39.02c-9.07 0-16.65 7.81-16.65 17.187v28.94c0 9.17 8.04 14.57 16.65 17.187 10.54 3.103 20.61 3.67 33.282 0 8.38-2.424 16.65-7.294 16.65-17.187v-12.59H55.2v-4.197h38.58c9.444 0 12.96-6.645 15.94-16.45 3.33-10.21 3.19-20.06 0-32.926-2.35-9.47-6.485-16.45-15.94-16.45h-1.21zM83.96 103.6c2.77 0 5 2.255 5 5.054 0 2.81-2.23 5.08-5 5.08-2.77 0-5.01-2.273-5.01-5.08 0-2.8 2.24-5.054 5.01-5.054z"
    />
  </svg>



          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Introduction to python</h2>
            <p className="text-base text-gray-100 dark:text-gray-600">
            Python is a high-level, interpreted, general-purpose programming language known for its readability and simplicity. It supports multiple programming paradigms like procedural, object-oriented, and functional programming.
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
