const path = require('path');

let filepathCustom = path.join('/', 'projects', 'newDir');
console.log(filepathCustom);

let filepath = path.join(__dirname, "9_pathModule.js");
console.log(__dirname);
console.log(filepath);



let absoluteFilePath = path.resolve(__dirname, "9_pathModule.js")
console.log({filepath});
console.log({absoluteFilePath});

let base = path.basename(filepath);
console.log({base});
console.log(path.basename(__dirname))