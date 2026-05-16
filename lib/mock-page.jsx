export const mockPage = {
  id: "mock-page-dsa",
  title: "Data Structures and Algorithms (DSA)",
  icon: "📘",
  coverImage: "",
  parentId: "",
  isArchived: false,
  isPublished: false,
  content: JSON.stringify([
    {
      type: "paragraph",
      content:
        "Data Structures and Algorithms (DSA) involves using the Java programming language to implement foundational computer science concepts for efficiently organizing and processing data",
    },
    {
      type: "bulletListItem",
      content:
        "Data Structures: A way to store and access data efficiently (performance and memory)",
    },
    {
      type: "bulletListItem",
      content:
        "Algorithms: set of instructions to solve specific problems, such as searching, sorting, and graph traversal",
    },
    {
      type: "bulletListItem",
      content:
        "Time and Space Complexity: measures of the computational time and memory an algorithm requires, typically analyzed using Big O notation",
    },
    {
      type: "paragraph",
      content: "\n",
    },
    {
      type: "heading",
      props: { level: 2 },
      content: "ADT (ABSTRACT DATA TYPE)",
    },
    {
      type: "paragraph",
      content:
        "It is a theoretical concept that defines a data type by its behavior and the operations that can be performed on it, independent of the underlying implementation details",
    },
    {
      type: "bulletListItem",
      content:
        "It is a mathematical model that describes what a data structure does, but not how it does it",
    },
    {
      type: "heading",
      props: { level: 3 },
      content: "Key concepts",
    },
    {
      type: "bulletListItem",
      content:
        "Abstraction and Encapsulation: ADTs use abstraction to hide the internal representation and implementation of the data",
    },
    {
      type: "bulletListItem",
      content:
        "Separation of Concerns: this separation allows developers to focus on the logical design and functionality of the ADT",
    },
    {
      type: "bulletListItem",
      content:
        "Implementation Independence: an ADT can have multiple concrete implementations that all adhere to the same interface",
    },
    {
      type: "bulletListItem",
      content:
        "Behavioral Definition: the behavior of an ADT is often formally specified using constraints or axioms that the operations must satisfy",
    },
    {
      type: "paragraph",
      content: "",
    },
    {
      type: "heading",
      props: { level: 3 },
      content: "Common ADTs",
    },
    {
      type: "bulletListItem",
      content: "Stack: Last-In, First-Out (LIFO) - push, pop, peek, isEmpty",
    },
    {
      type: "bulletListItem",
      content:
        "Queue: First-In, First-Out (FIFO) - enqueue, dequeue, peek, isEmpty",
    },
    {
      type: "bulletListItem",
      content: "List: Sequential collection - insert, delete, get, size",
    },
    {
      type: "bulletListItem",
      content:
        "Set: Unordered collection of unique elements - add, remove, contains, union",
    },
    {
      type: "bulletListItem",
      content: "Map: Stores key-value pairs - get, put, remove, containsKey",
    },
    {
      type: "bulletListItem",
      content:
        "Graph: Collection of nodes (vertices) and edges - addVertex, addEdge, findAdjacentNodes",
    },
    {
      type: "paragraph",
      content: "",
    },
    {
      type: "heading",
      props: { level: 2 },
      content: "Time/Space Complexity",
    },
    {
      type: "heading",
      props: { level: 3 },
      content: "Types of Search",
    },
    {
      type: "heading",
      props: { level: 4 },
      content: "Linear Search (Sequential)",
    },
    {
      type: "bulletListItem",
      content:
        "It checks each element one by one from the start until target is found or list ends",
    },
    {
      type: "bulletListItem",
      content: "Data Requirement: Works on both sorted and unsorted data",
    },
    {
      type: "bulletListItem",
      content: "Time Complexity: O(n)",
    },
    {
      type: "bulletListItem",
      content: "Best For: small lists or when data isn't sorted",
    },
    {
      type: "heading",
      props: { level: 4 },
      content: "Binary Search (Half-Interval)",
    },
    {
      type: "bulletListItem",
      content:
        "It finds the middle element, compares it to the target, and eliminates half the list, repeating until found",
    },
    {
      type: "bulletListItem",
      content: "Data Requirement: must be sorted (ascending or descending)",
    },
    {
      type: "bulletListItem",
      content: "Time Complexity: O(log n)",
    },
    {
      type: "bulletListItem",
      content: "Best For: large, sorted lists where speed is critical",
    },
    {
      type: "paragraph",
      content: "",
    },
    {
      type: "heading",
      props: { level: 3 },
      content: "Tree Traversals",
    },
    {
      type: "paragraph",
      content:
        "Tree traversals define the order of visiting nodes. DFS methods use recursive calls to traverse nodes.",
    },
    {
      type: "bulletListItem",
      content: "Postorder: Left, Right, Root - used for deleting nodes",
    },
    {
      type: "bulletListItem",
      content: "Preorder: Root, Left, Right - used to copy trees",
    },
    {
      type: "bulletListItem",
      content: "Inorder: Left, Root, Right - yields sorted BST values",
    },
    {
      type: "paragraph",
      content: "",
    },
    {
      type: "heading",
      props: { level: 3 },
      content: "Sorting Techniques",
    },
    {
      type: "heading",
      props: { level: 4 },
      content: "Bubble Sort",
    },
    {
      type: "bulletListItem",
      content:
        "Repeatedly swap adjacent elements if they are in the wrong order",
    },
    {
      type: "bulletListItem",
      content: "Time Complexity: O(n^2)",
    },
    {
      type: "bulletListItem",
      content: "Space Complexity: O(1)",
    },
    {
      type: "bulletListItem",
      content: "Stable: yes",
    },
    {
      type: "bulletListItem",
      content: "Use when: almost never in production. Only for teaching",
    },
    {
      type: "heading",
      props: { level: 4 },
      content: "Selection Sort",
    },
    {
      type: "bulletListItem",
      content:
        "Repeatedly select the smallest element and move it to the correct position",
    },
    {
      type: "bulletListItem",
      content: "Time Complexity: O(n^2)",
    },
    {
      type: "bulletListItem",
      content: "Space Complexity: O(1)",
    },
    {
      type: "bulletListItem",
      content: "Stable: no, unless modified",
    },
    {
      type: "bulletListItem",
      content: "Use when: small arrays, memory writes are expensive",
    },
  ]),
};
