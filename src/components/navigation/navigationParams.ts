import { blogDetailsType } from "../../types/types";

export type RootStackParamList = {
  Login: undefined;
  Posts: undefined;
  Details: { id: number };
  New: undefined;
  Edit: { data: blogDetailsType | undefined };
};
