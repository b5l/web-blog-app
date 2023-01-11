import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AlertDialog, Box, Button, Heading, Text } from "native-base";
import { useEffect, useRef, useState } from "react";
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

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);

  useEffect(() => {
    dispatch(fetchBlogDetailsAction({ id: id }));
  }, []);

  const [data, setDetailsData] = useState<blogDetailsType>();

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
          {data?.type}
        </Heading>
        <Text fontSize="md" textAlign={"justify"}>
          {data?.description}
        </Text>
      </Box>
      <Button
        style={style.reverseButton}
        size={"lg"}
        onPress={() => {
          navigation.navigate("Edit", { edit: true, type: data?.type });
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
              <Button colorScheme="danger" onPress={onClose}>
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
