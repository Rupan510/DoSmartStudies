import React from "react";
import { TextInput, Button, Box, PasswordInput, Text } from "@mantine/core";
import { Auth } from "aws-amplify";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

interface IFormInput {
  username: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  async function signIn(data: IFormInput) {
    const { username, password } = data;
    try {
      const user = await Auth.signIn(username, password);
      console.log("user", user);
      if (user) {
        router.push("./home");
      }
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    try {
      signIn(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ maxWidth: 340 }} mx='auto' my='40px'>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete='false'>
        <TextInput
          id='username'
          withAsterisk
          label='Email'
          error={errors.username ? true : false}
          type='email'
          {...register("username", { required: true })}
        />
        <PasswordInput
          id='password'
          withAsterisk
          label='Password'
          error={errors.password ? true : false}
          {...register("password", { required: true })}
        />

        <Text>
          Read the Terms and Condition and Privacy Policy before you create
          account
        </Text>
        <br />
        <Button type='submit'>Login</Button>
      </form>
    </Box>
  );
};

export default Login;
