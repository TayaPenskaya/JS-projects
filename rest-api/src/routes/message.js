import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

router.get('/', async (req, res) => {
    const messages = await req.context.models.Message.findAll();
    return res.send(messages);
});
router.post('/', async (req, res) => {
    const message = await req.context.models.Message.create({
        text: req.body.text,
        userId: req.context.me.id,
    });

    return res.send(message);
});
// router.post('/', (req, res) => {
//     const id = uuidv4();
//     const message = {
//         id,
//         text: req.body.text,
//         userId: req.context.me.id,
//     };
//     req.context.models.messages[id] = message;
//     return res.send(message);
// });

router.get('/:messageId', async (req, res) => {
    const message = await req.context.models.Message.findByPk(
        req.params.messageId,
    );
    return res.send(message);
});
router.delete('/:messageId', async (req, res) => {
    const result = await req.context.models.Message.destroy({
        where: { id: req.params.messageId },
    });

    return res.send(true);
});

export default router;