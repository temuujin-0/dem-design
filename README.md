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
import "dem-design/styles/tree.css"; // CSS file

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

## 📜 License

Distributed under the MIT License.
