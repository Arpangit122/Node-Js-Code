import fs from 'fs/promises';

fs.readFile('../data/user.json','utf8')
.then((data)=>{
    const user=JSON.parse(data)
    console.log(user);

    fs.readFile('../data/post.json', 'utf8').then((data1)=>{
        const posts =JSON.parse(data1)

        console.log(posts)
    })
    .catch((err)=>console.log(err))
})
.catch((err)=> console.log(err));