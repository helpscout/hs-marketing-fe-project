# 🏗 Project Requirements

Hey there! We're building a new page on helpscout.com to show off the various integrations with other applications that are available for Help Scout.

You'll need to:

1. Create a page with the path `/help-desk-integration`
1. Build out the page to match the provided design in Figma: [🔗 link!](https://www.figma.com/file/R5dukQLM4KP733egp0LrdA/Front-End-Project?node-id=0%3A1)
  * You can find image cuts for this page here: [🔗 link!](https://www.dropbox.com/sh/69px4814529cc8c/AAAcF9QeyTM1sCAwLk4M2lNAa?dl=0)
  * Try to use existing styles where possible, but how you build this out is up to you!
1. The three integration cards should use the existing data from the markdown files in `/content/integration`
  * These markdown files are being transform into data that Gatsby can access using [gatsby-transformer-remark](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/)
1. The callout near the footer (with trial button) should leverage the GetStartedCallout component.
  * Most likely this design variation will be used again in the future, please ensure we can use this design again simply.