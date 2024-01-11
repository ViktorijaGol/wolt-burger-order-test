# Burger Order on Wolt.com Automated Test

This repository contains Cypress test suite, which is designed to automate the process of ordering a burger on **`Wolt.com`**. The test is written in JavaScript using Cypress.

## Test Structure

The test suite consists of an **end-to-end (E2E)** test designed to ensure a smooth and error-free ordering process on Wolt.com. The primary test is written to simulate a user's journey of ordering a burger to their office at Kauno Dokas on Wolt.com. The test encompasses key functionalities, such as:
- selecting a restaurant
- adding a burger to the cart

## Prerequisites

Before running the automated test, ensure that you have the following prerequisites:
- **Node.js** installed on your machine
- **npm (Node Package Manager)** installed
- **Cypress** installed globally

## Testing Environment

The automated tests in this suite are primarily developed and tested using the Chrome browser. While the tests are expected to work well on Chrome, they may also be compatible with other modern browsers.

### Browser Compatibility

- **Google Chrome:** Version 120.0.6099.199 

Please note that testing on other browsers has not been extensively validated, and it's recommended to run the tests on Chrome for the most reliable results.

## Setup

1. **Clone this repository:**
   ```bash
   git clone https://github.com/ViktorijaGol/wolt-burger-order-test.git
    ```
2. **Navigate** to the project directory:
    ```bash
   cd wolt-burger-order-test
    ```
3. **Install** required dependencies:
   ```bash
   npm install
    ```

## Folder Structure

The test suite is organized into the following structure:

- **cypress/e2e:** Contains the test file.
- **cypress/support:** Includes custom commands used in the tests.

## Custom Commands

The project includes several custom Cypress commands to enhance test readability and maintainability. These commands cover common actions such as accepting GDPR consent, interacting with elements by data-test-id, and navigating through the application.

For detailed information about each custom command, refer to the [Custom Commands](cypress/support/commands.js) file.

## Running Tests

To run the Cypress test using the Cypress Test Runner, use the following command:
   ```bash
   npm run cypress:open
   ```

To run tests in headless mode (without the Cypress Test Runner GUI), you can use the following command:
   ```bash
   npx cypress run
   ```
This command will execute the tests in the terminal without opening the Cypress Test Runner.

## Contributors

- Viktorija Golovinova [(@ViktorijaGol)](https://github.com/ViktorijaGol)

## Acknowledgments

- Special thanks to the Wolt.com development team for providing the test environment. 
- Also, I would like to express my gratitude to Present Connection for providing me with this technical task. It allowed me to contribute, learn something new, and explore a new tool for me.
