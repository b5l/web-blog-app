import React, { useRef } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  AlertDialog,
  Box,
  Button,
  FlatList,
  Pressable,
  Text,
} from "native-base";
import { Heading } from "native-base";
import { useEffect, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { RootStackParamList } from "../../components/navigation/navigationParams";
import { style } from "../../style/global";
import { blogPostsType } from "../../types/types";
import { setBlogEditState } from "../BlogEdit/store/slice";
import { getBlogPosts } from "./store/selectors";
import { fetchBlogPostsAction } from "./store/slice";

type Props = NativeStackScreenProps<RootStackParamList, "Posts">;

export const BlogPosts = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const listData = useSelector(getBlogPosts);

  const [data, setListData] = useState<blogPostsType[] | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);

  useEffect(() => {
    dispatch(fetchBlogPostsAction({}));
  }, []);

  useEffect(() => {
    if (listData) {
      setListData(listData.data);
    }
  }, [listData]);

  return (
    <Box style={style.pageContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("Details", { id: item.id })}
            style={style.boxContainer}
            borderRadius={8}
            p="5"
            m="5"
          >
            <Box>
              <Heading>{item.title}</Heading>
              <Text textAlign={"justify"}>{item.type}</Text>
            </Box>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        style={style.reverseButton}
        onPress={() => {
          navigation.navigate("Create");
          dispatch(setBlogEditState({ isEditing: false }));
        }}
        size={"lg"}
      >
        <MaterialCommunityIcons name="plus" color="white" size={25} />
      </Button>
      <Button
        colorScheme="danger"
        style={style.button}
        onPress={() => setIsOpen(!isOpen)}
        size={"lg"}
      >
        <MaterialCommunityIcons name="logout" color="white" size={25} />
      </Button>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Logout</AlertDialog.Header>
          <AlertDialog.Body>Are you sure?</AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
              >
                No
              </Button>
              <Button
                colorScheme="danger"
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                Yes
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Box>
  );
};

export default BlogPosts;
