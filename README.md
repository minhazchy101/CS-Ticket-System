# React Basic Concepts

## 1. What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that is used in **React** components. It allows developers to write HTML-like code inside JavaScript files.

JSX helps developers combine UI structure with JavaScript logic in the same place, which makes code easier to understand and maintain.

**Why JSX is used:**

* Makes UI code easier to read and write
* Allows HTML structure and JavaScript logic in one place
* Helps React understand how the UI should look

---

## 2. What is the difference between State and Props?

**State** and **Props** are both used to manage and pass data in React components.

**State**

* Used to store and manage data inside a component
* Can change over time
* Controlled by the component itself
* Helps update the UI dynamically

**Props**

* Used to pass data from a parent component to a child component
* Read-only (cannot be modified by the child component)
* Controlled by the parent component

In simple terms, **state manages internal data**, while **props are used to pass data between components**.

---

## 3. What is the useState hook, and how does it work?

`useState` is a React Hook that allows functional components to manage state.

It returns two values:

1. **State variable** – stores the current state value
2. **State setter function** – updates the state

Example:

```javascript
const [state, setState] = useState(initialValue);
```

When the setter function is called, React updates the state and **re-renders the component** with the new value.

---

## 4. How can you share state between components in React?

The most common method to share state between components is called **lifting state up**.

In this approach:

* The state is moved to the **closest common parent component**
* The parent passes the state to child components using **props**

Other methods for sharing state include:

* React Context API
* State management libraries such as Redux

---

## 5. How is event handling done in React?

Event handling in React is similar to HTML, but it uses **camelCase syntax** and functions.

Examples of React events:

* `onClick`
* `onChange`
* `onSubmit`

In React:

* Events use **camelCase naming**
* You pass a **function**, not a string
* React uses **Synthetic Events** to ensure better cross-browser compatibility

Example:

```jsx
<button onClick={handleClick}>
  Click Me
</button>
```

Here, `handleClick` is a function that runs when the button is clicked.

---
