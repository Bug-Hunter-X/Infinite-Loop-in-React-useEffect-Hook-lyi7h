# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop caused by improper usage of the `useEffect` hook. The `MyComponent` attempts to increment a state variable within the `useEffect`'s dependency array, causing the component to re-render endlessly.  The solution shows how to fix this by using functional updates or other techniques.

## Bug

The bug is located in `bug.js`.  The `useEffect` hook incorrectly updates the `count` state based on a condition within the useEffect itself, creating an infinite loop.

## Solution

The solution is provided in `bugSolution.js` . The solution demonstrates the corrected way to manage state updates within the `useEffect` hook to prevent infinite loops.