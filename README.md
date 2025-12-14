# React Native Boilerplate

This repository provides a personal boilerplate for creating new React Native applications.  
It contains a clean and scalable structure, TypeScript configuration, and common setup tools such as ESLint and Prettier.

---

## 🚀 Overview

The purpose of this boilerplate is to save setup time when starting a new React Native project.  
It includes everything required to begin development immediately, following a consistent architecture and coding style.

---

## 📘 How to Use

### Step 1 — Create a New Project

To start a new project based on this boilerplate, create a new folder by using the following command from your terminal:

```
npx degit alexandr-feschenko/react-native-boilerplate.git MyNewApp
```

This will copy the boilerplate files into a new directory called **MyNewApp**.  
The repository history will not be included.

---

### Step 2 — Navigate to the Project Folder

Once the folder has been created, open it in your terminal or IDE:

```
cd MyNewApp
```

---

### Step 3 — Initialize Version Control (Optional)

If you plan to use Git for version control, initialize a new repository and make the first commit.

```
git init
git add .
git commit -m "Initial boilerplate"
```

This ensures a clean working environment before any renaming or additional configuration.

---

### Step 4 — Rename the Project

By default, the boilerplate name is **RNBoilerplate**.  
You can rename it to match your new app’s name by using the `react-native-rename` package.

Example:

```
npx react-native-rename "MyNewApp" -b com.mycompany.mynewapp
```

If Git has not been initialized, you can skip the Git status check:

```
npx react-native-rename "MyNewApp" --skipGitStatusCheck
```

---

### Step 5 — Install Dependencies

Install all required project dependencies using your preferred package manager.
```
yarn install
```

---

### Step 6 — Run the Application

You can now start the app on your target platform.

For Android:

```
npx react-native run-android
```

For iOS:

```
npx pod-install ios
npx react-native run-ios
```

---

### Step 7 — Optional Build Cleanup

If you experience issues after renaming or modifying configuration files, you can clean cached builds.

For Android, run:

```
cd android
./gradlew clean
cd ..
```

---

## 📂 Folder Structure

```
src/
 ├── components/       Reusable UI components  
 ├── screens/          Main application screens  
 ├── hooks/            Custom React hooks  
 ├── store/            Redux store and slices  
 ├── navigation/       Navigation setup
```

---

## 🧩 Included Tools and Configurations

- **TypeScript** — static typing for reliability and maintainability
- **ESLint + Prettier** — linting and automatic formatting
- **React Navigation** — basic navigation setup
- **Redux Toolkit** — centralized state management
- **Babel Configuration** — alias and modern syntax support
- **.gitignore** — clean and optimized repository setup

---

## 🧠 Notes

- Keep dependencies updated regularly with `npx react-native upgrade`.
- Always run `npx pod-install` after adding new iOS packages.
- Use `.env` files for environment variables and API keys.
- Follow the provided folder structure for consistency and maintainability.

---

## 🧾 License

This boilerplate is open to use and modify.  
Created by **Alexandr Feschenko**.
