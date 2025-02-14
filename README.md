# dem-design

Digital Edu Management UI Components.

## 📦 Installation

```sh
npm install dem-design
```

## 🚀 Usage

```jsx
import React from "react";
import { Tree } from "dem-design";
import "dem-design/styles/global.css"; // CSS file

const treeData = [
  {
    title: "Root",
    key: "0",
    children: [
      { title: "Child 1", key: "0-0" },
      { title: "Child 2", key: "0-1" },
    ],
  },
];

const App = () => {
  return <Tree treeData={treeData} />;
};

export default App;
```

## 🔧 Compatibility

- This project works with **React version 18.2.0**.

## ⌨️ Development

Git Clone
```sh
git clone https://github.com/temuujin-0/dem-design.git or git@github.com:ant-design/ant-design.git
```

Git Publish
```sh
git add .
git commit -m "any"
git pull origin main
git push origin main
```

🏗Build
```sh
npm run build
```

✨Version update
```sh
npm version patch  # Small fixes
npm version minor  # New features
npm version major  # Breaking changes
```

🌍Publish Public
```sh
npm publish --access public
```

🔨Conflicting Packages Fixing
```sh
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

## 📜 License

Distributed under the MIT License.
