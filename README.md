# Gaurav Shukla's Portfolio

This is the Git repository for my personal [portfolio website](https://heygauravshukla.vercel.app), built with Next.js and Shadcn UI to showcase my web development skills and projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size.
- Select their preferred color scheme (light or dark mode) for an enhanced viewing experience.
- Navigate the website fully using keyboard controls to ensure accessibility.
- Access detailed case studies for each project showcased on the site.

### Screenshot

![](./public/projects/portfolio/desktop-preview.jpg)

### Links

- Source Code: [https://github.com/heygauravshukla/portfolio](https://github.com/heygauravshukla/portfolio)
- Live Site URL: [https://heygauravshukla.vercel.app](https://heygauravshukla.vercel.app)

## My process

### Built with

- Semantic JSX markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - Open-source component library
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [EmailJS](https://www.emailjs.com/) - Client-side email service
- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

### What I learned

This project enhanced my understanding of several key concepts, including:

- Integrating third-party services such as EmailJS to implement functional contact forms without requiring a backend or database. For example:
  ```jsx
  try {
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      EMAILJS_PUBLIC_KEY,
    );
    // Handle success
  } catch (error) {
    // Handle error
  }
  ```
- Leveraging Next.js static site generation (SSG) with dynamic routes (e.g., `app/projects/[slug]/page.tsx`) to create consistent, maintainable project case study pages while minimizing code duplication.

### Continued development

In future iterations, I plan to focus on the following improvements:

- Refining the font selection and color palette to achieve a modern aesthetic.
- Incorporating subtle animations to enhance user intuition and engagement.
- Revising content to more effectively communicate the website’s purpose.
- Enhancing the skills section and restructuring the projects section for better clarity.
- Adding essential pages such as About, Blog, and Privacy Policy to provide a more comprehensive experience.

### Useful resources

- [Squoosh](https://squoosh.app/) - An online tool for optimizing image assets, which assisted in reducing the file size of the profile image for improved performance.

## Author

- Website - [Gaurav Shukla](https://heygauravshukla.vercel.app)
- X - [@heygauravshukla](https://www.x.com/heygauravshukla)

## Acknowledgments

I drew design inspiration from the following websites:

- [Spotlight - Tailwind CSS Personal Website Template](https://tailwindcss.com/plus/templates/spotlight)
- [Frontend Mentor](https://www.frontendmentor.io)
