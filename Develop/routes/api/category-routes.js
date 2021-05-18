const router = require('express').Router();
const {
  Category,
  Product
} = require('../../models');
const {
  update
} = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try {
    // find all categories
    const allCategoryData = await Category.findAll({
      // be sure to include its associated Products 
      include: [{
        model: Product
      }]
    });
    res.status(200).json(allCategoryData)
  } catch (err) {
    console.error(err);
    res.status(500).json(err)
  }
});

router.get('/:id', (req, res) => {
  try {
    // find one category by its `id` value
    const categoryData = await Category.findByPk(req.params.id, {
      // be sure to include its associated Products 
      include: [{
        model: Product
      }]
    });
    res.status(200).json(categoryData)
  } catch (err) {
    console.error(err);
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new category 
  Category.create(req.body).then((category) => {
      res.status(200).json(category)
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json(err)
    });
});

router.put('/:id', (req, res) => {
  try {
    // update a category by its `id` value
    const updateCategory = awaitCategory.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if (!updateCategory) {
      res.status(404).json({
        message: "No tag found with this ID"
      });
    }
    res.json(200).json(updateCategory)
  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
});

router.delete('/:id', (req, res) => {
  try {
    // delete a category by its `id` value 
    const destroyCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!destroyCategory) {
      res.status(404).json({
        message: "No category found with this ID"
      });
    }
    res.status(200).json(destroyCategory)
  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
});

module.exports = router;