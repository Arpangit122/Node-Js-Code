import path from "path";
import url from "url";

// const filePath = "./folder1/folder2/folder3/data.txt";

// //baseName :
// console.log(path.basename(filePath));

// ///dir Name:

// console.log(path.dirname(filePath));

// ///parse
// console.log(path.parse(filePath));

// //ext name

// console.log(path.extname(filePath));

const __fileName = url.fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);
console.log(__fileName);
console.log(__dirName);
