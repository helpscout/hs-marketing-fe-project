# hs-marketing-fe-project

> Front-end Engineer Hiring Project (Brand Design Team)

## 💪 Challenge

Check out the [challenge notes](./challenge.md) for details on project requirements and submission.

## 🛠 Prerequisite

- [Node](https://nodejs.org/en/)
- [Gatsby](https://www.gatsbyjs.com/)

You'll need a recent version of Node installed locally.

## 🔧 Setup

Fork/clone/download this repo to your computer.

Go into that directory and install dependencies by running:

```
npm install
```

## 📂 File structure

This project is built using the Gatsby static site generator framework. Here's what inside:

A quick look at the top-level files and directories you'll see in the `hs-marketing-cms` project:

    .
    ├── cms
    ├── config
    ├── content
    ├── creators
    ├── scripts
    ├── src
        ├── components
        ├── pages
        └── templates
    ├── static
        ├── fonts
        └── images
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1. **`/cms`**: This directory contains configuration files for NetlifyCMS. These configuration files control how (and which) widgets/components are displayed and saved in the CMS content editor. For example, the `callout` component, the `cta` component, etc.

1. **`/config`**: This directory contains configuration files for Gatsby plugins which are included in `gatsby-config.js`.

1. **`/content`**: This directory contains all content data for the site, organized by folder by type. The CMS will save content to this folder (settings are in `static/admin/config.yml`).

1. **`/creators`**: This directory contains scripts which are used in `gatsby-node.js` to programmatically create pages from content data. For example, `BlogPostCreators`, etc.

1. **`/scripts`**: This directory contains some utility scripts that can be used to convert older html-based components into new React-based components with shortcodes. This folder will be deleted after all content has been migrated.

1. **`/src`**: This directory contains all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

    1. **`/src/components`**: This directory contains all of the resuable React components we can use to build pages.

    1. **`/src/pages`**: This directory contains all standalone pages that are not programmatically created in `gatsby-node.js`. The folder structure maps directly to the URL structure.

1. **`/static`**: This directory contains all static files necessary.

    1. **`/static/fonts`**: This directory contains the webfonts used for the site.

    1. **`/static/images`**: This directory contains all images used on the site.

1. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1. **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

1. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

1. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1. **`README.md`**: A text file containing useful reference information about your project. (You're reading it right now).

## 🕹 Development

This project is basically an out-of-the-box Gatsby site, that was generated via `gatsby new` and loaded up with some common components from the www.helpscout.com website.

Fire up the local development server by running:

```
npm start
```

Visit the dev site at [http://localhost:8000/](http://localhost:8000/).
