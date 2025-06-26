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
  title: 'C Language Introduction',
  isExpanded: true,
  lessons: [
    {
      id: 1,
      title: 'What is C Language?',
      type: 'text',
      content: `C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Labs in the early 1970s. It is widely used for system programming, embedded systems, and operating systems due to its efficiency and low-level memory access capabilities.`,
      duration: '5 min',
      isCompleted: false,
      isLocked: false,
      quiz: [
        {
          question: "Who developed the C programming language?",
          options: ["Dennis Ritchie", "Guido van Rossum", "James Gosling", "Bjarne Stroustrup"],
          correctAnswer: "Dennis Ritchie"
        },
        {
          question: "What is the correct file extension for C source files?",
          options: [".c", ".cpp", ".h", ".cs"],
          correctAnswer: ".c"
        },
        {
          question: "What type of programming language is C?",
          options: [
            "Procedural and low-level",
            "Object-oriented",
            "Functional",
            "Logic programming"
          ],
          correctAnswer: "Procedural and low-level"
        }
      ]
    },
    {
      id: 2,
      title: 'Basic Syntax of C',
      type: 'text',
      content: `A basic C program has the following structure:

#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}

C programs start execution from the main() function. The #include directive is used to include standard libraries.`,
      duration: '8 min',
      isCompleted: false,
      isLocked: false,
      quiz: [
        {
          question: "Which header file is used for input/output functions in C?",
          options: ["<iostream>", "<stdio.h>", "<stdlib.h>", "<conio.h>"],
          correctAnswer: "<stdio.h>"
        },
        {
          question: "What is the entry point function for a C program?",
          options: ["start()", "main()", "init()", "program()"],
          correctAnswer: "main()"
        }
      ]
    },
    {
      id: 3,
      title: 'Variables and Data Types in C',
      type: 'text',
      content: `In C, variables are used to store data. You must declare the type of variable before using it.

Common data types include:
- int: integer numbers
- float: floating point numbers
- char: single characters
- double: double precision floating numbers

Example:
int age = 25;
char grade = 'A';`,
      duration: '7 min',
      isCompleted: false,
      isLocked: false,
      quiz: [
        {
          question: "Which data type is used to store whole numbers in C?",
          options: ["int", "float", "char", "double"],
          correctAnswer: "int"
        },
        {
          question: "Which of these is a valid variable declaration?",
          options: ["int 2var;", "float number;", "char 'c';", "double;"],
          correctAnswer: "float number;"
        },
        {
          question: "Do you need to declare the data type of a variable in C?",
          options: ["Yes", "No"],
          correctAnswer: "Yes"
        }
      ]
    },
    {
      id: 4,
      title: 'Operators and Expressions',
      type: 'text',
      content: `C supports various operators to perform operations on variables:

- Arithmetic operators: +, -, *, /, %
- Relational operators: ==, !=, >, <, >=, <=
- Logical operators: &&, ||, !

Example:
int sum = a + b;
if (a > b && b != 0) { ... }`,
      duration: '6 min',
      isCompleted: false,
      isLocked: false,
      quiz: [
        {
          question: "Which operator is used for equality comparison?",
          options: ["=", "==", "!=", ">"],
          correctAnswer: "=="
        },
        {
          question: "What does % operator do?",
          options: ["Division", "Modulus", "Multiplication", "Addition"],
          correctAnswer: "Modulus"
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
      title: 'C Variables',
      type: 'text',
      content: `In C, variables are used to store data values. You must declare the variable's type before using it.

Example:
int x = 5;
char name[] = "Alice";`,
      duration: '6 min',
      isCompleted: false,
      isLocked: false,
      quiz: [
        {
          question: "Which of these is a valid variable assignment in C?",
          options: ["x == 5;", "5 = x;", "int x = 5;", "let x = 5;"],
          correctAnswer: "int x = 5;"
        },
        {
          question: "What symbol is used to assign a value to a variable in C?",
          options: ["==", "=", ":=", "->"],
          correctAnswer: "="
        }
      ]
    },
    {
      id: 6,
      title: 'Data Types in C',
      type: 'text',
      content: `C has several basic data types:

- int: integer numbers
- float: decimal numbers
- char: single characters
- double: double precision floating numbers
- void: represents no value (used for functions that return nothing)`,
      duration: '7 min',
      isCompleted: false,
      isLocked: false,
      quiz: [
        {
          question: "Which data type is used to store text (characters) in C?",
          options: ["int", "char", "float", "bool"],
          correctAnswer: "char"
        },
        {
          question: "Which of these represents a floating-point number in C?",
          options: ["5", "'5'", "5.0", "True"],
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
      content: `In C, user input can be read using the scanf() function from the standard input.

Example:
#include <stdio.h>

int main() {
    char name[50];
    printf("Enter your name: ");
    scanf("%s", name);
    printf("Hello, %s\\n", name);
    return 0;
}`,
      duration: '6 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "What function is used to get input from the user in C?",
          options: ["get()", "input()", "read()", "scanf()"],
          correctAnswer: "scanf()"
        },
        {
          question: "What format specifier is used to read a string in scanf?",
          options: ["%d", "%s", "%f", "%c"],
          correctAnswer: "%s"
        }
      ]
    },
    {
      id: 8,
      title: 'Type Conversion',
      type: 'text',
      content: `C allows conversion between data types using casting.

Example:
int x = 10;
float y = (float)x;  // converts int to float

Also, functions like atoi() convert strings to integers.

Example:
#include <stdlib.h>

int main() {
    char str[] = "123";
    int num = atoi(str);
    return 0;
}`,
      duration: '7 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "How do you explicitly convert an int to a float in C?",
          options: ["(float)intVar", "float(intVar)", "convert(intVar)", "toFloat(intVar)"],
          correctAnswer: "(float)intVar"
        },
        {
          question: "Which function converts a string to an integer in C?",
          options: ["stoi()", "atoi()", "strtoint()", "int()"],
          correctAnswer: "atoi()"
        }
      ]
    }
  ]
}
,

