# 亂碼轉換工具

此工具由[iconv-lite](https://github.com/ashtuchkin/iconv-lite)預產生`gb2312-dict.json`字典，無須伺服器渲染的靜態網頁

## 環境

先確保電腦上有 npm 工具

`npm init -y`

`npm install iconv-lite`

`node generate-map.js`

## 前端

網頁無須後端，但是javascript 的 `fetch()` 需要開server，可以用 `python -m http.server 8000` 在自己的電腦上的 `127.0.0.1:8000` 上瀏覽。字典是不會變動的，也可以在此抓取 `https://raw.githubusercontent.com/0x6r1an0y/GBConv/refs/heads/main/gb2312-dict.json`

## 注意事項

- 出現`�`字元代表原文字已經被不可逆的破壞，是無法恢復的
- 此工具是將亂碼轉回簡體字，並非轉成繁體字

## 授權

依據 GNU General Public License v3.0 (GPLv3) 授權釋出，你可以自由使用、修改與散布本工具，但衍生作品也必須使用相同授權釋出