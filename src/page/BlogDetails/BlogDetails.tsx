import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  AlertDialog,
  Box,
  Button,
  Heading,
  ScrollView,
  Text,
} from "native-base";
import { useEffect, useRef, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { RootStackParamList } from "../../components/navigation/navigationParams";
import { style } from "../../style/global";
import { blogDetailsType } from "../../types/types";
import { getBlogDelete } from "../BlogDelete/store/selectors";
import { fetchBlogDeleteAction } from "../BlogDelete/store/slice";
import { setBlogEditState } from "../BlogEdit/store/slice";
import { fetchBlogPostsAction } from "../BlogPosts/store/slice";
import { getBlogDetails } from "./store/selectors";
import { fetchBlogDetailsAction } from "./store/slice";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export const BlogDetails = ({ route, navigation }: Props) => {
  const { id } = route.params;

  const dispatch = useDispatch();
  const detailsData = useSelector(getBlogDetails);

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);

  useEffect(() => {
    dispatch(fetchBlogDetailsAction({ id: id }));
  }, []);

  const [data, setDetailsData] = useState<blogDetailsType>();

  const deleteData = useSelector(getBlogDelete);

  useEffect(() => {
    if (detailsData) {
      setDetailsData(detailsData.data);
    }
  }, [detailsData]);

  useEffect(() => {
    if (deleteData.isDeleted) {
      dispatch(fetchBlogPostsAction({}));
      onClose();
      navigation.navigate("Posts");
    }
  }, [deleteData]);

  return (
    <>
      <ScrollView>
        <Box p="5">
          <Heading textAlign={"justify"} marginBottom="5">
            {data?.title}
          </Heading>
          <Heading size="sm" marginBottom="5" textAlign={"justify"}>
            {data?.type}
          </Heading>
          <Text fontSize="md" textAlign={"justify"}>
            {data?.description}
          </Text>
        </Box>
      </ScrollView>
      <Button
        style={style.reverseButton}
        size={"lg"}
        onPress={() => {
          dispatch(setBlogEditState({ data: data, isEditing: true }));
          navigation.navigate("Edit", { edit: true });
        }}
      >
        <MaterialCommunityIcons name="pencil" color="white" size={25} />
      </Button>
      <Button
        colorScheme="danger"
        style={style.button}
        onPress={() => setIsOpen(!isOpen)}
      >
        <MaterialCommunityIcons name="delete" color="white" size={27} />
      </Button>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Delete Blog post</AlertDialog.Header>
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
                onPress={() => dispatch(fetchBlogDeleteAction({ id: id }))}
              >
                Yes
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </>
  );
};

export default BlogDetails;
