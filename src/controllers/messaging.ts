import { RegisterTokenError } from '@/errors';
import * as MessagingService from '@/services/messaging';

const DEFAULT_TOPIC_ID = 'default';

export const send = async (req: any, res: any, next: any) => {
  try {
    const payload = {
      message: req.body.message || '',
      image: req.body.image,
      sender: req.body.sender,
    };

    await MessagingService.sendMessageToTopic(payload, DEFAULT_TOPIC_ID);

    res.status(200).send({
      message: 'ok',
      result: {},
    });
  } catch (error) {
    next(error);
  }
};
