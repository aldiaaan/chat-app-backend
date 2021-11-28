import { NotAllowedMimeTypeError, ValidationError } from '@/errors';

import * as UploadService from '@/services/upload';

const ALLOWED_IMAGE_MIMETYPES = ['image/png', 'image/jpeg', 'image/gif'];

export const upload = async (req: any, res: any, next: any) => {
  try {
    if (!req.files) {
      throw new ValidationError([{ path: 'image', detail: 'image cannot be empty' }]);
    }

    const { buffer, mimetype } = req.files.image[0];

    if (!ALLOWED_IMAGE_MIMETYPES.includes(mimetype)) {
      throw new NotAllowedMimeTypeError();
    }

    const uploadedImageUrl = await UploadService.uploadImageFromBuffer(buffer);

    res.send({
      message: 'ok',
      result: {
        image_url: uploadedImageUrl,
      },
    });
  } catch (error) {
    next(error);
  }
};
