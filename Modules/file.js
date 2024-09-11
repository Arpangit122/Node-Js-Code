import { promises as fs } from 'fs';


// // const  data = fs.readFileSync("./data.txt", "utf8")

// // console.log(data)

// // fs.writeFileSync("./data.text","Hello Jhon ")

// callback function

// fs.readFile("./data.txt", "utf8", (error, data) => {
//   if (error) return console.log(error);

//   const result1 = data;

//   fs.readFile(result1, "utf8", (error1, data1) => {
//     if (error1) return console.log(error1);

//     const result2 = data1;

//     fs.readFile(result2, "utf8", (error2, data2) => {
//       if (error2) return console.log(error2);

//       console.log(data2);
//     });
//   });
// });

// //Promise function
// fs.readFile("./data.txt", "utf8")
//   .then((data) => {
//     fs.readFile(data, "utf8 ")
//       .then((data1) => {

//         fs.readFile(data1, "utf8")
//           .then((data2) => console.log(data2))
//           .catch((error) => console.log(error));
//       })
//       .catch((error) => console.log(error));
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// video 29.4


//async /await(most preferred)

async function readMyFile() {
    const data =  await fs.readFile("./data.txt", "utf8")
    const data1= await fs.readFile(data, "utf8")
    const data2= await fs.readFile(data1, "utf8")

    console.log(data2)
}


readMyFile();