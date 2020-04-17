import path from 'path';
import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: pathParam } = req.file;

    const file = await File.create({
      name,
      path: pathParam,
    });
    return res.json({ file });
  }

  async show(req, res) {
    const { file } = req.params;

    const filePath = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'tmp',
      'uploads',
      file
    );

    return res.sendFile(filePath);
  }
}

export default new FileController();
