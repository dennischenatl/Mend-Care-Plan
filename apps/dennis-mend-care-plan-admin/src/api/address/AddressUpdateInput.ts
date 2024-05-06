import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressUpdateInput = {
  city?: string | null;
  state?: string | null;
  userReference?: UserWhereUniqueInput | null;
  zipCode?: string | null;
};
