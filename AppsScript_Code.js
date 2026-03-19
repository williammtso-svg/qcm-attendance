// Google Apps Script - QCM Wind Band Attendance System Backend
// Paste this into Extensions > Apps Script in your Google Sheet
// IMPORTANT: Replace SHEET_ID with your actual Google Sheet ID after creating the sheet

const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';

function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  const params = e.parameter;
  const action = params.action;

  function getPayload() {
    if (params.payload) {
      return JSON.parse(Utilities.newBlob(Utilities.base64Decode(params.payload)).getDataAsString());
    }
    if (e.postData && e.postData.contents) {
      return JSON.parse(e.postData.contents);
    }
    return null;
  }

  let result;
  try {
    if (action === 'getRecords') {
      result = getRecords(params.date);
    } else if (action === 'submitAttendance') {
      result = submitAttendance(getPayload());
    } else if (action === 'updateRecord') {
      result = updateRecord(getPayload());
    } else if (action === 'resetAttendance') {
      result = resetAttendance(getPayload());
    } else if (action === 'getSubmissionStatus') {
      result = getSubmissionStatus(params.date);
    } else {
      result = { error: 'Unknown action' };
    }
  } catch (err) {
    result = { error: err.message };
  }

  const output = ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);

  return output;
}

function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.JSON);
}

function getRecords(date) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName('Records');
  
  if (!sheet || sheet.getLastRow() < 2) {
    return { records: [] };
  }
  
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const records = [];
  
  for (let i = 1; i < data.length; i++) {
    const row = {};
    headers.forEach((h, j) => { row[h] = data[i][j]; });
    
    if (!date || row.date === date) {
      records.push(row);
    }
  }
  
  return { records };
}

function submitAttendance(payload) {
  if (!payload) return { error: 'No data' };
  
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName('Records');
  
  if (!sheet) {
    sheet = ss.insertSheet('Records');
    sheet.appendRow(['date', 'tutor', 'instrument', 'classNo', 'name', 'status', 'reason', 'timestamp']);
  }
  
  const { date, tutor, entries } = payload;
  const timestamp = new Date().toISOString();
  
  // Remove existing records for this date + tutor
  const data = sheet.getDataRange().getValues();
  const rowsToDelete = [];
  for (let i = data.length - 1; i >= 1; i--) {
    if (data[i][0] === date && data[i][1] === tutor) {
      rowsToDelete.push(i + 1);
    }
  }
  rowsToDelete.forEach(r => sheet.deleteRow(r));
  
  // Add new entries
  entries.forEach(entry => {
    sheet.appendRow([
      date, tutor, entry.instrument, entry.classNo, entry.name,
      entry.status, entry.reason || '', timestamp
    ]);
  });
  
  return { success: true };
}

function updateRecord(payload) {
  if (!payload) return { error: 'No data' };
  
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName('Records');
  if (!sheet) return { error: 'No records sheet' };
  
  const { date, tutor, instrument, classNo, name, status, reason } = payload;
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === date && data[i][1] === tutor && 
        data[i][2] === instrument && data[i][3] === classNo && data[i][4] === name) {
      sheet.getRange(i + 1, 6).setValue(status);
      sheet.getRange(i + 1, 7).setValue(reason || '');
      sheet.getRange(i + 1, 8).setValue(new Date().toISOString());
      return { success: true };
    }
  }
  
  return { error: 'Record not found' };
}

function resetAttendance(payload) {
  if (!payload) return { error: 'No data' };
  
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName('Records');
  if (!sheet) return { error: 'No records sheet' };
  
  const { date, tutor } = payload;
  const data = sheet.getDataRange().getValues();
  const rowsToDelete = [];
  
  for (let i = data.length - 1; i >= 1; i--) {
    if (data[i][0] === date && data[i][1] === tutor) {
      rowsToDelete.push(i + 1);
    }
  }
  
  rowsToDelete.forEach(r => sheet.deleteRow(r));
  
  return { success: true };
}

function getSubmissionStatus(date) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName('Records');
  
  if (!sheet || sheet.getLastRow() < 2) {
    return { submissions: [] };
  }
  
  const data = sheet.getDataRange().getValues();
  const tutors = {};
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === date) {
      tutors[data[i][1]] = true;
    }
  }
  
  return { submissions: Object.keys(tutors) };
}
