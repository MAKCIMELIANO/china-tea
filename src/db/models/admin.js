import { model, Schema } from 'mongoose';

const adminsSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'admin' },
  },
  { timestamps: true, versionKey: false },
);

export const AdminsCollection = model('admins', adminsSchema);
