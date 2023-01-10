import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Button, Input, Text, TextArea } from "native-base";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogDetails } from "../../page/BlogDetails/store/selectors";
import { style } from "../../style/global";
import { blogDetailsType } from "../../types/types";
import { RootStackParamList } from "../navigation/navigationParams";

type Props = NativeStackScreenProps<RootStackParamList, "New" | "Edit">;

export const BlogPostForm = ({ navigation, route }: Props) => {
  const detailsData = route.params?.data;

  const dispatch = useDispatch();
  const [details, setDetailsData] = useState<blogDetailsType | null>(null);
  const [formData, setData] = useState({});

  useEffect(() => {
    if (detailsData) {
      setDetailsData(detailsData);
    }
  }, [detailsData]);

  return (
    <Box p="5">
      <Text fontWeight={"bold"}>Title</Text>
      <Input
        value={details?.title}
        style={style.boxContainer}
        fontSize={13}
        onChangeText={(value) => setData({ ...formData, title: value })}
        marginBottom={"5"}
      ></Input>
      <Text fontWeight={"bold"}>Description(short)</Text>
      <TextArea
        value={details?.shortDescription}
        style={style.boxContainer}
        fontSize={13}
        autoCompleteType={undefined}
        h={"auto"}
        onChangeText={(value) =>
          setData({ ...formData, shortDescription: value })
        }
        marginBottom={"5"}
      ></TextArea>
      <Text fontWeight={"bold"}>Description(long)</Text>
      <TextArea
        value={details?.longDescription}
        style={style.boxContainer}
        fontSize={13}
        autoCompleteType={undefined}
        h={"auto"}
        onChangeText={(value) =>
          setData({ ...formData, longDescription: value })
        }
        marginBottom={"5"}
      ></TextArea>
      <Button
        onPress={() => {
          navigation.navigate("Posts");
          if (details) {
            // put
          } else {
            //post
          }
        }}
      >
        Save
      </Button>
    </Box>
  );
};
