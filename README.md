# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](/src/img/prc-a.png)
![](/src/img/prc-q.png)

### Links

- Live Site URL: (https://azanra.github.io/rating-component/)

## My process

### Built with

- React
- Tailwind

### What I learned

Using tailwind to fully style the component. i don't really need to care about selector that much because i'm applying the style to the className
but for now i need to look up to the tailwind documentation because the css have different syntax compared to vanilla css. i think my selector will
keep getting worse if i only used classname...

Creating customized radio button
by hiding the radio with

```css
.input[type="radio"] {
  display: none;
}
```

and styling the label. there are also pseudo-class in the tailwind, by using the state followed by : , we can apply some style depending on the state.

More practice on using state to store value that will persist on next render. and triggering re-render by setting a new state. Passing data as a props,
and conditionally rendering jsx based on condition.

### Continued development

One of my first react project that fully styled. might be too easy because i'm still haven't get used to how react works. and i keep forgetting simple things
like don't mutate the state. and how to trigger a re-render. i just need more practice i guess. Also if the component is really deep. how to pass the data
without passing it as a props?. i wonder if there is hooks for it. i want to start working on writing cleaner and easier to understand code. and getting my
hands on using the api to send and receive data. i know that i will learn it on odin project . but i'm still far away from those section. getting the practice now shouldn't hurt right?. because there might be assignment in my intern that need me to create a new component from scratch and i need to use api to send and receive a data.
