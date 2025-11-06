# GoRest API Testing

A comprehensive API testing automation framework built with Cucumber.js and JavaScript, designed to test the GoRest REST API service using Behavior-Driven Development (BDD) practices.

## 🚀 Features

- **BDD Testing**: Human-readable test scenarios using Gherkin syntax
- **API Coverage**: Tests CRUD operations (Create, Read, Update) for user management
- **Modern Stack**: Built with Cucumber.js, Playwright assertions, and Axios
- **Environment Configuration**: Secure API token management using environment variables
- **Dynamic Test Data**: Generates unique test data to prevent conflicts
- **Comprehensive Logging**: Detailed console output for debugging and visibility

## 📋 Test Scenarios

The framework covers the following API operations:

### 1. User Creation (POST)
- Creates a new user with name, gender, email, and status
- Validates 201 Created response status
- Verifies user ID is returned in response

### 2. User Retrieval (GET)
- Retrieves user details using user ID
- Validates 200 OK response status
- Verifies correct user data is returned

### 3. User Update (PUT)
- Updates user information (name field)
- Validates 200 OK response status
- Verifies updated data is correctly applied

## 🛠 Technology Stack

- **Node.js** - JavaScript runtime environment
- **Cucumber.js** (`@cucumber/cucumber`) - BDD testing framework
- **Playwright** (`@playwright/test`) - Assertion library
- **Axios** - HTTP client for API requests
- **dotenv** - Environment variable management

## 📁 Project Structure

```
gorest-api-test/
├── package.json                 # Project configuration and dependencies
├── playwright.config.js         # Playwright configuration
├── features/
│   └── gorest.feature           # BDD feature file with test scenarios
├── steps/
│   └── gorest.steps.js          # Step definitions implementing test logic
└── .env                         # Environment variables (API token)
```

## 🚦 Prerequisites

1. **Node.js** (v16 or higher)
2. **GoRest API Token** - Sign up at [GoRest](https://gorest.co.in) to get your API token

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd gorest-api-test
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   # Create a .env file in the project root
   GOREST_TOKEN=your_api_token_here
   ```

## 🏃‍♂️ Running Tests

Execute the test suite:

```bash
npm test
```

This will run all Cucumber scenarios and display the results in the console.

## 🔧 Configuration

### API Endpoint
- **Base URL**: `https://gorest.co.in/public/v2`
- **Authentication**: Bearer token (stored in `GOREST_TOKEN` environment variable)

### Test Data
- **Unique Emails**: Generated using timestamps (e.g., `resa_1699123456789@mail.com`)
- **User Names**: "Resa QA Automation" (creation), "Resa QA Updated" (after update)
- **Gender**: "female"
- **Status**: "active"

## 📊 Test Output

The framework provides detailed console logging including:
- Request/response data
- Status codes
- User IDs
- Operation results

Example output:
```
POST Response: { id: 12345, name: 'Resa QA Automation', email: 'resa_1699123456789@mail.com', ... }
Status Code: 201
User ID: 12345
```

## 🔒 Security

- API tokens are stored in environment variables, not in code
- No sensitive information is committed to version control
- `.env` file is excluded from git via `.gitignore`

## 🐛 Troubleshooting

### Common Issues

1. **401 Unauthorized Error**
   - Ensure your `GOREST_TOKEN` is valid and correctly set in the `.env` file

2. **422 Unprocessable Entity Error**
   - Check if the email address is already in use (framework uses timestamps to avoid this)
   - Verify all required fields are included in the request

3. **Module Not Found Error**
   - Run `npm install` to ensure all dependencies are installed

