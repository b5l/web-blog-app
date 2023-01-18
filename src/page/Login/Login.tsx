import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Box,
  FormControl,
  Stack,
  Button,
  Text,
  Input,
  Link,
} from "native-base";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStackParamList } from "../../components/navigation/navigationParams";
import { loginStyle } from "../../style/login";
import { getLogin } from "./store/selectors";
import { fetchLoginAction } from "./store/slice";
import { loginSignUpType } from "../../types/types";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export const LoginPage = ({ navigation }: Props) => {
  const dispatch = useDispatch();

  const [formData, setData] = useState<loginSignUpType>();
  const [errorMessage, setErrorMessage] = useState(false);

  const auth = useSelector(getLogin);

  useEffect(() => {
    if (auth.isAuth) {
      navigation.navigate("Posts");
      setTimeout(() => {
        setErrorMessage(false);
      }, 500);
    }
  }, [auth]);

  return (
    <Box style={loginStyle.container}>
      <Text fontSize="4xl" style={loginStyle.loginText}>
        Login
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
          <Stack mx="10">
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              placeholder="password"
              onChangeText={(value) =>
                setData({ ...formData, password: value })
              }
            />
          </Stack>
          <FormControl.ErrorMessage alignItems="center">
            Login Failed! Try again!
          </FormControl.ErrorMessage>
        </FormControl>
        <Button
          colorScheme="primary"
          shadow={10}
          style={loginStyle.loginButton}
          mt={"6"}
          onPress={() => {
            dispatch(fetchLoginAction(formData));
            setTimeout(() => {
              setErrorMessage(true);
            }, 400);
          }}
        >
          Login
        </Button>
        <Link
          mt={"0.5"}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          Sign up
        </Link>
      </Box>
    </Box>
  );
};

export default LoginPage;
