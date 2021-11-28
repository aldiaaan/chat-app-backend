import cloudinary from 'cloudinary';
import streamifier from 'streamifier';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImageFromBuffer = (buffer: Buffer) =>
  new Promise((resolve, reject) => {
    let streamUploader = cloudinary.v2.uploader.upload_stream(
      {
        folder: 'assets',
      },
      (error: any, result: any) => {
        if (result) {
          resolve(result.secure_url);
        }
        if (error) {
          reject(error);
        }
      },
    );
    streamifier.createReadStream(buffer).pipe(streamUploader);
  });
