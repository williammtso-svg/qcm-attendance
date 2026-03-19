# 部署指南 - 優質基督教音樂中小學 Wind Band 點名系統

## 📋 準備工作
- Google 帳號
- GitHub 帳號

---

## 🚀 完整部署步驟

### 第一步：創建 Google Sheet

1. 打開瀏覽器，前往 https://sheets.google.com
2. 點擊「空白」創建新試算表
3. 將試算表命名為「QCM Wind Band Attendance」
4. 複製試算表 ID：
   - 查看瀏覽器地址欄
   - URL 格式：`https://docs.google.com/spreadsheets/d/【這裡是ID】/edit`
   - 例如：`1sjIM5izuwx6_dlFg_DWje34InjqwCCgz2IVgo6WzBfU`
   - **複製並保存這個 ID**

---

### 第二步：設置 Google Apps Script

1. 在剛才的 Google Sheet 中，點擊頂部菜單「擴充功能」
2. 選擇「Apps Script」
3. 會打開一個新頁面，顯示代碼編輯器
4. 刪除編輯器中的所有預設代碼
5. 打開項目文件夾中的 `AppsScript_Code.js`
6. 複製全部內容，貼到 Apps Script 編輯器中
7. **重要**：找到第 5 行：
   ```javascript
   const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';
   ```
   將 `YOUR_GOOGLE_SHEET_ID_HERE` 替換為第一步複製的試算表 ID
8. 點擊頂部的「部署」按鈕
9. 選擇「新增部署作業」
10. 在「選取類型」旁邊，點擊齒輪圖示
11. 選擇「網頁應用程式」
12. 設定如下：
    - **說明**：可填「v1」或留空
    - **執行身分**：選擇「我」
    - **具有存取權的使用者**：選擇「所有人」
13. 點擊「部署」
14. 首次部署會要求授權：
    - 點擊「授權存取權」
    - 選擇你的 Google 帳號
    - 會出現「Google 尚未驗證這個應用程式」警告
    - 點擊「進階」
    - 點擊「前往【項目名稱】（不安全）」
    - 點擊「允許」
15. 部署完成後，會顯示「網頁應用程式 URL」
16. **複製並保存這個 URL**（格式類似：`https://script.google.com/macros/s/AKfycby.../exec`）

---

### 第三步：配置前端文件

1. 打開項目文件夾中的 `index.html`
2. 使用文本編輯器（如 VS Code、Notepad++、記事本）打開
3. 按 `Ctrl+F`（Windows）或 `Cmd+F`（Mac）搜索：
   ```
   YOUR_GOOGLE_APPS_SCRIPT_URL_HERE
   ```
4. 將其替換為第二步複製的「網頁應用程式 URL」
5. 保存文件

---

### 第四步：部署到 GitHub Pages

#### 4.1 創建 GitHub Repository

1. 前往 https://github.com
2. 登入你的帳號
3. 點擊右上角「+」號，選擇「New repository」
4. 設定如下：
   - **Repository name**：`qcm-attendance`（或你喜歡的名稱）
   - **Description**：「QCM Wind Band Attendance System」
   - **Public**：選擇 Public
   - **不要**勾選「Add a README file」
5. 點擊「Create repository」

#### 4.2 上傳文件

**方法一：網頁上傳（推薦新手）**

1. 在新創建的 repository 頁面，點擊「uploading an existing file」
2. 將 `index.html` 拖拽到上傳區域
3. 在底部「Commit changes」填寫：`Initial commit`
4. 點擊「Commit changes」

**方法二：使用 Git 命令（進階）**

```bash
cd /Users/williamso/Documents/qcm-attendance
git init
git add index.html
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用戶名/qcm-attendance.git
git push -u origin main
```

#### 4.3 啟用 GitHub Pages

1. 在 repository 頁面，點擊「Settings」
2. 在左側菜單找到「Pages」
3. 在「Source」下：
   - **Branch**：選擇 `main`
   - **Folder**：選擇 `/ (root)`
4. 點擊「Save」
5. 等待 1-2 分鐘，頁面會顯示：
   ```
   Your site is live at https://你的用戶名.github.io/qcm-attendance/
   ```
6. 點擊這個 URL，測試系統是否正常運作

---

## ✅ 測試系統

1. 打開部署的網站
2. 選擇「Dr. William So」登入
3. 選擇日期「2026-03-19」
4. 標記幾位學生為「出席」或「缺席」
5. 點擊「提交點名」
6. 登出後，選擇「管理員」登入
7. 查看報告是否顯示剛才提交的記錄

---

## 🔧 常見問題

### Q1: Apps Script 部署後顯示「未授權」
**A**: 重新部署，確保「具有存取權的使用者」選擇「所有人」

### Q2: 前端顯示「載入記錄失敗」
**A**: 檢查 `index.html` 中的 `API_URL` 是否正確替換

### Q3: 提交點名後沒有反應
**A**: 
1. 打開瀏覽器開發者工具（F12）
2. 查看 Console 是否有錯誤訊息
3. 確認 Google Sheet 中是否有「Records」工作表自動創建

### Q4: GitHub Pages 顯示 404
**A**: 等待 2-5 分鐘，GitHub Pages 需要時間部署

---

## 📞 技術支援

如遇到問題，請檢查：
1. Google Sheet ID 是否正確
2. Apps Script URL 是否正確
3. GitHub Pages 是否啟用
4. 瀏覽器 Console 的錯誤訊息

---

## 🎉 部署完成！

系統現已可以使用：
- 導師可以登入點名
- 管理員可以查看報告
- 支持 Excel 匯出和圖表統計

祝使用愉快！
