# Zugang

Zugang is a VS Code extension designed to help you improve the accessibility of your code. By providing refactoring suggestions, it guides you towards meeting accessibility standards, inspired by Manuel Matuzovic's excellent book, ["Web Accessibility Cookbook"](https://www.oreilly.com/library/view/web-accessibility-cookbook/9781098145590/)

## 🚀 Features

Currently, zugang focuses on HTML, offering warnings when your code lacks essential elements, tags, or attributes necessary for accessibility. Future updates will expand support to more (.jsx, .tsx) files.

## ⚙️ Installation

The extension is not yet available on the VS Code Marketplace, but you can install and use it locally by following these steps:

1. Clone the repository

```
git clone https://github.com/bpetermann/ts-zugang.git
cd ts-zugang
```

2. Install the dependencies:

```
npm install
```

3. Start the extension in watch mode:

```
npm run watch
```

To use the extension locally:

- In VS Code, select `Run` and `Start Debugging` from the start view or press `F5`
- VS Code will open a new window where you can select the application you want to work on

## 📋 Usage Examples

<img src="https://github.com/user-attachments/assets/89afbe26-93de-452d-94f9-d3f305125260" alt="html code snippet with zugang extension" height="250">

## 🧪 Tests

The following command will run all test suites:

```
npm run test
```

## License

[MIT](https://github.com/bpetermann/ts-zugang/blob/main/LICENSE)
