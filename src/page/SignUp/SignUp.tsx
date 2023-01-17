import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Box,
  Button,
  FormControl,
  Input,
  Link,
  Stack,
  Text,
} from "native-base";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStackParamList } from "../../components/navigation/navigationParams";
import { loginStyle } from "../../style/login";
import { loginSignUpType } from "../../types/types";
import { getSignUp } from "./store/selectors";
import { fetchSignUpAction } from "./store/slice";

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;

export const SignUp = ({ navigation }: Props) => {
  const dispatch = useDispatch();

  const [formData, setData] = useState<loginSignUpType>();
  const [repeatPassword, setRepeatPassword] = useState<string>();
  const [disable, setDisable] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [userTaken, setUserTaken] = useState(false);

  const signUp = useSelector(getSignUp);

  useEffect(() => {
    if (signUp.isSuccessful) {
      navigation.navigate("Posts");
      setTimeout(() => {
        setErrorMessage(false);
      }, 500);
    }
  }, [signUp]);

  useEffect(() => {
    if (repeatPassword !== formData?.password) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [repeatPassword, formData]);

  return (
    <Box style={loginStyle.container}>
      <Text fontSize="4xl" style={loginStyle.loginText}>
        Sign Up
      </Text>
      <Box style={loginStyle.inputContainer} m="15">
        <FormControl isRequired isInvalid={errorMessage}>
          <Stack mx="10" mb="2">
            <FormControl.Label>Username</FormControl.Label>
            <Input
              type="text"
              placeholder="username"
              onChangeText={(value) =>
                setData({ ...formData, username: value })
              }
            />
          </Stack>
        </FormControl>
        <FormControl isRequired isInvalid={errorMessage}>
          <Stack mx="10" mb="2">
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              placeholder="passsword"
              onChangeText={(value) =>
                setData({ ...formData, password: value })
              }
            />
          </Stack>
        </FormControl>
        <FormControl isRequired isInvalid={errorMessage}>
          <Stack mx="10">
            <FormControl.Label>Repeat password</FormControl.Label>
            <Input
              type="password"
              placeholder="repeat password"
              onChangeText={(value) => setRepeatPassword(value)}
            />
          </Stack>
          <FormControl.ErrorMessage alignItems="center">
            Sign up Failed!
          </FormControl.ErrorMessage>
          {userTaken ? (
            <FormControl.ErrorMessage alignItems="center">
              Username is taken! Choose another!
            </FormControl.ErrorMessage>
          ) : null}
        </FormControl>
        <Button
          colorScheme="primary"
          shadow={10}
          style={loginStyle.loginButton}
          mt={"6"}
          isDisabled={disable}
          onPress={() => {
            dispatch(fetchSignUpAction(formData));
            setTimeout(() => {
              setErrorMessage(true);
              setUserTaken(true);
            }, 400);
          }}
        >
          Sign Up
        </Button>
        <Link
          mt={"0.5"}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Login
        </Link>
      </Box>
    </Box>
  );
};

export default SignUp;
