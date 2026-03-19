# QCM Wind Band Attendance System - 項目說明

## 項目位置
- **本地文件夾**：`/Users/williamso/Documents/qcm-attendance/`
- **GitHub Repo**：待創建（建議命名：`qcm-attendance`）
- **GitHub Pages URL**：待部署

## 項目特點
這是一個**全新獨立**的點名系統，與保良局羅氏基金中學的系統完全分離。

### 與保良局系統的主要區別
1. **學校名稱**：優質基督教音樂中小學
2. **班級結構**：只有一個 Wind Band，不分樂器班
3. **導師配置**：兩位導師（Dr. William So, Mr. Henry Cheng）共同管理同一批學生
4. **學生數量**：48 位學生
5. **上課日期**：2026年3月的7個日期
6. **無管理員密碼**：任何人都可以選擇「管理員」查看報告
7. **主題顏色**：棕色系（#8B4513, #D2691E）

## 學生名單結構
```javascript
TUTOR_DATA = {
  "Dr. William So": {
    "Wind Band": {
      "time": "不適用",
      "room": "Concert Hall",
      "students": [48位學生，每位包含 class_no, name, instrument]
    }
  }
}
```

## 上課日期
```javascript
CLASS_DATES = [
  "2026-03-10",
  "2026-03-17",
  "2026-03-19",
  "2026-03-21",
  "2026-03-23",
  "2026-03-26",
  "2026-03-28"
]
```

## 樂器分佈
- Flute: 8人
- Oboe: 5人
- Clarinet: 9人（含1位 Bass Clarinet）
- Bassoon: 2人
- Saxophone: 3人
- Trumpet: 5人
- Horn: 3人
- Trombone: 3人
- Euphonium: 2人
- Percussion: 7人
- Double Bass: 1人

## 功能清單
✅ 導師登入點名
✅ 管理員查看報告（單日/月份）
✅ 月份報告按樂器分組
✅ Excel 匯出（單日/月份）
✅ 圖表統計（導師提交、每日出席、缺席原因）
✅ 響應式設計

## 部署步驟
詳見 `SETUP_GUIDE.md`

## 文件說明
- `index.html`：完整的前端系統（含 HTML/CSS/JS）
- `AppsScript_Code.js`：Google Apps Script 後端代碼
- `README.md`：項目說明文檔
- `SETUP_GUIDE.md`：詳細部署指南
- `PROJECT_NOTE.md`：本文件，項目筆記

## 技術架構
- 前端：純 HTML/CSS/JavaScript
- 後端：Google Apps Script
- 數據庫：Google Sheets
- 部署：GitHub Pages
- 圖表：Chart.js v4
- Excel：xlsx-js-style v1.2.0

## 待辦事項
- [ ] 創建 Google Sheet
- [ ] 部署 Google Apps Script
- [ ] 配置 API_URL
- [ ] 創建 GitHub Repository
- [ ] 部署到 GitHub Pages
- [ ] 測試完整流程

## 注意事項
1. 此系統與保良局系統**完全獨立**，不會互相影響
2. 兩個系統使用不同的 Google Sheet
3. 兩個系統部署在不同的 GitHub Pages
4. 可以同時運行，互不干擾

## 維護
如需修改學生名單或日期，編輯 `index.html` 中的：
- `CLASS_DATES`（第 259-267 行）
- `TUTOR_DATA`（第 271 行開始）

修改後重新提交到 GitHub 即可。

---

**創建日期**：2026-03-19
**最後更新**：2026-03-19
