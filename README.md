This package is an example of changing Antd dynamically without restarting the dev server.

1. clone repo > cd to folder > yarn > yarn start

## deply in github pages

1. `yarn add -D gh-pages`
2. add `"homepage": "http://rayvikram.github.io/antd-dynamic-theme-example",` in package.json
3. add `"predeploy": "yarn build", "deploy": "gh-pages -d build"` in package.json script
4. `yarn deploy` - that it. It will build and deploy at `homepage`
