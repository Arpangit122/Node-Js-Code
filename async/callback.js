import fs from "fs";

fs.readFile("../data/user.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  const user = JSON.parse(data);

  console.log(user);

  fs.readFile("../data/post.json", "utf8", (err1, data1) => {
    if (err1) {
      console.log(err1);
    }

    const posts = JSON.parse(data1);

    const result = user.map((user) => {
      return posts.filter((post) => post.userId === user.id);
    });

    console.log(result);
  });
});