{
  id: 4,
  title: 'Control Flow',
  isExpanded: true,
  lessons: [
    {
      id: 9,
      title: 'If Statements',
      type: 'text',
      content: `C uses if, else if, and else to perform conditional logic.

Example:
#include <stdio.h>

int main() {
    int x = 10;
    if (x > 5) {
        printf("x is greater than 5\\n");
    } else if (x == 5) {
        printf("x is 5\\n");
    } else {
        printf("x is less than 5\\n");
    }
    return 0;
}`,
      duration: '7 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "Which keyword is used to start a conditional block in C?",
          options: ["switch", "when", "if", "loop"],
          correctAnswer: "if"
        },
        {
          question: "What keyword is used in C for 'else if' condition?",
          options: ["elif", "elseif", "else if", "else-if"],
          correctAnswer: "else if"
        }
      ]
    },
    {
      id: 10,
      title: 'For Loops',
      type: 'text',
      content: `Use for loops in C to execute a block of code a specific number of times.

Example:
#include <stdio.h>

int main() {
    for (int i = 0; i < 3; i++) {
        printf("%d\\n", i);
    }
    return 0;
}

This prints 0, 1, 2.`,
      duration: '6 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "What is the correct syntax for a for loop in C?",
          options: [
            "for i in range(3)",
            "for (int i = 0; i < 3; i++)",
            "foreach (i = 0; i < 3; i++)",
            "loop (i < 3)"
          ],
          correctAnswer: "for (int i = 0; i < 3; i++)"
        },
        {
          question: "What does the statement i++ do?",
          options: ["Increments i by 2", "Assigns i to 0", "Increments i by 1", "Checks if i is positive"],
          correctAnswer: "Increments i by 1"
        }
      ]
    },
    {
      id: 11,
      title: 'While Loops',
      type: 'text',
      content: `A while loop in C repeats as long as a condition remains true.

Example:
#include <stdio.h>

int main() {
    int x = 0;
    while (x < 3) {
        printf("%d\\n", x);
        x++;
    }
    return 0;
}`,
      duration: '6 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "When does a while loop stop in C?",
          options: [
            "After 1 iteration",
            "When break is called",
            "When the condition becomes false",
            "When x = 0"
          ],
          correctAnswer: "When the condition becomes false"
        },
        {
          question: "What happens if the condition in a while loop never becomes false?",
          options: [
            "The program stops",
            "It gives an error",
            "An infinite loop occurs",
            "The loop is skipped"
          ],
          correctAnswer: "An infinite loop occurs"
        }
      ]
    }
  ]
}
,

