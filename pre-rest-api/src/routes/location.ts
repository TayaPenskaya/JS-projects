import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    console.log("GET");
    const locations = await req.context.findAll();
    return res.send(locations);
});
router.post('/', async (req, res) => {
    const location = await req.context.create({
        name: req.body.name,
        description: req.body.description,
        city: req.body.city,
        country: req.body.country,
        visited: req.body.visited
    });

    return res.send(location);
});

router.get('/:locationId', async (req, res) => {
    const location = await req.context.findByPk(
        req.params.locationId,
    );
    return res.send(location);
});
router.delete('/:locationId', async (req, res) => {
    await req.context.destroy({
        where: { id: req.params.locationId },
    });
    return res.send(true);
});

export default router;