// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo.apply(Category, {
  foreignKey: `category_id`
})

// Categories have many Products
Category.hasMany.apply(Product, {
  foreignKey: `category_id`
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: `category_id`,
  onDelete: `CASCADE`
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  }
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};