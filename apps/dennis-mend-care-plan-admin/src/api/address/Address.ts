import { User } from "../user/User";

export type Address = {
  city: string | null;
  createdAt: Date;
  id: string;
  state: string | null;
  updatedAt: Date;
  userReference?: User | null;
  zipCode: string | null;
};
