import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Box,
  FormControl,
  Input,
  Stack,
  Button,
  Text,
  Spacer,
} from "native-base";
import { RootStackParamList } from "../../components/navigation/navigationParams";
import { styles } from "../../style/global";
import { loginStyle } from "../../style/login";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export const LoginPage = ({ navigation }: Props) => {
  return (
    <>
      <Box style={styles.container}>
        <Text fontSize="4xl" style={loginStyle.loginText}>
          Login
        </Text>
        <Box style={loginStyle.loginContainer} m="15">
          <FormControl isRequired>
            <Stack mx="10" mb="2">
              <FormControl.Label>Username</FormControl.Label>
              <Input type="text" placeholder="username" />
            </Stack>
          </FormControl>
          <FormControl isRequired>
            <Stack mx="10">
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" placeholder="password" />
            </Stack>
          </FormControl>
          <Spacer />
          <Button
            colorScheme="primary"
            shadow={10}
            style={loginStyle.loginButton}
            onPress={() => navigation.navigate("Posts")}
          >
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