{
  id: 5,
  title: 'Functions',
  isExpanded: true,
  lessons: [
    {
      id: 12,
      title: 'Defining Functions',
      type: 'text',
      content: `Functions in C help organize code, improve reusability, and simplify debugging.

A function in C is defined using the return type, function name, and parameters.

Example:
#include <stdio.h>

void greet() {
    printf("Hello!\\n");
}

int main() {
    greet();  // Calling the function
    return 0;
}`,
      duration: '6 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "Which keyword is used to define a function in C?",
          options: ["func", "function", "void/int/char", "define"],
          correctAnswer: "void/int/char"
        },
        {
          question: "How do you call a function named greet in C?",
          options: ["call greet()", "run greet()", "greet();", "call(greet)"],
          correctAnswer: "greet();"
        }
      ]
    },
    {
      id: 13,
      title: 'Function Parameters and Return',
      type: 'text',
      content: `C functions can accept parameters and return values.

Example:
#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);  // result = 8
    printf("%d\\n", result);
    return 0;
}`,
      duration: '8 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "What is the purpose of the 'return' keyword in a C function?",
          options: [
            "To print the output",
            "To end the program",
            "To return a value from the function",
            "To declare a variable"
          ],
          correctAnswer: "To return a value from the function"
        },
        {
          question: "What will be the output of add(2, 3) if the function returns a + b?",
          options: ["23", "2", "3", "5"],
          correctAnswer: "5"
        }
      ]
    },
    {
      id: 14,
      title: 'Function Declarations and Prototypes',
      type: 'text',
      content: `In C, functions should be declared before they are used. A function prototype tells the compiler about the function's name, return type, and parameters.

Example:
int multiply(int, int);  // Function prototype

int multiply(int a, int b) {
    return a * b;
}

int main() {
    printf("%d", multiply(4, 5));
    return 0;
}`,
      duration: '7 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "Why is a function prototype used in C?",
          options: [
            "To prevent using the function",
            "To define the function logic",
            "To tell the compiler about the function before use",
            "To call the function"
          ],
          correctAnswer: "To tell the compiler about the function before use"
        },
        {
          question: "What does this prototype mean: int multiply(int, int)?",
          options: [
            "Function with no return type",
            "Function returns a float",
            "Function takes two integers and returns an integer",
            "Function takes strings as input"
          ],
          correctAnswer: "Function takes two integers and returns an integer"
        }
      ]
    }
  ]
}
,

