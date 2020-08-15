import { UserStatus, UserRole } from './enums';
import { Schema } from 'mongoose';
const { Types } = Schema;

export const UserSchema = new Schema(
  {
    name: { type: Types.String, required: true },
    email: { type: Types.String, required: true },
    status: {
      type: Types.String,
      required: true,
      enum: Object.values(UserStatus),
      default: UserStatus.new,
    },
    phone: { type: Types.String, required: true },
    role: {
      type: Types.String,
      required: true,
      enum: Object.values(UserRole),
      default: UserRole.user,
    },
  },

  { timestamps: true },
);

const USER_MODEL_NAME = 'User';
const USER_COLLECTION_NAME = 'iep-users';

export const UserDbParams = {
  schema: UserSchema,
  name: USER_MODEL_NAME,
  collection: USER_COLLECTION_NAME,
};
