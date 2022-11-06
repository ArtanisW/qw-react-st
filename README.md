# QingWheel/轻轮-入门学习版

Lightweight React Scaffold/轻量级 React 脚手架  
本版本为：React18 + React-Router6（JavaScript -入门学习版）  
完整系列请参见[Qing-Wheel](https://github.com/ArtanisW/Qing-Wheel)
首次配置开发环境请参考[萌新指南](https://github.com/ArtanisW/Qing-Wheel/blob/main/docs/MENG_XIN.md)  
Antd 组件示例[antd 官方](https://ant.design/components/overview-cn/)

## 首次运行

```
npm i
npm i -g nodemon // 已安装过请忽略
npm start
// 如需自定义端口，请修改 ./config/webpack.dev.conf.js中的mockport
```

## 技术架构

```
基础框架：React(v18+)
路由管理：React-Router(v6+)
UI组件库：antd(v4+)
打包构建：Webpack(v5+)
CSS预处理：Less + PostCSS
代码检查：ESLint + Stylelint
格式美化：Prettier
```

## 如何新建页面

1. 查看 src/components/Header.jsx，找到 tabs 变量（数组）并添加页面路由（key）和名称（label）
2. 在 src/pages 下新建 jsx 和 less 文件，并参考已有示例

## 编程入门

如果用 React 来写静态页面，实际上就是一个函数，在 return 中编写传统的 html 标签，或者引入 antd 的各种组件。但是注意，CSS 的写法与 Less 少有区别，且在 JSX 函数中，由于 CSS 模块化，要写成<div className={styles['page-container']}>这种形式。

## 配置

前端工程化需要一定的学习成本，如果你还没太了解这些，可以只关注 asset 和 src 目录下的文件，其他的默认配置不需要修改。

## 注意

仅供学习使用；未经授权不得用于商业用途