{
  id: 6,
  title: 'Arrays and Structs',
  isExpanded: true,
  lessons: [
    {
      id: 15,
      title: 'Introduction to Arrays',
      type: 'text',
      content: `An array in C is a collection of items of the **same type** stored in **contiguous memory locations**.

Example:
int numbers[] = {10, 20, 30};

You can access array elements using an index (starting from 0):

printf("%d", numbers[1]);  // Output: 20`,
      duration: '6 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "What is the index of 20 in the array {10, 20, 30}?",
          options: ["0", "1", "2", "3"],
          correctAnswer: "1"
        },
        {
          question: "Are arrays in C mutable (changeable)?",
          options: ["Yes", "No", "Only constant arrays", "Only global arrays"],
          correctAnswer: "Yes"
        }
      ]
    },
    {
      id: 16,
      title: 'Working with Arrays',
      type: 'text',
      content: `In C, you can update, access, and loop through arrays using index values.

Example:
int numbers[3] = {4, 2, 9};
numbers[2] = 5;  // Update value at index 2

// Loop through array
for (int i = 0; i < 3; i++) {
    printf("%d\\n", numbers[i]);
}`,
      duration: '7 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "How do you change the third element of an array named numbers?",
          options: [
            "numbers[3] = 5;",
            "numbers[2] = 5;",
            "numbers(2) = 5;",
            "update(numbers[2], 5);"
          ],
          correctAnswer: "numbers[2] = 5;"
        },
        {
          question: "Which loop is commonly used to iterate over arrays in C?",
          options: ["while", "foreach", "for", "loop"],
          correctAnswer: "for"
        }
      ]
    },
    {
      id: 17,
      title: 'Structs (Tuple Equivalent)',
      type: 'text',
      content: `C does not have a built-in tuple type like Python, but you can use a **struct** to group multiple values of different types.

Example:
#include <stdio.h>

struct Point {
    int x;
    int y;
};

int main() {
    struct Point p1 = {10, 20};
    printf("%d", p1.x);  // Output: 10
    return 0;
}

Use structs to group related variables of different types.`,
      duration: '6 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "Which C construct allows grouping of multiple different data types?",
          options: ["Array", "Struct", "Enum", "Pointer"],
          correctAnswer: "Struct"
        },
        {
          question: "How do you access the x value from a struct Point p1?",
          options: [
            "p1->x",
            "p1.x",
            "Point.x",
            "x.p1"
          ],
          correctAnswer: "p1.x"
        }
      ]
    }
  ]
}
,

 {
  id: 7,
  title: 'Key-Value Mapping (Dictionaries)',
  isExpanded: true,
  lessons: [
    {
      id: 18,
      title: 'Simulating Dictionaries with Structs',
      type: 'text',
      content: `C does not have a built-in dictionary type like Python. However, you can simulate key-value storage using arrays of structs.

Example:
#include <stdio.h>
#include <string.h>

struct Student {
    char key[20];
    char value[20];
};

int main() {
    struct Student student[3] = {
        {"name", "Alice"},
        {"age", "20"},
        {"grade", "A"}
    };

    // Access a value
    printf("%s\\n", student[0].value);  // Alice
    return 0;
}`,
      duration: '6 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "How can key-value pairs be stored in C?",
          options: [
            "Using list and tuple",
            "Using arrays and loops",
            "Using struct and arrays",
            "Using functions"
          ],
          correctAnswer: "Using struct and arrays"
        },
        {
          question: "How do you access the value for the key 'name' in the above example?",
          options: [
            "student.name",
            "student[\"name\"]",
            "student[0].value",
            "student->value"
          ],
          correctAnswer: "student[0].value"
        }
      ]
    },
    {
      id: 19,
      title: 'Accessing and Searching Key-Value Pairs',
      type: 'text',
      content: `Since C doesn't support dictionaries natively, you need to manually search for a key.

Example:
#include <stdio.h>
#include <string.h>

struct Student {
    char key[20];
    char value[20];
};

int main() {
    struct Student student[3] = {
        {"name", "Alice"},
        {"age", "20"},
        {"grade", "A"}
    };

    // Search for "grade"
    for (int i = 0; i < 3; i++) {
        if (strcmp(student[i].key, "grade") == 0) {
            printf("%s\\n", student[i].value);
        }
    }

    return 0;
}`,
      duration: '7 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "How do you compare strings in C?",
          options: ["strcomp()", "==", "equals()", "strcmp()"],
          correctAnswer: "strcmp()"
        },
        {
          question: "What does strcmp(a, b) return if a and b are equal?",
          options: ["1", "0", "-1", "True"],
          correctAnswer: "0"
        }
      ]
    },
    {
      id: 20,
      title: 'Adding or Updating Values',
      type: 'text',
      content: `To add or update key-value pairs in C, you can modify struct elements directly.

Example:
#include <stdio.h>
#include <string.h>

struct Student {
    char key[20];
    char value[20];
};

int main() {
    struct Student student[3];

    strcpy(student[0].key, "name");
    strcpy(student[0].value, "Tom");

    // Add new key
    strcpy(student[1].key, "age");
    strcpy(student[1].value, "21");

    // Update existing key
    strcpy(student[0].value, "Alice");

    printf("%s\\n", student[0].value);  // Alice
    return 0;
}`,
      duration: '6 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "Which function is used to copy a string into a struct in C?",
          options: ["copy()", "strcopy()", "strcpy()", "sassign()"],
          correctAnswer: "strcpy()"
        },
        {
          question: "What happens when you assign a new value to an existing struct field?",
          options: [
            "It creates a new field",
            "It updates the existing value",
            "It deletes the struct",
            "It causes a segmentation fault"
          ],
          correctAnswer: "It updates the existing value"
        }
      ]
    }
  ]
}
,
  {
  id: 8,
  title: 'Object-Oriented Programming (OOP) Concepts in C',
  isExpanded: true,
  lessons: [
    {
      id: 21,
      title: 'Structs as Objects',
      type: 'text',
      content: `C doesn't have classes, but you can use a struct to define a data type similar to a class.

Example:
#include <stdio.h>

struct Person {
    char name[20];
};

int main() {
    struct Person p1;
    strcpy(p1.name, "Alice");
    printf("%s\\n", p1.name);
    return 0;
}`,
      duration: '7 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "What can be used in C to represent an object-like structure?",
          options: [
            "class",
            "struct",
            "array",
            "union"
          ],
          correctAnswer: "struct"
        },
        {
          question: "How do you create a variable from a struct?",
          options: [
            "Person p1;",
            "new Person();",
            "struct Person p1;",
            "Person.create();"
          ],
          correctAnswer: "struct Person p1;"
        }
      ]
    },
    {
      id: 22,
      title: 'Initializing Structs (Simulating Constructors)',
      type: 'text',
      content: `In C, you can simulate a constructor by writing a function that initializes a struct.

Example:
#include <stdio.h>
#include <string.h>

struct Car {
    char model[20];
};

void initCar(struct Car* c, const char* model) {
    strcpy(c->model, model);
}

int main() {
    struct Car myCar;
    initCar(&myCar, "Toyota");
    printf("%s\\n", myCar.model);
    return 0;
}`,
      duration: '6 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "How can constructors be simulated in C?",
          options: [
            "By using the __init__ keyword",
            "By using a constructor function",
            "Using malloc()",
            "C does not support this"
          ],
          correctAnswer: "By using a constructor function"
        },
        {
          question: "What does c->model mean?",
          options: [
            "Access the model from a struct pointer",
            "Assign a value to model",
            "Create a new variable",
            "None of the above"
          ],
          correctAnswer: "Access the model from a struct pointer"
        }
      ]
    },
    {
      id: 23,
      title: 'Simulating Methods with Functions',
      type: 'text',
      content: `In C, you can't define methods inside structs. Instead, define functions that take a struct as an argument.

Example:
#include <stdio.h>

struct Dog {
    char name[20];
};

void bark(struct Dog d) {
    printf("%s says Woof!\\n", d.name);
}

int main() {
    struct Dog dog1;
    strcpy(dog1.name, "Buddy");
    bark(dog1);
    return 0;
}`,
      duration: '7 min',
      isCompleted: false,
      isLocked: true,
      quiz: [
        {
          question: "How are methods simulated in C?",
          options: [
            "By defining functions outside structs",
            "Using inline methods",
            "Using def keyword",
            "You can't simulate methods"
          ],
          correctAnswer: "By defining functions outside structs"
        },
        {
          question: "What is passed to the function to simulate a method?",
          options: [
            "Struct as return",
            "Struct as a parameter",
            "Struct as pointer only",
            "Class object"
          ],
          correctAnswer: "Struct as a parameter"
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
        <h1 className="text-3xl font-extrabold tracking-tight">C Interactive Course</h1>
        
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
    <circle cx="64" cy="64" r="64" fill="#00599C" />
    <path
      fill="#FFFFFF"
      d="M85.4,43.2c-1.6-2.3-3.6-4.3-5.9-6s-5-3-7.9-3.9s-6-1.3-9.2-1.3
      c-5.6,0-10.6,1.2-15.2,3.6s-8.3,5.7-11.1,9.9s-4.2,9-4.2,14.3s1.4,10.3,4.2,14.4s6.5,7.5,11.1,9.8s9.6,3.6,15.2,3.6
      c3.2,0,6.3-0.4,9.2-1.3s5.6-2.1,7.9-3.9s4.3-3.7,5.9-6.1l-10.5-6.6c-1,1.6-2.3,2.9-4,4s-3.5,1.6-5.6,1.6c-2.3,0-4.4-0.5-6.2-1.4
      s-3.4-2.2-4.6-3.9s-2.1-3.5-2.6-5.7s-0.7-4.3-0.4-6.4s1.1-4,2.3-5.7s2.7-3,4.5-4s3.8-1.5,6.1-1.5c2.1,0,3.9,0.5,5.6,1.5
      s3,2.3,4,3.9L85.4,43.2z"
    />
  </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Introduction to C</h2>
            <p className="text-base text-gray-100 dark:text-gray-600">
            C is a general-purpose, procedural programming language developed in the early 1970s by Dennis Ritchie at Bell Labs. It was designed to develop system software and operating systems, notably the Unix operating system.
              C has had a powerful influence on many other languages, such as C++, Java, C#, and even Python, due to its simplicity, performance, and close-to-hardware capabilities.
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
