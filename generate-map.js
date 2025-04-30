const iconv = require('iconv-lite');
const fs = require('fs');

let map = {};
for (let hi = 0x00; hi <= 0xFF; hi++) {
  for (let lo = 0x00; lo <= 0xFF; lo++) {
    const buf = Buffer.from([hi, lo]);
    const gbChar = iconv.decode(buf, 'gb2312');
    const fakeChar = iconv.decode(buf, 'big5');
    if (gbChar.length === 1 && fakeChar.length === 1 && gbChar !== fakeChar) {
      map[fakeChar] = gbChar;
    }
  }
}

fs.writeFileSync('gb2312-dict.json', JSON.stringify(map, null, 2));