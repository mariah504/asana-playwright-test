## Write-Up for Playwright Data-Driven Test Assignment

   # Asana Playwright Data-Driven Tests

## Overview
This project demonstrates automated data-driven testing using Playwright and TypeScript. The tests are designed to automate the login process, navigate through different sections, and verify the presence of specific cards in Asana.

## Features
- **Automated Login**: Logs into Asana using provided credentials.
- **Data-Driven Tests**: Reads test scenarios from a JSON object.
- **Dynamic Locators**: Uses dynamic locators to interact with elements based on test data.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mariah504/asana-playwright-tests.git
   cd asana-playwright-tests



### Challenges and Solutions

**Challenge 1: Setting Up Playwright and TypeScript**
- **Obstacle**: Initially encountered issues with setting up the Playwright and TypeScript environment, which included configuring the project structure, ensuring compatibility between various dependencies, and setting up the necessary configuration files.
- **Solution**: I meticulously followed detailed setup instructions to initialize the project. This involved:
  - Running `npm init -y` to create a `package.json` file.
  - Installing the necessary dependencies using `npm install @playwright/test typescript ts-node @types/node`.
  - Creating and configuring the `tsconfig.json` file to ensure TypeScript settings were properly aligned with the project requirements.
  - Creating a `playwright.config.ts` file to define the test directory, timeout settings, retry policies, and browser configurations.
  These steps ensured a robust and correctly configured environment, allowing me to leverage Playwright and TypeScript efficiently. This experience demonstrates my ability to quickly adapt to new tools and frameworks, which aligns with the job’s requirement for continuous learning and professional growth.

**Challenge 2: Browser Installation**
- **Obstacle**: Encountered errors related to missing browser executables. The Playwright tests could not run because the required browser binaries were not installed, leading to repeated test failures.
- **Solution**: To resolve this, I executed the command `npx playwright install`, which automatically downloaded and installed the necessary browser binaries (Chromium, Firefox, and WebKit). This ensured that all required browsers were available for the Playwright tests to execute correctly. This process showcased my problem-solving skills and my capacity to handle setup and environment configurations efficiently, which is crucial for automation roles. It also demonstrated my ability to quickly troubleshoot and resolve environment-related issues, ensuring smooth test execution.

**Challenge 3: Debugging Test Failures**
- **Obstacle**: Faced issues where tests were not running as expected. The tests would either fail to execute certain steps or produce incorrect results, making it difficult to identify the root causes of the problems.
- **Solution**: I implemented a methodical approach to debug the test script by adding console logs at strategic points within each test step. This involved:
  - Adding logs before and after key actions, such as navigating to the login page, filling in credentials, clicking buttons, and verifying elements.
  - Using the logs to track the flow of execution and identify where the process was breaking down.
  - Verifying the expected outcomes at each step by comparing the actual results with the expected results logged to the console.
  This approach allowed me to pinpoint the exact locations and reasons for test failures, such as incorrect selectors, timing issues, or navigation problems. By systematically addressing these issues, I was able to enhance the reliability and accuracy of the test scripts. This methodical debugging process highlights my attention to detail and my ability to enhance test scripts to ensure comprehensive test coverage.

### Recommendations

**Recommendation 1: Improve Selector Accuracy**
- Use more specific attributes or data-* attributes to enhance the accuracy and reliability of selectors, especially for dynamic elements. This recommendation reflects my understanding of best practices in front-end testing and my ability to optimize test scripts for reliability and performance.

**Recommendation 2: Enhance Error Handling**
- Implement more error handling to manage unexpected UI changes or network issues during the tests. This can include retry mechanisms or additional checks, aligning with the job's focus on ensuring the reliability and performance of applications.

**Recommendation 3: Modularize Test Cases**
- Consider breaking down test cases into smaller, reusable functions to enhance readability and maintainability. This can also help with identifying and isolating issues more effectively. This recommendation aligns with agile methodologies and efficient test management practices mentioned in the job description.

