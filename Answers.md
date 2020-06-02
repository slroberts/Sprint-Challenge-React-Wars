# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a JavaScript library used to build user interfaces. It solves the problem of the DOM having to completely update/reload for changes to be reflected. It does this by a concept called the virtual DOM, which only updates the state that is changed in a rendered page using React. If anything does not that the user interface does not update.

2. Describe component state.

The component state stores property values that belong to the component. When those property values from the state change, the component re-renders based on the information stored in the state.

3. Describe props.

Props is a special keyword with the React system that represents properties being passed with data from one component to another.

4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects is when a function modifies anything outside of the function’s body. We sync effect in a React Component with useEffect(), which tells the component that we need to do something else after the render. That function will be remembered and be called later after performing the DOM updates.
