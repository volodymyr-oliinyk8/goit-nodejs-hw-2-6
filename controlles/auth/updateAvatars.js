const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { User } = require("../../model");
const { Unauthorized } = require("http-errors");

const updateAvatars = async (req, res) => {
  const { path: tempDir, originalname } = req.file;
  const { _id } = req.user;
  try {
    const newImage = await Jimp.read(tempDir);
    newImage.resize(250, 250).writeAsync(tempDir);
    const newFileName = `${_id}${originalname}`;
    const uploadDir = path.join(
      __dirname,
      "../../",
      "public/avatars",
      newFileName
    );
    await fs.rename(tempDir, uploadDir);
    const result = await User.findByIdAndUpdate(_id, {
      avatarURL: uploadDir,
    });
    if (!result) {
      throw new Unauthorized("Not authorized");
    }
    res.status(200).json({
      status: "success",
      code: 200,
      avatarURL: uploadDir,
    });
  } catch (error) {
    await fs.unlink(tempDir);
    next(error);
  }
};

module.exports = updateAvatars;
