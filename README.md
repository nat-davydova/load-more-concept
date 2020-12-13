# "Load More" concept (Animate.css compatible)

[Check the Demo](https://codepen.io/nat-davydova/full/XWKxJyd)

<img src="http://natali-davydova.me/assets/img/load-more/full-1.png" width="650" />

## Description

It's a concept of 'Load More' button, which onclick reveal us hidden items.

User is able to:

* set how many items there **will be visible initially**;
* set how many items there **will be revealed onclick**;
* **enable/disable counter** of hidden items;
* **pick animations from Animation.css** (predefined only);

## Stack
* Pug/HTML
* Bootstrap
* SCSS/CSS3
* Typescript/JS (ES6+)
* Webpack

## ⚙️ To Run Locally:

1. clone the repo;
2. use `npm install` to install all the dependencies;
3. use `npm start` to run locally

## Usage Details

If you want to implement it to your website, you need:

* remove pieces which are marked with `YOU DON'T NEED IT IN YOUR CODE` - they are for animations select list handling;
* remove all the `animationSelectHandler.ts` - it's for animations select list handling;
* change `let ANIMATE_CSS_ANIMATION_TYPE` in the `app.ts` to `const`;
* pass the animation type to `ANIMATE_CSS_ANIMATION_TYPE` if you want any (all the animations you could use are in `Animations` type) or just leave it equal to empty string, if you don't need an animation;
