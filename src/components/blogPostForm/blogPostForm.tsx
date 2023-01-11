import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Button, Input, Text, TextArea } from "native-base";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBlogEditAction } from "../../page/BlogEdit/store/slice";
import { fetchBlogCreateAction } from "../../page/BlogCreate/store/slice";
import { fetchBlogPostsAction } from "../../page/BlogPosts/store/slice";
import { style } from "../../style/global";
import { blogDetailsType } from "../../types/types";
import { RootStackParamList } from "../navigation/navigationParams";
import { CommonActions } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, "Create" | "Edit">;

export const BlogPostForm = ({ navigation, route }: Props) => {
  const detailsData = route.params?.data;

  const dispatch = useDispatch();
  const [details, setDetailsData] = useState<blogDetailsType | null>(null);
  const [formData, setData] = useState({});

  useEffect(() => {
    if (detailsData) {
      setDetailsData(detailsData);
      setData({ ...formData, id: detailsData.id });
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
          if (details) {
            dispatch(fetchBlogEditAction(formData));
          } else {
            dispatch(fetchBlogCreateAction(formData));
          }

          navigation.navigate("Posts");
          dispatch(fetchBlogPostsAction({}));
        }}
      >
        Save
      </Button>
    </Box>
  );
};
