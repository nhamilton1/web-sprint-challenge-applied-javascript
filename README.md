# Applied JavaScript Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Applied JavaScript**. During this sprint, you studied **DOM and components**. In your challenge this week, you will demonstrate your mastery of these skills by creating **an online Lambda newspaper**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [ ] Fork and clone the repo. Delete your old fork from Github first if you are repeating this Unit.
- [ ] Open the assignment in Canvas and click on the "Set up git" option.
- [ ] Follow instructions to set up Codegrade's Webhook and Deploy Key.
- [ ] Push your first commit: `git commit --allow-empty -m "first commit" && git push`.
- [ ] Check to see that Codegrade has accepted your git submission.

For a step-by-step on setting up Codegrade see [this guide.](https://www.notion.so/lambdaschool/Submitting-an-assignment-via-Code-Grade-A-Step-by-Step-Walkthrough-07bd65f5f8364e709ecb5064735ce374)

## Project Instructions

### Introduction

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page.

In meeting the minimum viable product (MVP) specifications listed below, your project should look similar to the image linked below:

[Lambda Times](https://tk-assets.lambdaschool.com/cac4803c-6e8f-4846-be0e-b20d82a34a73_lambda-times.png)

### Instructions

- [x] Navigate to the root of the project with your command line.
- [x] Run `npm install` to download the dependencies listed in the `package.json` file.
- [x] Run `npm start` to compile the project and serve it.
- [x] Navigate Chrome to `http://localhost:3000`
- [x] In a separate terminal, run `npm test` to run tests.

**Steps Required for MVP:**

- [x] Steps 1 and 2 are explained inside the `src/components/header.js` file.
- [x] Steps 3 and 4 are explained inside the `src/components/tabs.js` file.
- [x] Steps 5 and 6 are explained inside the `src/components/card.js` file.

**Important Notes:**

- Please **do not move or rename existing files** or folders.
- If your development server stops "auto reloading", manually kill it with `CTRL+C` and restart it.
- Do not change the `package.json` file except to install libraries with NPM (Axios is _already_ in the `package.json`).
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Submission format

- [x] Submit via Codegrade by committing and pushing any new changes.
- [x] Create a pull request to merge `<firstName-lastName>` branch into `main`.
- [x] Please don't merge your own pull request and make sure **you are on your own repo**.
- [x] Check Codegrade for automated feedback.
- [x] Check Codegrade in the days following the Sprint Challenge for reviewer feedback.
- [x] Any changes pushed after the deadline will not receive any feedback.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. What is the DOM?
    DOM stands for Document Object Model. Which is an object representation of the HTML elements of a webpage. The DOM is kind of like a bridge between the content and the browser. The DOM is a language neutral API and his dynamic. The DOM is also built as a data structure known as a Tree. 
2. What is an event?
    Events are when the user does something, for instance on a webpage, and then the webpage respondes to the user's actions. For example, whenever something happens within the browser, when the user clicks or scrolls(too name a few), the browswer know's about it and generates an event object. 
3. What is an event listener?
    An event listener waits for an event to occur. The most frequent and easier one to remember is 'click'. Lets say you have a button on your page, you can add an addEventListener('click', event); to your button, and then make that event do something like change the color of the button to red on click. 
4. Why would we convert a NodeList into an Array?
    A NodeList is an object that is basically a collection of DOM nodes from an HTML document.
    You convert a NodeList into an array so you can use ES6 synax, forEach, map, and filter (there are more).
5. What is a component?
    A component is made of serveral parts, HTML, CSS, or JS which is brought together for reuse in an application or website. Also, a component is D.R.Y. (do not repeat yourself).
