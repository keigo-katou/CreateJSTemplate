# Type Script 入門

## 1. VisualStudioCodeのインストール

### 1.1 .tsファイルを作成
```
$mkdir js
$mkdir ts
$cd ts | touch .main.ts
```
### 1.2 tsconfigの作成
```
$tsc --init
//tsconfigに以下を追記
    "outDir": "./js",
    "rootDir": "./ts",    
```

### 1.3 .vscode/task.jsonの作成
```
[Cmd]+[Shift]+[P]
>conf
// タスクランナーの作成 -> typeScriptWatchModeを選択
```

### 1.4 TypeScriptの型定義をインストール
```
$npm install --save-dev @types/createjs
```

### 1.5 browserify のインストール
```
$npm install -g browserify
//一つにまとめる。
browserify .PATH/ENTRYPOINT.js -o ./PATH2/OUTPUT.js
```
