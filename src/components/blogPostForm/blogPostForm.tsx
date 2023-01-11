import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Button, Input, Select, Text, TextArea } from "native-base";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBlogEditAction } from "../../page/BlogEdit/store/slice";
import { fetchBlogCreateAction } from "../../page/BlogCreate/store/slice";
import { fetchBlogPostsAction } from "../../page/BlogPosts/store/slice";
import { style } from "../../style/global";
import { RootStackParamList } from "../navigation/navigationParams";

type Props = NativeStackScreenProps<RootStackParamList, "Create" | "Edit">;

export const BlogPostForm = ({ navigation, route }: Props) => {
  const detailsData = route.params?.data;

  const dispatch = useDispatch();
  const [formData, setData] = useState({});

  useEffect(() => {
    if (detailsData) {
      setData({ ...formData, id: detailsData.id });
    }
  }, [detailsData]);

  return (
    <Box p="5">
      <Text fontWeight={"bold"}>Title</Text>
      <Input
        defaultValue={detailsData?.title}
        style={style.boxContainer}
        fontSize={13}
        onChangeText={(value) => setData({ ...formData, title: value })}
        marginBottom={"5"}
      ></Input>
      <Text fontWeight={"bold"}>Type</Text>
      <Select
        defaultValue={detailsData?.type}
        style={style.boxContainer}
        fontSize={13}
        h={"auto"}
        onValueChange={(value) => {
          setData({ ...formData, type: value });
        }}
        marginBottom={"5"}
      >
        <Select.Item label="UX Research" value="UX Research" />
        <Select.Item label="Web Development" value="Web Development" />
        <Select.Item
          label="Cross Platform Development"
          value="Cross Platform Development"
        />
        <Select.Item label="UI Designing" value="UI Designing" />
        <Select.Item
          label="Frontend Development"
          value="Frontend Development"
        />
        <Select.Item label="Backend Development" value="Backend Development" />
      </Select>
      <Text fontWeight={"bold"}>Description</Text>
      <TextArea
        defaultValue={detailsData?.description}
        style={style.boxContainer}
        fontSize={13}
        autoCompleteType={undefined}
        h={"auto"}
        onChangeText={(value) => setData({ ...formData, description: value })}
        marginBottom={"5"}
      ></TextArea>
      <Button
        onPress={() => {
          if (detailsData) {
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
