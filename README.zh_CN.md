# SimonAKing-相册

[English Version](<README.md>)

## 简介

> 一个美观现代的个人相册项目。

![preview](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExemVnOXBjZ2ZlNzJvY3dubGMxczdid2ZsNDh5bzR1eWszemxnd3Q3cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MCKs2Xv3BZOW0e6AzC/giphy.gif)

[在线浏览](http://simonaking.com/gallery)

你想为网站装上相册吗?

下面就让我们开始吧！

## 特性

- 自动图片压缩，保持原图质量
- 基于 BlurHash 的优雅图片加载
- 响应式瀑布流布局，支持图片放大
- 移动端友好的流畅动画设计
- 简单的照片管理（通过 `/photos` 目录）

## 安装

```sh
git clone https://github.com/SimonAKing/Gallery.git
cd Gallery
npm install
npm run dev
```

## 如何更新照片

### 本地照片更新

1. **添加照片**
   - 将照片放入项目根目录的 `photos` 文件夹中
   - 构建时会自动进行图片压缩，同时保持画质

2. **预览和构建**
   - 本地预览：`npm run dev`
   - 生产环境构建：`npm run build`

### 更新托管照片

1. **构建项目**
   - 在根目录下执行 `npm run build`
   - 这将在 `dist` 目录生成优化后的照片

2. **部署到 GitHub Pages**
   - 方案一：部署到 username.github.io
     ```sh
     cd dist
     git init
     git add -A
     git commit -m "部署相册"
     git push -f origin main
     ```
     - 访问 `username.github.io` 即可浏览相册

   - 方案二：部署为子目录
     - 如果你的 username.github.io 已被占用，可以创建新的仓库（如 `gallery`）
     - 部署到这个仓库后，相册将通过 `username.github.io/gallery` 访问
     - 更新 `package.json` 中的 CDN 配置：
     ```json
     {
       "config": {
         "cdn": "https://cdn.jsdelivr.net/gh/[用户名]/gallery/photos/"
       }
     }
     ```

## 赞助
开发一个优秀的项目，离不开大量时间和精力的投入。

如果此项目给你带来了帮助，欢迎赞助,`star`。

谢谢！
