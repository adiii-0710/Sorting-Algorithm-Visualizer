Sorting Algorithm Visualizer

1. Overview (What is this project?)
Sorting is a fundamental concept in Data Structures and Algorithms and is widely used in
real-world applications such as databases, search engines, and operating systems.
This project focuses on building a Sorting Algorithm Visualizer using HTML, CSS, and
JavaScript.
The system visually demonstrates how different sorting algorithms work by animating the
sorting process using bars of different heights.
Goals of the Project
• Understand the working of popular sorting algorithms
• Visualize comparisons and swaps step-by-step
• Learn JavaScript asynchronous programming
• Improve understanding of time complexity
• Build an interactive and beginner-friendly project
Approach Used:
Frontend Web Development + JavaScript + Algorithm Visualization
2. System Flow (How it Works)
1. 2. 3. 4. 5. User generates a random array
User selects a sorting algorithm
User adjusts speed and array size
Sorting process starts on button click
Bars are compared and swapped visually
6. 7. Number of comparisons and swaps is displayed
Final sorted array is highlighted
3. Dataset Used
Input Type:
• Randomly generated numerical array
Data Nature:
• Integers generated using JavaScript
• No external files used
• Array size controlled by user
4. Program Structure
Modular & Function-Based Design
Main Components
• generateArray()
Generates random values for visualization
• renderBars()
Displays bars on screen
• startSorting()
Controls sorting execution
• Sorting Algorithms:
o bubbleSort()
o quickSort()
o mergeSort()
Advantages
• Clean separation of logic
• Easy to debug and modify
• Beginner-friendly structure
• Reusable functions
5. Programming Concepts Used
Core Concepts Implemented
• JavaScript arrays
• DOM manipulation
• Asynchronous programming (async/await)
• Functions and conditional statements
• Event handling
• Time delays using promises
Why Visualization?
Visual representation improves understanding of algorithm behavior better than static code.
6. Sorting Algorithms Implemented
1. Bubble Sort
• Compares adjacent elements
• Swaps if elements are in wrong order
• Repeats until array is sorted
Time Complexity: O(n²)
Space Complexity: O(1)
2. Quick Sort
• Uses divide and conquer approach
• Selects a pivot element
• Partitions array around the pivot
Time Complexity: O(n log n) (Average)
Space Complexity: O(log n)
3. Merge Sort
• Divides array into halves
• Recursively sorts sub-arrays
• Merges sorted arrays
Time Complexity: O(n log n)
Space Complexity: O(n)
7. Output & Validation
Validation Performed
• Correct visualization of sorting steps
• Accurate comparison and swap count
• Smooth animation using time delay
• Final sorted array highlighted
Output Type
• Graphical visualization using bars
• Real-time statistics display
• Status messages for user interaction
8. Limitations
• Performance decreases for very large array sizes
• Visualization speed depends on system performance
• Merge Sort uses extra space internally
• Project is frontend-only (no backend)
9. Future Scope
• Add more algorithms (Insertion, Selection, Heap Sort)
• Sound effects for swaps
• Dark mode UI
• Performance comparison charts
• Step-by-step manual mode
10. Project Deliverables
Files Included
• index.html
• style.css
• script.js
Tools Used
• Visual Studio Code
• Web Browser
• JavaScript (ES6)
11. Results & Conclusion
Results
• Successfully visualized sorting algorithms
• Improved understanding of algorithm behavior
• Implemented interactive UI with real-time stats
• Learned asynchronous JavaScript programming
Conclusion
This project demonstrates how sorting algorithms can be effectively visualized using
JavaScript.
It helps beginners understand complex algorithm concepts in a simple and interactive
manner, making it an excellent foundational project for first-year computer science students.
