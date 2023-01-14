import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Box,
  Button,
  FormControl,
  Input,
  ScrollView,
  Select,
  Text,
  TextArea,
} from "native-base";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogEditAction } from "../../page/BlogEdit/store/slice";
import { fetchBlogCreateAction } from "../../page/BlogCreate/store/slice";
import { fetchBlogPostsAction } from "../../page/BlogPosts/store/slice";
import { style } from "../../style/global";
import { RootStackParamList } from "../navigation/navigationParams";
import { getBlogEdit } from "../../page/BlogEdit/store/selectors";
import { getBlogCreate } from "../../page/BlogCreate/store/selectors";

type Props = NativeStackScreenProps<RootStackParamList, "Create" | "Edit">;

export const BlogPostForm = ({ navigation, route }: Props) => {
  const dispatch = useDispatch();
  const createData = useSelector(getBlogCreate);
  const editData = useSelector(getBlogEdit);

  const [formData, setFormData] = useState<{}>();
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (editData.isEditing) {
      setFormData({ ...formData, id: editData.data.id });
    }
  }, [editData]);

  useEffect(() => {
    if (createData.isSuccessful || editData.isSuccessful) {
      navigation.navigate("Posts");
      dispatch(fetchBlogPostsAction({}));
      setTimeout(() => {
        setErrorMessage(false);
      }, 500);
    }
  }, [createData, editData]);

  return (
    <>
      <ScrollView>
        <Box p="5">
          <Text fontWeight={"bold"}>Title</Text>

          <FormControl isRequired isInvalid={errorMessage}>
            <Input
              defaultValue={editData.isEditing ? editData.data?.title : ""}
              style={style.boxContainer}
              fontSize={13}
              onChangeText={(value) =>
                setFormData({ ...formData, title: value })
              }
              marginBottom={"5"}
            ></Input>
          </FormControl>

          <Text fontWeight={"bold"}>Type</Text>

          <FormControl isRequired isInvalid={errorMessage}>
            <Select
              defaultValue={editData.isEditing ? editData.data?.type : ""}
              style={style.boxContainer}
              fontSize={13}
              h={"auto"}
              onValueChange={(value) => {
                setFormData({ ...formData, type: value });
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
              <Select.Item
                label="Backend Development"
                value="Backend Development"
              />
            </Select>
          </FormControl>

          <Text fontWeight={"bold"}>Description</Text>

          <FormControl isRequired isInvalid={errorMessage}>
            <TextArea
              defaultValue={
                editData.isEditing ? editData.data?.description : ""
              }
              style={style.boxContainer}
              fontSize={13}
              autoCompleteType={undefined}
              h={"auto"}
              onChangeText={(value) =>
                setFormData({ ...formData, description: value })
              }
              marginBottom={"5"}
            ></TextArea>
            <FormControl.ErrorMessage alignItems="center" marginBottom={"5"}>
              Failed! Try again!
            </FormControl.ErrorMessage>
          </FormControl>

          <Button
            isDisabled={!formData}
            onPress={() => {
              if (editData.isEditing) {
                dispatch(fetchBlogEditAction(formData));
              } else {
                dispatch(fetchBlogCreateAction(formData));
              }
              setTimeout(() => {
                setErrorMessage(true);
              }, 400);
            }}
          >
            Save
          </Button>
        </Box>
      </ScrollView>
    </>
  );
};
