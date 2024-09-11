import fs from 'fs/promises';

async function getPosts() {
   try {
    const  rawUsers= await fs.readFile('../data/user.json','utf8')
    const  rawPost= await fs.readFile('../data/post.json','utf8')
    const  rawComments= await fs.readFile('../data/comments.json','utf8')

 const user=JSON.parse(rawUsers)
 const post=JSON.parse(rawPost)
 const comments=JSON.parse(rawComments)


 console.log(user)
 console.log(post)
 console.log(comments)
    
   } catch (error) {
    console.log(error)
   }


}

getPosts();