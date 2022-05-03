## Roman Numerals Kata

### Pairing @ 8th Light
This repo was created for the Introduction to Pairing class for the 8th Light Apprenticeship.

### Requirements
- [Have node installed on your machine](https://nodejs.org/en/)

### Setup
- Clone the repo to your local machine
- cd into the directory containing the project.
- From the terminal run `yarn install`

### Usage
- Your first test is written for you:
``` 
test("input of 1 will give output of I", () => {
  expect(romanNumeral(1)).toBe("I")
})
```
- To run your tests run `yarn test` from the terminal. Your first test should fail with a report similar to this:

```
 FAIL  ./romanNumeral.test.js
  ✕ input of 1 will give output of I (3 ms)

  ● input of 1 will give output of I

    expect(received).toBe(expected) // Object.is equality

    Expected: "I"
    Received: undefined

      2 |
      3 | test("input of 1 will give output of I", () => {
    > 4 |   expect(romanNumeral(1)).toBe("I")
        |                           ^
      5 | })
      6 |

      at Object.<anonymous> (romanNumeral.test.js:4:27)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.295 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
