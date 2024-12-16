import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const AddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <TextInput label="State" source="state" />
        <ReferenceInput
          source="userReference.id"
          reference="User"
          label="User Reference"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Zip Code" source="zipCode" />
      </SimpleForm>
    </Edit>
  );
};
