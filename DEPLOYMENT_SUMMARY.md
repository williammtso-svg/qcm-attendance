# 優質基督教音樂中小學 Wind Band 點名系統 - 部署完成

## 🎉 系統已成功部署！

### 📍 系統網址
**https://williammtso-svg.github.io/qcm-attendance/**

### 🔑 登入資訊
- **導師 1**：Dr. William So
- **導師 2**：Mr. Henry Cheng
- **管理員**：admin（無需密碼）

### 📊 系統資訊

#### GitHub Repository
- **Repo URL**: https://github.com/williammtso-svg/qcm-attendance
- **Branch**: main
- **GitHub Pages**: 已啟用

#### Google Sheet
- **Sheet Name**: QCM Wind Band Attendance
- **Sheet ID**: `1yUZ2WMAzFwgYb8SmbT5YPP9e1zbTyAOT42z3r5UKQ08`
- **Sheet URL**: https://docs.google.com/spreadsheets/d/1yUZ2WMAzFwgYb8SmbT5YPP9e1zbTyAOT42z3r5UKQ08/edit

#### Google Apps Script
- **Deployment ID**: `AKfycbwcW3F8Fo9rYv-eaeqYZes8tLt-4wY1hZ3Zyrr_Ay8QF9Wg5Nuhj3Fxm7-QUdtsT1EgZg`
- **Web App URL**: https://script.google.com/macros/s/AKfycbwcW3F8Fo9rYv-eaeqYZes8tLt-4wY1hZ3Zyrr_Ay8QF9Wg5Nuhj3Fxm7-QUdtsT1EgZg/exec
- **Version**: 2
- **Status**: ✅ 已測試，API 連接正常

### 📅 上課日期
- 2026-03-10 (二)
- 2026-03-17 (二)
- 2026-03-19 (四)
- 2026-03-21 (六)
- 2026-03-23 (一)
- 2026-03-26 (四)
- 2026-03-28 (六)

### 👥 學生資訊
- **總人數**: 48 位
- **班級**: Wind Band（不分樂器班）
- **課室**: Concert Hall
- **樂器種類**: 11 種（Flute, Oboe, Clarinet, Bassoon, Saxophone, Trumpet, Horn, Trombone, Euphonium, Percussion, Double Bass）

### ✅ 功能清單
- ✅ 導師登入點名
- ✅ 出席/缺席標記
- ✅ 缺席原因記錄
- ✅ 管理員查看報告（單日/月份）
- ✅ 月份報告按樂器分組
- ✅ Excel 匯出（單日/月份）
- ✅ 圖表統計（導師提交、每日出席、缺席原因）
- ✅ 響應式設計

### 🧪 測試狀態
- ✅ 網站部署成功
- ✅ API 連接正常
- ✅ Google Sheet 已配置
- ⏳ 待用戶手動測試完整流程

### 📝 使用說明

#### 導師使用流程
1. 打開 https://williammtso-svg.github.io/qcm-attendance/
2. 選擇導師名稱（Dr. William So 或 Mr. Henry Cheng）
3. 點擊「登入」
4. 選擇上課日期
5. 標記學生出席/缺席
6. 缺席學生填寫原因
7. 點擊「提交點名」
8. 完成後點擊「登出」

#### 管理員使用流程
1. 選擇「管理員」登入
2. 選擇模式：
   - **單日報告**：查看某一天的點名記錄
   - **月份報告**：查看整月的出席統計
3. 選擇日期或月份
4. 查看報告
5. 匯出 Excel 或查看圖表

### 🔧 維護說明

#### 修改學生名單
編輯 `index.html` 中的 `TUTOR_DATA` 對象（約第 271 行開始）

#### 修改上課日期
編輯 `index.html` 中的 `CLASS_DATES` 數組（約第 259-267 行）

#### 重新部署
```bash
cd /Users/williamso/Documents/qcm-attendance
git add .
git commit -m "Update student list or dates"
git push origin main
```

### 📞 技術支援

#### 常見問題
1. **提交點名後沒反應**
   - 檢查瀏覽器 Console 是否有錯誤
   - 確認 Google Sheet 是否有 Records 工作表自動創建

2. **無法登入**
   - 確認已選擇導師
   - 刷新頁面重試

3. **報告顯示空白**
   - 確認該日期是否有導師提交點名
   - 檢查網絡連接

#### 查看數據
直接打開 Google Sheet 查看原始數據：
https://docs.google.com/spreadsheets/d/1yUZ2WMAzFwgYb8SmbT5YPP9e1zbTyAOT42z3r5UKQ08/edit

### 🎯 與保良局系統的區別
- ✅ 完全獨立的系統
- ✅ 不同的 Google Sheet
- ✅ 不同的 GitHub Repository
- ✅ 不同的 GitHub Pages URL
- ✅ 可以同時運行，互不干擾

---

**部署日期**: 2026-03-19  
**最後更新**: 2026-03-19  
**狀態**: ✅ 已完成並可使用
