---
title: "Gatsby Theme Demystifying Dev. The Making Of"
---

#### Create theme workspace

In `demystifyingdev@awebfactory.org:/home/demystifyingdev/dev`

repo: gatsby-theme-demystifying-dev

* 6208 theme: workspace theme
* 6209 demo: workspace demo

##### directory structure and initial setup

````
cd ~/dev
mkdir gatsby-theme-demystifying-dev
mkdir theme demo
````

For the demo, we can either use a starter and then shadow, or else start from scratch. In the case of demystifying-dev, let's follow good advice and use a very basic starter for our demo app, just to get set up the way we would anyway. We remove the local Git repo since we are not going to mess around with submodules right now, and will be using a yarn workspaces based repo for the theme and demo instances as a whole.

````
cd demo
gatsby new . gatsbyjs/gatsby-starter-hello-world
rm -rf .git
mv .gitignore ..
````

Now we set up the theme

````
cd ../theme
yarn init -y
cd ..
````

We now have a demo and a theme instance.

````
git init
git add --all
git commit -m "Initial commit with custom gitignore file"
git remote add origin git@github.com:demystifying-dev/gatsby-theme-demystifying-dev.git
git push -u origin master
````

Commit: [Initial commit with custom gitignore file](https://github.com/demystifying-dev/gatsby-theme-demystifying-dev/commit/b56886f02db2963293aea8aa65365d51263347a9) and we push to a new public repo in the root directory

##### Initial yarn workspaces setup

Also in the root directory, we create the yarn workspace with a package.json file with the following content (`private` is required for workspaces) and execute `yarn install`:

````
cat package.json
{
  "private": true,
  "workspaces": [
    "theme",
    "demo"
  ]
}
yarn
````

Commit: [initial yarn workspaces setup](https://github.com/demystifying-dev/gatsby-theme-demystifying-dev/commit/d4028fd5497ec29916a0ca3fbd61d7141681b682)

##### Initial theme setup and invocation as a dependency by demo theme runner app

* We need an `index.js` file in the theme directory
* We need `gatsby`, `react` and `react-dom` installed as a dependency for the theme, and for any peer app invoking the theme
* We need to make sure that the theme is named in its `package.js` file with its theme name and not just the convenient name of the directory, `theme`.
* We need to have the demo theme runner app have the name of its directory `demo`, and from the root directory have it invoke the theme (including workspace compatible local versioning `@*`) as a dependency

````
cd theme
vim index.js
cat index.js
// noop
cd ..
yarn workspace theme add -D gatsby react react-dom
yarn workspace theme add -P gatsby react react-dom
cd theme
grep name package.json
  "name": "theme",
vim package.json
grep name package.json
  "name": "gatsby-theme-demystifying-dev",
cd ../demo
grep name package.json
  "name": "gatsby-starter-hello-world",
vim package.json
grep name package.json
  "name": "demo",
cd ..
yarn workspace demo add gatsby-theme-demystifying-dev@*
````

We can check our work so far by running `yarn workspaces info` from the root directory

````
yarn workspaces info
yarn workspaces v1.17.3
{
  "gatsby-theme-demystifying-dev": {
    "location": "theme",
    "workspaceDependencies": [],
    "mismatchedWorkspaceDependencies": []
  },
  "demo": {
    "location": "demo",
    "workspaceDependencies": [
      "gatsby-theme-demystifying-dev"
    ],
    "mismatchedWorkspaceDependencies": []
  }
}
Done in 0.17s.
````

Commit: [Initial theme setup and invocation as a dependency by demo theme runner app](https://github.com/demystifying-dev/gatsby-theme-demystifying-dev/commit/31100818f9cf0c28713d5514508dd34092dcab0e)

##### Create demo page

See commit diff for source code

To run demo workspace from root:

````
yarn workspace demo develop -H 0.0.0.0 -p 6209
````

Commit: [Created Layout component in theme and invoked it from demo app in home page](https://github.com/demystifying-dev/gatsby-theme-demystifying-dev/commit/f0407fe3177ed851ddc7c53d212ac5f0cf676ee6)

##### Set up Theme-UI as a theme dependency

In order to install Theme-UI to our theme, we need to install dependencies. We need to invoke the workspace with its new theme name (we changed to that from "theme" which is simply the location):

````
yarn workspace gatsby-theme-demystifying-dev add gatsby-plugin-theme-ui theme-ui @emotion/core @mdx-js/react
````

We also need to add gatsby-plugin-theme-ui to the theme's gatsby-config.js file (see commit code diff).

To re-run demo workspace from root to take into account configuration changes:

````
yarn workspace demo develop -H 0.0.0.0 -p 6209
````

Commit: [Set up Theme-UI as a theme dependency](https://github.com/demystifying-dev/gatsby-theme-demystifying-dev/commit/77a8c57d5f191a81502930eb60f9036bb223d5ff)

##### Invoke and override Theme-UI styles in demo app using jsx components in theme

To re-run demo workspace from root to take into account configuration changes:

````
yarn workspace demo develop -H 0.0.0.0 -p 6209
````

Commit: [Invoke and override Theme-UI styles in demo app using jsx components in theme](https://github.com/demystifying-dev/gatsby-theme-demystifying-dev/commit/128d5bf7a54d0c703257d4e0998a3756925d1ed5)

##### Applied Theme-UI components and jsx style to theme Layout component

Commit: [Applied Theme-UI components and jsx style to theme Layout component](https://github.com/demystifying-dev/gatsby-theme-demystifying-dev/commit/c78c9f20c33c69e57bdbe33332a0d2e609d7b270) 

##### Added emotion Global styles to address need for margin 0

Commit [Added emotion Global styles to address need for margin 0](https://github.com/demystifying-dev/gatsby-theme-demystifying-dev/commit/ada47eade7e49afdd1325a03437cc541cf0b1f26)

##### Additional application of styles

Notice that overriden h2 styles have to be explicitly invoked via the Styled Theme-UI component.

Commit [Additional application of styles](https://github.com/demystifying-dev/gatsby-theme-demystifying-dev/commit/0e9e1eea52d950e69243303ad216aa2fc1f53a89)

##### Demo app override of Theme-UI colors via shadowing

We need to add `lodash.merge` as a dependency for the demo app workspace:

````
yarn workspace demo add lodash.merge
````

and then implement the theme override in `demo/src/gatsby-plugin-theme-ui` (see code)

Commit [Demo app override of Theme-UI colors via shadowing](https://github.com/demystifying-dev/gatsby-theme-demystifying-dev/commit/ae46f55e1f1ab07279de0129cdde9f332d0e559b)

##### Add mdx and filesystem dependencies and configure, implement programmatically created blog posts wrapped in theme Layout and their own blog post layout

````
yarn workspace gatsby-theme-demystifying-dev add gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react gatsby-source-filesystem
````

Commit: [ Add mdx and filesystem dependencies and configure, implement programmatically created blog posts wrapped in theme Layout and their own blog post layout](https://github.com/demystifying-dev/gatsby-theme-demystifying-dev/commit/58d02c65930c50cbaf62bf8bbe22c0ee0bd7ec48)

````
        new file:   demo/content/posts/blog-1.md
        new file:   demo/content/posts/blog-2.md
        new file:   demo/src/components/posts-page-layout.js
        new file:   theme/content/posts/README.md
        modified:   theme/gatsby-config.js
        new file:   theme/gatsby-node.js
        modified:   theme/package.json
        modified:   yarn.lock

````
