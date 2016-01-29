# browserstack-runner-mocha-adv

Sample for [browserstack-runner](https://github.com/browserstack/browserstack-runner) projects using the following directory structure:
````
- node_modules
  * mocha
- tests
  * browserstack.json
  * test.js
  * runner.html
````

### Run on BrowserStack
`BROWSERSTACK_JSON=tests/browserstack.json ./node_modules/.bin/browserstack-runner --verbose`

- OR -

`npm run test-ci`


### Run Locally
`grunt test`

- OR -

`npm test`

