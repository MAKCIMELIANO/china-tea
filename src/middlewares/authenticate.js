import createHttpError from 'http-errors';
import { Types } from 'mongoose';
import { SessionsCollection } from '../db/models/session.js';

export const authenticate = async (req, res, next) => {
  const { sessionId } = req.cookies;

  if (!sessionId) {
    return next(createHttpError(401, 'Session cookie missing'));
  }

  const session = await SessionsCollection.findOne({
    _id: new Types.ObjectId(sessionId),
    accessTokenValidUntil: { $gt: new Date() },
  });

  if (!session) {
    return next(createHttpError(401, 'Session not found or expired'));
  }

  // Since sessions are only created for admins, this user is an admin
  req.user = { id: session.userId };

  next();
};
