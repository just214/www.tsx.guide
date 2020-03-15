---
id: prerequisites
title: Prerequisites
sidebar_label: Prerequisites
custom_edit_url: https://github.com/gojutin/www.tsx.guide/blob/master/docs/introduction/prerequisites.md
description: A guide for writing React apps with TypeScript
keywords:
  - typescript
  - react
  - tsx
  - guide
  - cheatsheet
  - docs
  - reacttypescript
  - prerequisites
image: https://res.cloudinary.com/gojutin/image/upload/v1584230645/www.tsx.guide/tsx-guide-logo.png
---

### An understanding of React

This is not a guide on how to use React. The [React Docs](https://reactjs.org/docs/getting-started.html) do a great job of that. If you are new to React, that is the best place to start.

If you are new to both React and TypeScript, it is usually best to start with React without TypeScript. It can be challenging to try to learn them both simultaneously.

### An understanding of TypeScript

If you are new to TypeScript, the best place to start is with the [TypeScript Docs](https://www.typescriptlang.org/docs/home.html).

The React type definitions can get rather complex, and make heavy use of [generics](https://www.typescriptlang.org/docs/handbook/generics.html).
The authors have done an incredible job of making them as simple to use as possible, but there are some things that just can't be avoided:

1. Components can get complex, requiring more verbose types.
2. React/JSX has **a lot** of types. For instance, every DOM element.
