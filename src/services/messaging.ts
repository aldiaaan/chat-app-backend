import { ValidationError } from '@/errors';
import firebaseAdmin from 'firebase-admin';

const removeUndefinedFields = (obj: any) =>
  Object.keys(obj).forEach((key) => (obj[key] === undefined ? delete obj[key] : {}));

export const sendMessageToTopic = (payload: any, topic: string) => {
  removeUndefinedFields(payload);

  return firebaseAdmin.messaging().send({
    data: payload,
    topic,
  });
};
