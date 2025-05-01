# 亂碼轉換工具

## 環境
先確保電腦上有npm工具

`npm init -y`
`npm install iconv-lite`
`node generate-map.js`


此工具是由iconv-lite先產生gb2312-dict.json字典，字典按GPL-3.0授權

# 前端
網頁是純靜態網頁，但是fetch需要開server，可以用`python -m http.server 8000`在自己的電腦上的`127.0.0.1:8000`上瀏覽

# 授權
本程式依據 GNU General Public License v3.0 (GPLv3) 授權釋出。  
你可以自由使用、修改與散布本工具，但衍生作品也必須使用相同授權釋出。  
授權條款詳見：https://www.gnu.org/licenses/gpl-3.0.html