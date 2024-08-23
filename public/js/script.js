// script.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    // Example: Change the text content of an element with id 'example'
    const exampleElement = document.getElementById('example');
    if (exampleElement) {
        exampleElement.textContent = 'Hello, World!';
    }

    // Example: Add an event listener to a button with id 'myButton'
    const myButton = document.getElementById('myButton');
    if (myButton) {
        myButton.addEventListener('click', () => {
            alert('Button was clicked!');
        });
    }
});