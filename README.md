# Project Setup Instructions

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You are using a system running a recent version of your operating system (Linux, macOS, Windows).
- You have administrative privileges on your system.

## Installation Steps

### 1. Install Node.js 20

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js 20 is the latest LTS (Long Term Support) version.

1. **Download Node.js:**
   - Navigate to the [Node.js official website](https://nodejs.org/).
   - Download the Node.js 20.x.x LTS installer for your operating system.

2. **Install Node.js:**
   - Run the downloaded installer.
   - Follow the installation prompts, ensuring you install the necessary build tools.

3. **Verify Installation:**
   - Open your terminal or command prompt.
   - Run the following command to verify the installation:
     ```bash
     node -v
     ```
   - You should see the version number `v20.x.x`.

### 2. Install Angular CLI

Angular CLI is a command-line interface tool that helps you to create and manage Angular applications.

1. **Install Angular CLI:**
   - Open your terminal or command prompt.
   - Run the following command to install Angular CLI globally:
     ```bash
     npm install -g @angular/cli@13
     ```

2. **Verify Installation:**
   - Run the following command to verify the installation:
     ```bash
     ng version
     ```
   - You should see Angular CLI version `13.x.x` listed in the output.

### 3. Create a New Angular Project

1. **Create Project:**
   - Navigate to the directory where you want to create your project.
   - Run the following command to create a new Angular project:
     ```bash
     ng new my-angular-app
     ```
   - Follow the prompts to set up your project.

2. **Navigate to Project Directory:**
   - Change to your new project directory:
     ```bash
     cd my-angular-app
     ```

3. **Serve the Application:**
   - Run the following command to serve your application:
     ```bash
     ng serve
     ```
   - Open your web browser and navigate to `http://localhost:4200/` to see your new Angular application running.

### 4. Additional Setup (Optional)

- **Install Additional Node Packages:**
  - If your project requires additional Node packages, you can install them using npm:
    ```bash
    npm install <package-name>
    ```

- **Update Node and Angular CLI:**
  - To update Node.js, download the latest installer from the [Node.js official website](https://nodejs.org/).
  - To update Angular CLI to a newer version, run:
    ```bash
    npm install -g @angular/cli@latest
    ```

## Conclusion

You have successfully installed Node.js 20 and Angular 13 on your system. You can now start developing your Angular applications.

If you encounter any issues or have questions, feel free to consult the official documentation:
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Angular Documentation](https://angular.io/docs)

Happy coding!
