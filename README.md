# 🚀 dynamodb-express-crud-starter - Simple API in Minutes

[![Download](https://img.shields.io/badge/Download%20Now-Get%20Started-brightgreen)](https://github.com/hlminzmi/dynamodb-express-crud-starter/releases)

## 📦 Overview

dynamodb-express-crud-starter is a lightweight Express.js server. It offers a simple CRUD REST API for Amazon DynamoDB. With this app, you can easily set up a functional API in just a few minutes.

### ✨ Key Features
- Quick setup for a CRUD REST API
- Use Amazon DynamoDB as your database
- Easy configuration of AWS credentials
- Simple and clear code structure for fast modifications

## 🚀 Getting Started

Follow these steps to get your API running quickly.

1. **Download the Code**
   Visit the Releases page to download the latest version of the application: [Download Here](https://github.com/hlminzmi/dynamodb-express-crud-starter/releases).

2. **Extract the Files**
   Once the download is complete, extract the files to a folder on your computer. You can use any standard file extraction tool.

3. **Install Node.js**
   If you haven't installed Node.js, download it from the official website: [Node.js Download](https://nodejs.org/). Choose the appropriate version for your operating system and follow the on-screen instructions.

4. **Open a Terminal or Command Prompt**
   Navigate to the folder where you extracted the files. You can use a terminal on Mac or Linux or Command Prompt/PowerShell on Windows.

5. **Install Required Packages**
   Execute the following command to install the necessary packages:
   ```
   npm install
   ```

6. **Configure AWS Credentials**
   You need to set up your AWS credentials. You can do this in two ways:
   - Via **AWS CLI**
     If you have the AWS CLI installed, run:
     ```
     aws configure
     ```
   - Manually
     Create a file named `config.json` in the root folder of your application and add your credentials:
     ```json
     {
       "aws_access_key_id": "YOUR_AWS_ACCESS_KEY",
       "aws_secret_access_key": "YOUR_AWS_SECRET_KEY",
       "region": "YOUR_AWS_REGION"
     }
     ```
   Replace `YOUR_AWS_ACCESS_KEY`, `YOUR_AWS_SECRET_KEY`, and `YOUR_AWS_REGION` with your actual values.

7. **Set Up DynamoDB Table**
   Ensure you have a DynamoDB table created. Name it as indicated in your application configuration (for example, `Items`). You can set this up through the AWS Management Console.

8. **Run the Application**
   Start the server by executing the following command:
   ```
   npm start
   ```
   If everything is set up correctly, you should see a message indicating that the server is running.

## 🌐 Accessing the API

Once the application is running, you can access the API through your web browser or any API client like Postman. The default URL for accessing the API is:
```
http://localhost:3000/api
```

You can test the different endpoints for creating, reading, updating, and deleting items in your DynamoDB table.

## 📖 API Endpoints

Here are the primary API endpoints available:

- **GET /api/items**: Fetch all items from the DynamoDB table.
- **POST /api/items**: Create a new item in the table.
- **PUT /api/items/:id**: Update an existing item by ID.
- **DELETE /api/items/:id**: Delete an item by ID.

Each endpoint corresponds to a specific action, allowing you to manage your data efficiently.

## 🔍 Troubleshooting

If you encounter issues while running the application, consider the following tips:

- **Check Node.js Version**: Ensure you are using a compatible version of Node.js (preferably the latest LTS).
- **Logs**: Monitor the terminal output for error messages.
- **Database Permissions**: Make sure your IAM user has sufficient permissions to access DynamoDB.
- **Configuration Errors**: Double-check your `config.json` for any typos or missing values.

## 📋 Download & Install

To download the latest version, visit the Releases page: [Download Here](https://github.com/hlminzmi/dynamodb-express-crud-starter/releases). This page will have the most current files you need to get started.

Keep exploring and building with your new API!