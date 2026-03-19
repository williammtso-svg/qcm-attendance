# 優質基督教音樂中小學 - Wind Band 點名系統

## 項目概述
這是一個基於 Google Apps Script + Google Sheets 的 Wind Band 點名系統，支持兩位導師共同管理同一班學生。

## 功能特點
- ✅ 單一導師（Dr. William So）管理學生名單
- ✅ 按日期點名，支持出席/缺席及缺席原因記錄
- ✅ 管理員查看報告（單日/月份模式）
- ✅ 月份報告按樂器分組顯示
- ✅ Excel 匯出（單日/月份）
- ✅ 圖表統計（導師提交狀況、每日出席、缺席原因）

## 部署步驟

### 1. 創建 Google Sheet
1. 前往 [Google Sheets](https://sheets.google.com)
2. 創建新試算表，命名為「QCM Wind Band Attendance」
3. 複製試算表 ID（URL 中 `/d/` 後面的一串字符）

### 2. 設置 Google Apps Script
1. 在 Google Sheet 中，點擊「擴充功能」>「Apps Script」
2. 刪除預設代碼，貼上 `AppsScript_Code.js` 的內容
3. **重要**：將第 5 行的 `YOUR_GOOGLE_SHEET_ID_HERE` 替換為你的試算表 ID
4. 點擊「部署」>「新增部署作業」
5. 類型選擇「網頁應用程式」
6. 執行身分：選擇「我」
7. 存取權：選擇「所有人」
8. 點擊「部署」
9. 複製「網頁應用程式 URL」

### 3. 設置前端
1. 打開 `index.html`
2. 找到第 267 行 `const API_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
3. 將 `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` 替換為剛才複製的網頁應用程式 URL
4. 保存文件

### 4. 部署到 GitHub Pages
1. 創建新的 GitHub Repository
2. 上傳 `index.html` 到 repository
3. 前往 Settings > Pages
4. Source 選擇 `main` branch
5. 保存後等待部署完成
6. 訪問提供的 GitHub Pages URL

## 使用說明

### 導師使用
1. 選擇導師名稱登入
2. 選擇上課日期
3. 標記學生出席/缺席
4. 缺席學生填寫原因
5. 點擊「提交點名」

### 管理員使用
1. 選擇「管理員」登入
2. 選擇模式：
   - **單日報告**：查看某一天的點名記錄
   - **月份報告**：查看整月的出席統計
3. 匯出 Excel 報告
4. 查看圖表統計

## 上課日期
- 2026-03-10
- 2026-03-17
- 2026-03-19
- 2026-03-21
- 2026-03-23
- 2026-03-26
- 2026-03-28

## 學生名單
共 48 位學生，涵蓋以下樂器：
- Flute (8人)
- Oboe (5人)
- Clarinet (9人)
- Bassoon (2人)
- Saxophone (3人)
- Trumpet (5人)
- Horn (3人)
- Trombone (3人)
- Euphonium (2人)
- Percussion (7人)
- Double Bass (1人)

## 技術架構
- **前端**：HTML + CSS + JavaScript
- **後端**：Google Apps Script
- **數據庫**：Google Sheets
- **部署**：GitHub Pages
- **圖表**：Chart.js
- **Excel 匯出**：xlsx-js-style

## 注意事項
- 無需管理員密碼，所有人可直接選擇「管理員」查看報告
- 兩位導師共用學生名單，各自獨立點名
- 月份報告會顯示每位導師的提交狀況
- 支持離線編輯（需先載入數據）

## 維護
如需修改學生名單或上課日期，請編輯 `index.html` 中的：
- `CLASS_DATES` 數組（第 259-267 行）
- `TUTOR_DATA` 對象（第 271 行開始）

## 聯絡
如有問題，請聯絡系統管理員。
