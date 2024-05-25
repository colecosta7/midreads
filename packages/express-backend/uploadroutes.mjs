import express from 'express';
import upload from './routes/uploadconfig.mjs';
import userModel from './models/user.mjs';

const router = express.Router();

router.post('/uploadPhoto', upload.single('photo'), async (req, res) => {
    const { uid } = req.body;
    const photoPath = req.file.path;

    try {
        const user = await userModel.findOneAndUpdate({ uid: uid }, { photo: photoPath }, { new: true });
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        res.send({ message: 'Photo uploaded successfully', photo: user.photo });
    } catch (error) {
        res.status(500).send({ error: 'Error uploading photo' });
    }
});

router.get('/getUserPhoto', async (req, res) => {
    const uid = req.query.uid;
    try {
        const user = await userModel.findOne({ uid: uid });
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        res.send({ photo: user.photo });
    } catch (error) {
        res.status(500).send({ error: 'Error retrieving user photo' });
    }
});

export default router;
