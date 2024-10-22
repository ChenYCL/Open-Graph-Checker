# Open Graph Checker

这是一个使用 Node.js 和 Express.js 构建的工具，用于检查网页的 Open Graph 元数据并生成预览。

## 功能

- 提取并显示指定 URL 的 Open Graph 标签。
- 动态生成网页预览。

## 目录结构

```
/project-root
  ├── public
  │    └── index.html
  └── server.mjs
```

## 使用方法

### 前提条件

- 安装 [Node.js](https://nodejs.org/)

### 安装

1. 克隆仓库或下载源码。
2. 进入项目根目录并运行以下命令以安装依赖：

   ```bash
   npm install
   ```

### 启动服务器

在项目根目录下运行：

```bash
node server.mjs // npm run start
```

### 访问工具

在浏览器中访问 `http://localhost:7000`，输入要检查的 URL，然后点击“检查”按钮查看 Open Graph 数据和预览。

## 技术栈

- Node.js
- Express.js
- HTML/CSS/JavaScript

## 贡献

欢迎提交问题或请求功能。请先 Fork 项目并创建一个新的分支进行修改。

## 许可证

MIT

---

请根据你的实际项目需求和结构进行调整。
