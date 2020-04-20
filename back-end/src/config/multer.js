import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  limits: { fieldSize: 25 * 1024 * 1024 },
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      console.log({ file, req });
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);
        console.log({ uoooooooFILE: file });
        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
