# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在此代码仓库中工作时提供指导。

## 项目概述

cassidy-skills 是一个个人技能/工具仓库，包含：
- **design-generator** - 前端界面生成 skill，支持品牌风格 + 自定义设计
- **super-novelist** - 小说创作 skill，支持中英双语，全题材，长中短篇
- **plain-prd** - 大众视角 PRD 生成 skill（去行话、可落地）
- **docs/** - 设计规范和参考文档
- **skills/** - 可分发的 .skill 安装包

## 仓库结构

```
cassidy-skills/
├── CLAUDE.md           # 本文件
├── README.md            # 英文文档
├── README_zh.md         # 中文文档
├── index.html           # 测试页面：纪录片平台（The Verge 风格）
├── nota.html            # 测试页面：笔记应用（明暗切换）
├── codeNav.html         # 测试页面：程序员导航（深色主题）
├── docs/
│   ├── frontend-aesthetics/
│   │   └── agents.md   # 前端设计规范（反 AI 味原则）
│   └── designs/        # 设计系统参考文档（冗余，与 skills 重复）
├── skills/
│   ├── design-generator/
│   │   ├── design-generator.skill  # 可分发安装包
│   │   ├── SKILL.md                # skill 核心定义
│   │   └── references/             # 品牌设计系统参考（66+）
│   ├── super-novelist/
│   │   ├── super-novelist.skill    # 可分发安装包
│   │   ├── SKILL.md                # skill 核心定义
│   │   ├── scripts/                # 字数检查等脚本
│   │   └── references/             # 写作指南和流程文档
│   └── plain-prd/
│       ├── plain-prd.skill         # 可分发安装包
│       ├── SKILL.md                # skill 核心定义
│       └── references/             # 反行话词典 / PRD 模板 / 示例
```

## 开发说明

- 无构建系统、测试或 CI 配置
- `.skill` 文件是 zip 打包格式，用于分发
- 设计系统参考位于 `skills/design-generator/references/designs/`

## 设计原则

生成前端代码时：
1. 避免 AI 味（紫蓝渐变、Inter 字体、圆角卡片网格）
2. 使用有辨识度的字体组合
3. 颜色服务氛围，不是仅满足可用
4. 动效聚焦高价值时刻

## 可用命令

- `/design-generator` - 调用设计生成 skill
- 触发词："帮我做个页面"、"用 XX 风格"等
- `/super-novelist` - 调用小说创作 skill（需先安装）
