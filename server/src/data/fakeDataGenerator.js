const Post = require("../models/posts");
const { faker } = require("@faker-js/faker");

const generatePosts = (number) => {
  let posts = [];
  for (let i = 0; i < number; ++i) {
    const post = new Post({
      userEmail: faker.internet.email(),
      userName: faker.internet.userName(),
      description: faker.lorem.paragraph(1),
      picturepath: "null",
      userPicturePath: "null",
      likes: faker.datatype.number(),
      comments: [],
    });

    posts.push(post);
  }
  return posts;
};
module.exports = generatePosts;
