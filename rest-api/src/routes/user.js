import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

router.get('/', async (req, res) => {
    const users = await req.context.models.User.findAll();
    return res.send(users);
});
router.post('/', async (req, res) => {
    const user = await req.context.models.User.create({
        username: req.body.username
    });

    return res.send(user);
});


router.get('/:userId', async (req, res) => {
    const user = await req.context.models.User.findByPk(
        req.params.userId,
    );
    return res.send(user);
});
router.delete('/:userId', async (req, res) => {
    const result = await req.context.models.User.destroy({
        where: { id: req.params.userId },
    });

    return res.send(true);
});
// router.put('/:userId', (req, res) => {
//     return res.send(
//         `PUT HTTP method on user/${req.params.userId} resource`,
//     );
// });

export default router;