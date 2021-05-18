const router = require('express').Router();
const {
  Tag,
  Product,
  ProductTag
} = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    // find all tags
    const allTagData = await Tag.findAll({
      // be sure to include its associated Product data 
      include: [{
        model: Product
      }]
    });
    res.status(200).json(allTagData)

  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try {
    // find a single tag by its `id`
    const tagData = await Tag.findByPk({
      // be sure to include its associated Product data 
      include: [{
        model: Product
      }]
    });

    if (!tagData) {
      res.status(404).json({
        message: "No tag found with this ID"
      });
    }
    res.status(200).json(tagData)

  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  try {
    // create a new tag
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag)
  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  try {
    // update a tag's name by its `id` value
    const updateTag = await Tag.update(req.body);

    if (!updateTag) {
      res.status(404).json({
        message: "No tag found with this ID"
      });
    }
    res.json(200).json(updateTag)
  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // delete on tag by its `id` value
    const destroyTag = await Tag.destroy(req.body);

    if (!destroyTag) {
      res.status(404).json({
        message: "No tag found with this ID"
      });
    }
    res.json(200).json(destroyTag)
  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
});

module.exports = router;