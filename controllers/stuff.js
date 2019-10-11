const Thing = require('../models/thing');

exports.createThing = (req, res, next) => {
  const { title, description, imageUrl, price, userId } = req.body;
  const thing = new Thing({ title, description, imageUrl, price, userId });
  thing.save()
    .then((newThing) => {
      res.status(201).json({
        message: 'Post created successfully',
      })
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getThing = (req, res, next) => {
	Thing.findOne({ _id: req.params.id})
	.then((thing) => {
    res.status(200).json(thing);
  })
	.catch((error) => {
		res.status(404).json(error);
  });
};

exports.editThing = (req, res, next) => {
  console.log(req.params);
  const _id = req.params.id;
  const { title, description, imageUrl, price, userId } = req.body;
  const thing = new Thing({
    _id, title, description, imageUrl, price, userId
  });

	Thing.updateOne({ _id }, thing)
	.then(() => {
    res.status(201).json({
      message: 'Thing updated successfully'
    });
  })
	.catch((error) => {
		res.status(400).json(error);
  });
};

exports.deleteThing = (req, res, next) => {
	const _id = req.params.id;
	Thing.deleteOne({ _id }).then((thing) => {
    res.status(200).json({message: 'Deleted'});
  }).catch((error) => {
		res.status(400).json(error);
  });
};

exports.getThingById = (req, res, next) => {
  Thing.find()
    .then((things) => {
      res.status(200).json(things);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
}