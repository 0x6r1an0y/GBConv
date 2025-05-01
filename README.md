# 亂碼轉換工具

## 環境
先確保電腦上有npm工具

`npm init -y`
`npm install iconv-lite`
`node generate-map.js`


此工具是由iconv-lite先產生gb2312-dict.json字典，字典按GPL-3.0授權

# 前端
網頁是純靜態網頁，但是fetch需要開server，可以用`python -m http.server 8000`在自己的電腦上的`127.0.0.1:8000`上瀏覽