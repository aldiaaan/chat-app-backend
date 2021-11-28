import { ValidationError } from '@/errors';
import firebaseAdmin from 'firebase-admin';

export const registerToTopic = (token: string, topic: string) => {
  if (!token) {
    throw new ValidationError([{ path: 'token', detail: 'token cannot be empty' }]);
  }
  return firebaseAdmin.messaging().subscribeToTopic(token, topic);
};

const removeUndefinedFields = (obj: any) =>
  Object.keys(obj).forEach((key) => (obj[key] === undefined ? delete obj[key] : {}));

export const sendMessageToTopic = (payload: any, topic: string) => {
  removeUndefinedFields(payload);

  return firebaseAdmin.messaging().send({
    data: payload,
    topic,
  });
};
