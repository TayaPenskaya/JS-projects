import { Router } from 'express';

import Location from '../db';

const router = Router();

router.get('/', async (_, res) => {
  try {
    const locations = await Location.findAll();

    return res.status(200).send(locations);
  } catch (e) {
    return res.sendStatus(404);
  }
});

router.post('/', async (req, res) => {
  try {
    const location = await Location.create({
      name: req.body.name,
      description: req.body.description,
      city: req.body.city,
      country: req.body.country,
      visited: req.body.visited
    });

    return res.status(204).send(location);
  } catch (e) {
    return res.sendStatus(404);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.id);

    return location ? res.status(200).send(location) : res.sendStatus(404);
  } catch (e) {
    return res.sendStatus(404);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Location.destroy({
      where: { id: req.params.id }
    });

    return res.sendStatus(204);
  } catch (e) {
    return res.sendStatus(404);
  }
});

export default router;
