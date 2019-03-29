This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Setup
 - npm install cypress -D
 To open cypress we can use below command 
 `node_modules/.bin/cypress open`
 This will open cypress CLI , also creates `cypress.json` file and `cypress` folder.
 The cypress folder where we write our test cases.

 Add cypress as script to package.json 

 ``` "cypress": "cypress open" ```

 Page visit using cypress

 ```js
 describe ('Second Test', () => {
  it ('Visit the app', () => {
    cy.visit ('/');
  });
});
```

`cy` is the global object using which we call `visit` methos by passing  `/`
In the root directory `cypress.json`provide `baseUrl`

```js
{
  "baseUrl": "http://localhost:3000"
}
```

Now `npm run cypress` will open cypress CLI and run new test file.

## Running Headless

In `package.json` add below to `scripts`

`"cypress:all": "cypress run" `

Sample End to End test case

```js
describe ('Sixth Tests', () => {
  context ('No Todos', () => {
    it ('Adds a new todo', () => {
      cy.visit ('/');
      cy.get ('.new').type ('New todo').type ('{enter}');
    });
  });
});
```

now run `npm run cypress:all`

