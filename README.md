# React Basic Concepts 

This README contains my answers to some basic questions about React.

---

## 1. What is JSX, and why is it used?

JSX is JavaScript with an HTML syntax extension that is used in React components. It allows developers to write HTML-like structure inside JavaScript. Because of JSX, we can write UI structure and JavaScript logic in the same place.

JSX helps make the UI code easier to read and write. It also helps React understand how the user interface should look. For developers, it becomes easier to manage components when both the structure and logic are together.

---

## 2. What is the difference between State and Props?

State and Props are both used to work with data in React components.

State is a feature that is used to store and manage data inside a component. State can change over time, and when the state changes the component updates automatically. State is controlled by the component itself.

Props are used to pass data from a parent component to a child component. Props cannot be changed by the child component because they are controlled by the parent component.

In simple words, state manages the data inside a component, and props help share data from parent to child components.

---

## 3. What is the useState hook, and how does it work?

useState is a React Hook that allows functional components to manage state.

The useState hook returns two values. The first one is the state variable which stores the current state value. The second one is the state setter function which is used to update the state.

When the setter function is called, React updates the state and re-renders the component so the UI can show the new updated data.

---

## 4. How can you share state between components in React?

To share state between components in React, the most common method is called lifting state up.

In this method, the state is moved to the closest common parent component. Then the parent component passes the state to child components using props. This way multiple components can access the same state.

There are also other ways to share state in larger applications, such as using the React Context API or state management libraries like Redux.

---

## 5. How is event handling done in React?

Event handling in React is similar to HTML, but there are some small differences. In React, events use camelCase syntax like onClick or onChange.

Instead of writing event code as a string like in HTML, React uses JavaScript functions to handle events. When an event happens, the function runs and performs the required action.

React also uses something called Synthetic Events which helps make event handling work consistently across different browsers.

---
