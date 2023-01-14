import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Button, Fab, FlatList, Pressable, Text } from "native-base";
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

  useEffect(() => {
    dispatch(fetchBlogPostsAction({}));
  }, []);

  useEffect(() => {
    if (listData) {
      setListData(listData.data);
    }
  }, [listData]);

  return (
    <>
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
          style={style.button}
          onPress={() => {
            navigation.navigate("Create");
            dispatch(setBlogEditState({ isEditing: false }));
          }}
          size={"lg"}
        >
          <MaterialCommunityIcons name="plus" color="white" size={25} />
        </Button>
      </Box>
    </>
  );
};

export default BlogPosts;
