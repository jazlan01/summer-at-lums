# A Guide to Tailwind Projects

A repository to practice and reference tailwind designs

## Getting Started

You need to install tailwind and postcss. You can do that using the `package.json` file supplied with this project. Just run `npm install` in the root directory of this project.

## Running the project

### Development Environment

Included in the `package.json` file is `live-server`. It is very helpful to see live previews of your project while you are building it.

Open the terminal and split the shell. Then:

1. Run `npm run watch` in one shell
2. Run `npm run dev` in the other shell.

Now you should be able to see changes live in your browser

### Packaging for Production

Tailwindcss provides multiple options to package your project for production. You can read more about it [here](https://tailwindcss.com/docs/installation#building-your-css).

I have included a simple mechanism to minify your css and package it for production. Just run `npm run build` in the root directory of this project. This will modify the `output.css` file and minify it. You can simply ship your static webpage with this file.

### Formatting Code

This repository comes packaged with `prettier`. You can run `npm run format` to format your code. You can also use the `prettier` extension in VSCode to format your code on save.

## Websites used as reference guides

**Note:** All designs you see here are the property of their respective owners. I am not affiliated with any of these companies and I am not claiming ownership of any designs.

1. [Calm](https://www.calm.com/)
2. [Zola](https://www.zola.com/)
