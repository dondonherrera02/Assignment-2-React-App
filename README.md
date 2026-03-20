# Assignment 2 – CI/CD Pipeline with React, Jenkins, and Netlify

## Overview
This assignment focuses on building a **CI/CD pipeline** using a React application, GitHub, Jenkins, and Netlify.

You will:
- Create a React application
- Write a unit test
- Use Jenkins for CI (build and test)
- Use Netlify for CD (deployment)
- Automate the pipeline

---

# Continuous Integration (CI)

## Step 1: Create React App
Create a React application that displays **your name** on the webpage.

Example output on the page:

Hello, My name is Dondon Herrera

---

## Step 2: Create GitHub Repository
1. Create a new repository on GitHub.
2. Push your React application code to the repository.

---

## Step 3: Create a Unit Test
In your React application, create a **unit test** that verifies your name appears on the webpage.

Run the test locally.

Example command:

```bash
npm test
```

---

## Step 4: Push Code to GitHub
After confirming the test works locally, push your code to GitHub.

---

## Step 5: Create Jenkinsfile
Create a **Jenkinsfile** that defines the pipeline stages:

- Install dependencies
- Build the React app
- Run unit tests

Example stages:

- Build Stage
- Test Stage

---

## Step 6: Push Jenkinsfile to GitHub
Commit and push the Jenkinsfile to your GitHub repository.

---

## Step 7: Create Jenkins Job
1. Create a new Jenkins job.
2. Name the job **using your name**.
3. Configure it as **Pipeline SCM**.
4. Connect it to your GitHub repository.

---

## Step 8: Run Jenkins Pipeline
In Jenkins:

Click **Build Now**.

Jenkins should:
- Pull the repository
- Build the project
- Run the tests

---

# Continuous Deployment (CD)

## Step 9: Create Netlify Site
Log in to Netlify and create a **new site**.

---

## Step 10: Update Jenkinsfile
Add the following information to your Jenkinsfile:

- **Netlify Site ID**
- **Netlify Token**

The token can be created from your **Netlify account settings**.

---

## Step 11: Add Jenkins Credentials
In Jenkins:

1. Go to **Manage Jenkins**
2. Open **Credentials**
3. Add the **Netlify Token**

---

## Step 12: Add Deploy Stage
Update your Jenkinsfile to include a **Deploy Stage** that deploys your React app to Netlify.

---

## Step 13: Push Updated Code
Push the updated Jenkinsfile to GitHub.

---

## Step 14: Deploy with Jenkins
In Jenkins:

Click **Build Now** to test the deployment.

---

## Step 15: Verify Deployment
Open the **Netlify site URL** and confirm your React app is running.

---

# Automation

## Step 16: Schedule Pipeline
Configure your Jenkins job to **run automatically every 1 minute**.

This can be done using Jenkins **Build Triggers**.

---

## Step 17: Update Code
Update your React application to include the **course name** on the webpage.

Example:

Hello, My name is Dondon Herrera  
Course: CI/CD

Push the updated code to GitHub.

---

## Step 18: Verify Automatic Deployment
After **one minute**, check the Netlify site again.

The webpage should **automatically update** with the new content.

---

# Expected Outcome

By the end of this assignment, you will have:

- A React application deployed on Netlify
- A Jenkins pipeline that:
  - Builds the app
  - Runs tests
  - Deploys automatically
- A CI/CD workflow connected to GitHub