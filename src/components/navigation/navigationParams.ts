import { blogDetailsType } from "../../types/types";

export type RootStackParamList = {
  Login: undefined;
  Posts: undefined;
  Details: { id: number };
  Create: undefined;
  Edit: { edit: boolean; type: string | undefined };
};
