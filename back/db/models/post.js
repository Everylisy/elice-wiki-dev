"use strict";
// const { Model } = require("sequelize");

// Post 테이블 정의
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define(
    "Post",
    {
      // allowNull: false -> NOT NULL
      postId: { type: DataTypes.STRING, allowNull: false },
      userId: { type: DataTypes.STRING, allowNull: false },
      date: { type: DataTypes.DATE, allowNull: false },
      week: { type: DataTypes.INTEGER, allowNull: false },
      tag: { type: DataTypes.STRING, allowNull: false },
      title: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Post",
      // freezeTableName: true로 해주면 테이블 이름을 복수형으로 저장하는 것을 막을 수 있다
      freezeTableName: true,
    }
  );
  return post;
};

// ----------------- sequelize generate로 생성하면 생성되는 코드 ---------
// module.exports = (sequelize, DataTypes) => {
//   class Post extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Post.init(
//     {
//       postId: DataTypes.STRING,
//       userId: DataTypes.STRING,
//       date: DataTypes.DATE,
//       week: DataTypes.INTEGER,
//       tag: DataTypes.STRING,
//       title: DataTypes.STRING,
//       body: DataTypes.STRING,
//     },
//     {
//       sequelize,
//       modelName: "Post",
//       freezeTableName: true,
//     }
//   );
//   return Post;
// };