# 在线文档

![](https://img.shields.io/badge/React-%5E17.0.0-brightgreen) ![](https://img.shields.io/badge/Express-%5E4.17.2-yellow)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

> 一个干净免费的文档刷题网站！
>
> React + 云开发 / Node.js 全栈项目，包含网站前台 + 管理员后台的完整前后端代码。

地址：[https://www.mianshiya.com](https://mianshiya.com)

视频介绍：[欢迎点赞、收藏、投币三连](https://www.bilibili.com/video/BV1hu411U7Cc/)

为什么开源？[看视频了解](https://www.bilibili.com/video/BV1LZ4y1B7Q1/)

![在线文档主页](https://qiniuyun.code-nav.cn/img/image-20220104232606368.png)

如果你是

- 求职者 👨：高效刷题、把握高频考点，快速分享面经，顺利通过文档
- 文档官 🧓🏻：快速选题、一键生成试卷，把控文档考点，高效招纳人才
- 学生 👨‍🎓：了解文档考察重点，明确学习方向，积累小题库，稳步提升
- 老师 👩‍🏫：了解企业招聘需求，改进教学方向，帮助更多学生走进大厂

## 项目背景

如今文档越来越卷了，每场文档必考八股文，所以不得不背诵文档题。

但网上的文档题过于分散、很多面经也是只有问题没有题解，就导致我们需要一个个去搜索、或者关注这号那号去领取别人整理好的文档题，很麻烦。

因此，我做了【在线文档】，一个专注文档刷题的网站。有了它，大家可以直接一站式在线刷题看题解，告别搜索和求人，大大提高复习效率。希望它能帮助大家拿到理想的 offer。

## 优势

- 干净：界面简洁，纯净无广
- 免费：永久免费，可赚激励
- 全面：海量文档，上百方向
- 共建：全民编辑，共同完善
- 崭新：持续更新，拥抱变化
- 效率：灵活选题，高效刷题
- ~~多端适配（算个毛的优势）~~

## 项目定位

**专注** 文档刷题，本就是鸭鸭最大的不同！

![专注文档题](https://qiniuyun.code-nav.cn/img/image-20220107004158194.png)

## 功能

🌟 亮点功能 🧪 试验功能 🚀 未来计划（画饼）

- 文档
  - 浏览文档
    - 折叠解析
  - 🌟 多维度筛选文档（难度、标签、题型）
  - 🌟 多维度排序文档（热度、收藏数、频率）
  - 🌟 文档推荐
  - 🌟 文档遇见次数
  - 🌟 共同编辑解析
  - 精选文档
  - 上传文档
  - 搜索文档
    - 热门搜索
    - 搜索历史
  - 收藏文档
  - 🧪 语音读题
  - 🚀 选题练习
  - 🚀 分析报告
  - 举报
- 标签
  - 🌟 关注标签
  - 搜索标签
  - 🚀 标签树
- 回答

  - 🌟 回答文档
  - 精选回答
  - 点赞回答
  - 回复

- 试卷
  - 🌟 试题篮
  - 🌟 一键组卷
  - 🌟 下载试卷
  - 查看 / 隐藏解析
  - 试卷可见范围（公开 / 私有）
  - 🧪 语音读卷
  - 🚀 试卷打分
- 用户
  - 设置个人信息
  - 积分
  - 🌟 收藏夹
  - 文档管理
  - 回答管理
  - 试卷管理
  - 消息中心
  - 个人主页
- 其他
  - 排行榜

## 项目展示

多维度文档检索和排序：

![](https://qiniuyun.code-nav.cn/img/image-20220104233155350.png)

文档浏览：

![](https://qiniuyun.code-nav.cn/img/image-20220104233619712.png)

试卷浏览：

![](https://qiniuyun.code-nav.cn/img/image-20220104233457834.png)

快速组卷：

![](https://qiniuyun.code-nav.cn/img/image-20220104233914359.png)

## 技术栈

> 可先观看：[在线文档技术分享视频](https://www.bilibili.com/video/BV1sa41117zV/)

### 前端

- 开发框架：React、Umi
- 脚手架：Ant Design Pro
- 组件库：Ant Design、Ant Design Components
- 语法扩展：TypeScript、Less
- 打包工具：Webpack
- 代码规范：ESLint、StyleLint、Prettier

### 后端

- 主语言：JavaScript（Node.js / 腾讯云云开发）
- 开发框架：Express（Express Session）
- 数据库：MongoDB
- 中间件：Redis、Elasticsearch
- 对象存储：腾讯云云存储 / 腾讯云 COS

### 部署

- web 服务：Nginx
- Docker 容器、微信云托管
- CDN 加速

## 整体架构

> 仅供参考

![在线文档网站架构图](https://qiniuyun.code-nav.cn/%E9%9D%A2%E8%AF%95%E9%B8%AD%E6%9E%B6%E6%9E%84.png)

## 快速上手

### 前端

环境要求：Node.js >= 14

安装依赖：

```bash
yarn
```

启动：

```bash
yarn start
```

部署：

```bash
yarn build
```

执行命令后会得到 dist 目录，可以放到自己的 web 服务器指定的路径；也可以使用 Docker 容器部署，将 dist、Dockerfile、docker 目录（文件）一起打包即可。

### Node.js 后端

> 代码均在 server 目录中

请阅读 [参考文档](./server/README.md)

### 云函数后端

> 代码均在 cloudfunctions 目录中

请阅读 [参考文档](./cloudfunctions/README.md)

## 🍊 进一步学习

如果想进一步了解项目的完整制作过程、系统设计、数据库设计、经验感悟等，欢迎加入鱼皮的 [编程知识星球](https://dogyupi.com) ，在星球内会直播带大家玩转这个项目。

## 欢迎贡献

项目需要大家的支持，期待更多小伙伴的贡献，你可以：

- [上传优质文档](https://www.mianshiya.com/addQuestion/)
- [分享试卷或面经](https://www.mianshiya.com/addPaper/)
- 回答文档或优化文档解析
- 提建议或 Bug：[反馈平台](https://support.qq.com/products/370820)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.code-nav.cn"><img src="https://avatars.githubusercontent.com/u/26037703?v=4?s=100" width="100px;" alt=""/><br /><sub><b>程序员鱼皮</b></sub></a><br /><a href="#infra-liyupi" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/liyupi/mianshiya/commits?author=liyupi" title="Tests">⚠️</a> <a href="https://github.com/liyupi/mianshiya/commits?author=liyupi" title="Code">💻</a></td>
    <td align="center"><a href="http://blog.code520.com.cn"><img src="https://avatars.githubusercontent.com/u/73232691?v=4?s=100" width="100px;" alt=""/><br /><sub><b>周靖</b></sub></a><br /><a href="#content-jokereven" title="Content">🖋</a> <a href="https://github.com/liyupi/mianshiya/commits?author=jokereven" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/taiyang"><img src="https://avatars.githubusercontent.com/u/11793873?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tai</b></sub></a><br /><a href="#content-taiyang" title="Content">🖋</a> <a href="https://github.com/liyupi/mianshiya/commits?author=taiyang" title="Tests">⚠️</a> <a href="https://github.com/liyupi/mianshiya/pulls?q=is%3Apr+reviewed-by%3Ataiyang" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/Luo-0518"><img src="https://avatars.githubusercontent.com/u/92662475?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Luo-0518</b></sub></a><br /><a href="#content-Luo-0518" title="Content">🖋</a> <a href="https://github.com/liyupi/mianshiya/commits?author=Luo-0518" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
