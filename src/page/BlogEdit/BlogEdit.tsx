import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text } from "native-base";
import { RootStackParamList } from "../../components/navigation/navigationParams";

type Props = NativeStackScreenProps<RootStackParamList, "Edit">;

export const BlogEdit = ({ navigation, route }: Props) => {
  const { id } = route.params;
  return (
    <>
      <Button onPress={() => navigation.navigate("Posts")}>Save</Button>
    </>
  );
};

export default BlogEdit;
