const sequelize = require('../config/connection');

const Users = require('../models/Users');
const Blog = require('../models/Blog');
const Comments = require('../models/Comments');

const blogSeedData = require('./blogSeedData.json');
const userSeedData = require('./userSeedData.json');
const commentsSeedData = require('./commentsSeedData.json');

// TODO Use async / await to Refactor the seedDatabase function below
const seedDatabase = () => {
  return sequelize.sync({ force: true }).then(() => {
    Users.bulkCreate(userSeedData).then(() => {
      Blog.bulkCreate(blogSeedData).then(() => {
        Comments.bulkCreate(commentsSeedData).then(() => {
          console.log('All Seeds Planted');
        });
      });
    });
  })

  

  

  process.exit(0);
};

seedDatabase();