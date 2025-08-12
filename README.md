# Demo Dashboard Built with React + Vite for DevOps Training Using Azure Resources
<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Azure](https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white)

**A complete, end-to-end guide for building and deploying React.js applications to Azure using Azure DevOps**

[Getting Started](#-getting-started) • [Deployment Guide](#-the-deployment-journey) • [Pipeline Setup](#️-step-by-step-pipeline-guide) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [The Deployment Journey](#-the-deployment-journey)
- [Infrastructure vs Application](#-infrastructure-vs--application-the-core-difference)
- [Approval Gates](#️-the-role-of-approval-gates)
- [Step-by-Step Pipeline Guide](#️-step-by-step-pipeline-guide)
- [Technologies Used](#-technologies-used)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Overview

Welcome to the DevOps Insights Dashboard Playground — a hands-on, beginner-friendly project designed to help you build a modern React.js application and deploy it using Azure services and DevOps workflows.

Whether you're exploring CI/CD for the first time or aiming to simulate production-grade deployment practices, this guide walks you through every step — from local development to automated pipeline setup — using Azure DevOps in a safe, training-focused environment.


## ✨ Features

- 🚀 **Modern React Stack**: Built with React 18
- 🏗️ **Infrastructure as Code**: Terraform templates for Azure resources
- 🔄 **Complete CI/CD Pipeline**: Automated build, test, and deployment workflows
- 🛡️ **Production-Ready**: Includes approval gates and security best practices
- 📚 **Beginner-Friendly**: Step-by-step instructions with detailed explanations
- 🎨 **Beautiful UI**: Responsive design with Tailwind CSS and Lucide icons
- ⚡ **Fast Development**: Powered by Vite for lightning-fast builds

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Git
- Azure account
- Azure DevOps account

### Running the App Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sriharsha9436/devops-viz-playground.git
   cd devops-viz-playground
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application locally:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Your application will be available at `http://localhost:5173` or a similar address.

## 🌐 The Deployment Journey: From Code to Cloud

This section explains how to automate the process of building and deploying your application. We cover two distinct types of pipelines that work together to create a robust workflow.

### 🏠 Infrastructure vs. 📦 Application: The Core Difference

| Pipeline Type | Purpose | Analogy |
|---------------|---------|---------|
| **Terraform Pipelines** | Create and manage Azure resources | 🏗️ **Building the house** - laying foundation, building walls |
| **Application Pipelines** | Deploy application code | 🪑 **Furnishing the house** - adding furniture and decor |

This separation of concerns is a **production-grade approach** that:
- ✅ Prevents accidental changes to infrastructure
- ✅ Makes deployment process more reliable and secure
- ✅ Enables independent scaling of infrastructure and application changes

### 🛡️ The Role of Approval Gates

**Approval gates** are manual checkpoints in your pipeline that require designated person approval before deployment proceeds.

**Why we use them:**
- 🔒 **Quality Control**: Prevent untested builds from reaching production
- 👥 **Process Compliance**: Ensure proper review procedures
- 🛡️ **Risk Mitigation**: Add human oversight to automated processes

## 🛠️ Step-by-Step Pipeline Guide

> **Note**: This guide uses the Classic Editor for walkthrough clarity. YAML files are also provided for code-based pipeline approach.

### 🧱 Terraform Pipelines (for Azure Infrastructure)

#### 1. Terraform Build Pipeline

**Purpose**: Validate Terraform code and create deployment plan without making Azure changes.

| Task | Configuration | Why It's Important |
|------|---------------|-------------------|
| **Agent Job** | Rename to "Terraform Build Job" | Organizes pipeline structure |
| **Terraform Tool Installer** | Install latest Terraform version | Ensures consistent tooling |
| **Terraform CLI (Init)** | `Command: init`<br>`Directory: $(System.DefaultWorkingDirectory)/terraform` | Initializes Terraform project |
| **Terraform CLI (Validate)** | `Command: validate`<br>`Directory: $(System.DefaultWorkingDirectory)/terraform` | Validates Terraform syntax |
| **Terraform CLI (Plan)** | `Command: plan`<br>`Directory: $(System.DefaultWorkingDirectory)/terraform`<br>`Save plan: terraform.tfplan` | 🎯 **Critical**: Creates infrastructure change plan |
| **Publish Artifacts** | `Path: $(System.DefaultWorkingDirectory)/terraform`<br>`Artifact: tfplan_drop` | 📦 **Essential**: Makes plan available to release pipeline |

#### 2. Terraform Release Pipeline

**Purpose**: Apply the terraform plan and create actual Azure resources.

| Task | Configuration | Why It's Important |
|------|---------------|-------------------|
| **Agent Job** | Rename to "Terraform Deploy Job" | Clear pipeline organization |
| **Terraform Tool Installer** | Install Terraform on agent | Required for terraform commands |
| **Terraform CLI (Apply)** | `Command: apply`<br>`Directory: $(System.DefaultWorkingDirectory)/_YourArtifactAlias`<br>`Plan file: terraform.tfplan` | 🚀 **Executes**: Creates/modifies App Service |
| **Approval Gate** | Pre-deployment condition with team member approval | 🛡️ **Critical**: Manual safety check |

### 💻 Application Pipelines (for React.js App)

#### Classic Editor Pipeline

**Purpose**: Build React.js application and deploy to Azure App Service.

| Task | Configuration | Why It's Important |
|------|---------------|-------------------|
| **Agent Job** | Rename to "Application Build Job" | Pipeline organization |
| **Node.js Tool Installer** | Install correct Node.js version | Ensures consistent build environment |
| **npm install** | `Command: install`<br>`Working folder: $(System.DefaultWorkingDirectory)/react-app` | Installs project dependencies |
| **npm run build** | `Command: custom run build`<br>`Working folder: $(System.DefaultWorkingDirectory)/react-app` | 🏗️ **Compiles**: React app to dist folder |
| **Publish Artifacts** | `Path: $(System.DefaultWorkingDirectory)/react-app`<br>`Artifact: drop` | 📦 **Publishes**: Complete app including package.json |
| **Azure App Service Deploy** | `Package: $(System.DefaultWorkingDirectory)/_YourArtifactAlias/drop`<br>`Startup Command: npm start` | 🚀 **Deploys**: App to Azure with proper startup |

## 🔧 Technologies Used

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.2
- **Cloud Platform**: Microsoft Azure
- **CI/CD**: Azure DevOps
- **Infrastructure**: Terraform
- **Package Manager**: npm



## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure all tests pass before submitting
- Update documentation for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ for the Azure DevOps community**

[⭐ Star this repo](https://github.com/<your-username>/AzureDevOpsInsightsDashboard) • [🐛 Report Bug](https://github.com/<your-username>/AzureDevOpsInsightsDashboard/issues) • [💡 Request Feature](https://github.com/<your-username>/AzureDevOpsInsightsDashboard/issues)

</div>
