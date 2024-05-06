import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressCreateInput = {
  city?: string | null;
  state?: string | null;
  userReference?: UserWhereUniqueInput | null;
  zipCode?: string | null;
};
