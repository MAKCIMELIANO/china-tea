import bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import createHttpError from 'http-errors';
import { Types } from 'mongoose';
import { AdminsCollection } from '../db/models/admin.js';
import { FIFTEEN_MINUTES, ONE_DAY } from '../constants/index.js';
import { SessionsCollection } from '../db/models/session.js';

export const loginAdmin = async (payload) => {
  const admin = await AdminsCollection.findOne({ email: payload.email });
  if (!admin) {
    throw createHttpError(401, 'Admin not found');
  }
  const isEqual = await bcrypt.compare(payload.password, admin.password);

  if (!isEqual) {
    throw createHttpError(401, 'Unauthorized');
  }

  await SessionsCollection.deleteOne({ userId: admin._id });

  const accessToken = randomBytes(30).toString('base64');
  const refreshToken = randomBytes(30).toString('base64');

  return await SessionsCollection.create({
    userId: admin._id,
    accessToken,
    refreshToken,
    accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MINUTES),
    refreshTokenValidUntil: new Date(Date.now() + ONE_DAY),
  });
};

export const logoutUser = async (sessionId) => {
  await SessionsCollection.deleteOne({ _id: new Types.ObjectId(sessionId) });
};
