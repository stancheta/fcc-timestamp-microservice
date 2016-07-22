# FCC-Timestamp-Microservice

## Install
In order to use this project, you must install Node.js and Express.js You can acquire
node through the [Node.js](https://nodejs.org/en/) website. After you have it, you can
install Express globally with the following command:
`npm install -g express`

If you would like to try out my test files as well, you can install the rest of the dependencies
with this command: `npm install`.

## How to Use
In order to run this program, you can use this command to start the server on localhost:8080:
```
node start

```
Provided that you've installed the devDependencies, you can use this command to
run all of the tests:
```
node test
```
or this command to test files individually, go into the test folder and run:
```
mocha fileTest.js
```
where fileTest is the filename of the testing script.
## project description:
This is a back end project on FreeCodeCamp where I reverse engineer the functionality of
[this project](https://timestamp-ms.herokuapp.com/). I add that restriction that the unix
timestamp that I am working with is defined on an int32 base. In this project, I use the principles of test-driven development with the JS testing framework, [Mocha](https://mochajs.org/), and the assertion library [Chai](http://chaijs.com/).

### Requirements
1. **User Story:** I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
2. **User Story:** If it does, it returns both the Unix timestamp and the natural language form of that date.
3. **User Story:** If it does not contain a date or Unix timestamp, it returns null for those properties.
4. **personal restriction** All returns must be inclusive to int32 [-2147483648, 2147483647]

### Technologies used:
+ Node
+ Express
+ Mocha
+ Chai

### Live Demo:
https://stancheta-timestamp.herokuapp.com
<!-- ### How it was made: -->

### license
[MIT](https://opensource.org/licenses/MIT)
