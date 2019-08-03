Simple Gatsby theme example

Only a simple example based on various references (see below), since it uses the npm package publication method for theme re-usability, which we wish to avoid for our Gatsby theme to be used by demystifying-dev.github.io, in favor of a simpler and non-npm publication dependent theme reusability method for writing themes that don't need starters. This may be:

* (winner!) [Composable yarn workspaces by @ChristopherBiscardi](https://www.christopherbiscardi.com/post/composing-yarn-workspaces) where you simply nest git repos that couldn't care less about each other :)
* Using git submodules
* Using git subtrees

We leave the site, since the individual commits may be useful for people seeing how to get things going in order to develop their own Gatsby Themes in a yarn workspaces workflow.

References:

- https://www.youtube.com/watch?v=6Z4p-qjnKCQ&feature=youtu.be
    - minute 46:20
    - https://egghead.io/courses/gatsby-theme-authoring
    - see references listed below video
- https://www.gatsbyjs.org/blog/2019-05-22-setting-up-yarn-workspaces-for-theme-development/
- https://github.com/jlengstorf/gatsby-theme-jam-example
- https://github.com/gatsbyjs/gatsby/tree/master/themes/gatsby-starter-theme-workspace
- https://theme-ui.com/gatsby-plugin
- https://www.gatsbyjs.org/docs/mdx/
    - https://www.gatsbyjs.org/docs/mdx/programmatically-creating-pages/

