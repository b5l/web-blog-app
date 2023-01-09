import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Button, Fab, Heading, Icon, Text } from "native-base";
import { space } from "native-base/lib/typescript/theme/styled-system";
import { useEffect, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { RootStackParamList } from "../../components/navigation/navigationParams";
import { style } from "../../style/global";
import { blogDetailsType } from "../../types/types";
import { getBlogDetails } from "./store/selectors";
import { fetchBlogDetailsAction } from "./store/slice";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export const BlogDetails = ({ route, navigation }: Props) => {
  const { id } = route.params;
  const dispatch = useDispatch();
  const detailsData = useSelector(getBlogDetails);
  useEffect(() => {
    dispatch(fetchBlogDetailsAction({ id: id }));
  }, []);

  const [data, setDetailsData] = useState<blogDetailsType | null>(null);

  useEffect(() => {
    if (detailsData) {
      setDetailsData(detailsData.data);
    }
  }, [detailsData]);

  return (
    <>
      <Box p="5">
        <Heading textAlign={"justify"} marginBottom="5">
          {data?.title}
        </Heading>
        <Heading size="sm" marginBottom="5" textAlign={"justify"}>
          {data?.shortDescription}
        </Heading>
        <Text fontSize="md" textAlign={"justify"}>
          {data?.longDescription}
        </Text>
      </Box>
      <Button
        style={style.button}
        size={"lg"}
        onPress={() => navigation.navigate("Edit", { id: id })}
      >
        <MaterialCommunityIcons name="pencil" color="white" size={25} />
      </Button>
    </>
  );
};

export default BlogDetails;
