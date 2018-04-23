
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
    download_link: DataTypes.STRING,
    keyword: DataTypes.STRING
  }, {
    classMethods: {
      associate: (/* models */) => {
        // associations can be defined here
      }
    }
  });
  return Item;
};
