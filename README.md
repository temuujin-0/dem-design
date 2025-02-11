# dem-design

Digital Edu Management UI Components.

## 📦 Installation

```sh
yarn add dem-design
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


