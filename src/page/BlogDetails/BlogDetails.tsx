import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { RootStackParamList } from "../../components/navigation/navigationParams";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export const BlogDetails = ({ route, navigation }: Props) => {
  const { id } = route.params;
  return (
    <>
      <Text>BlogDetails</Text>
      <Button onPress={() => navigation.navigate("Edit", { id: id })}>
        <MaterialCommunityIcons
          name="application-edit-outline"
          color="black"
          size={20}
        ></MaterialCommunityIcons>
      </Button>
    </>
  );
};

export default BlogDetails;
