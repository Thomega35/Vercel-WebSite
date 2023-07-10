# Portfolio WebSite of Thomas Delapart

### ⚠️This Website is currently under Development⚠️

## Content 

- My personal infos
- My professional experience
- My studies
- My personal projects

## Technical stuff

- This is a Astro / React App in TypeScript
- This site is hosted on Versel
- The CI automatically deploy the project after a comit
- You can access the site at (Currently nothing) :
  - https://thomega.fr
  - https://www.thomega.fr
  - https://thomas-delapart.vercel.app
- You can access the beta site :
  - https://beta.thomega.fr

### Author

Developed by [Thomas Delapart](https://github.com/Thomega35/) 
you can reach me by Email : thomega35@gmail.com or Linkedin : https://www.linkedin.com/in/thomas-delapart/  

## 🚀 Project Structure

Inside of this Astro project, you'll see the following folders and files:

```
├── public/
│   ├── 404.css
│   ├── favicon.svg
│   ├── logomark-light.svg
│   ├── placeholder-about.svg
│   ├── placeholder-hero.svg
│   └── placeholder-social.svg
├── src/
│   ├── components/
│   |   ├── BaseHead.astro
│   |   ├── Footer.astro
│   |   ├── FormattedDate.astro
│   |   ├── Header.astro
│   |   └── HeaderLink.astro
│   ├── layouts/
│   |   ├── BlogPost.astro
│   |   └── DrawerLayout.astro
│   └── pages/
│       ├── Blog/
│       |   ├── [...slug].astro
│       |   └── index.astro
│       ├── 404.astro
│       ├── about.astro
│       ├── contest.astro
│       ├── education.astro
│       ├── index.astro
│       ├── personal.astro
│       └── rss.xml.js
├── README.md
├── astro.config.mjs
├── package-lock.json
├── package.json
├── tailwind.config.cjs
├── todo.md
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.


# Astro Starter Kit: Blog

```
npm create astro@latest -- --template blog
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/github/withastro/astro/tree/latest/examples/blog)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!


![blog](https://user-images.githubusercontent.com/4677417/186189140-4ef17aac-c3c9-4918-a8c2-ce86ba1bb394.png)

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
