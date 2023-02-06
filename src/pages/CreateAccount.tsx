import React, { useState } from "react";
import { TextInput, Button, Box, PasswordInput, Text } from "@mantine/core";
import { Auth } from "aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";
import { useStripe } from "@stripe/react-stripe-js";

interface IFormInput {
  username: string;
  password: string;
  confirmPassword: string;
  code: string;
}

// main function
const CreateAccount = () => {
  const [code, setCode] = useState<boolean>(false);
  const stripe = useStripe();
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<IFormInput>();

  async function signUp(data: IFormInput): Promise<CognitoUser> {
    const { username, password } = data;
    try {
      const { user } = await Auth.signUp({
        username,
        password,
      });
      console.log(user);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async function confirmSignUp(data: IFormInput) {
    const { username, password, code } = data;
    try {
      await Auth.confirmSignUp(username, code);
      const amplifyUser = await Auth.signIn(username, password);
      console.log("successfully signedIn", amplifyUser);
      if (amplifyUser) {
        // router.push("/payment");

        await stripe?.redirectToCheckout({
          lineItems: [
            {
              price: "price_1MX5ylSCHrKntgUd6tiflUW9",
              quantity: 1,
            },
          ],
          mode: "subscription",
          successUrl: "http://localhost:3000/home",
          cancelUrl: "http://localhost:3000/CreateAccount",
        });
      }
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    try {
      if (code) {
        confirmSignUp(data);
      } else {
        await signUp(data);
        setCode(true);
      }
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
        <PasswordInput
          id='password'
          withAsterisk
          label='Confirm Password'
          error={errors.confirmPassword ? true : false}
          {...register("confirmPassword", {
            required: true,
            validate: (val: string) => {
              if (watch("password") != val) {
                return "Your passwords do no match";
              }
            },
          })}
        />
        <Text>
          Read the Terms and Condition and Privacy Policy before you create
          account
        </Text>
        {code && (
          <TextInput
            id='code'
            withAsterisk
            label='Code'
            error={errors.username ? true : false}
            {...register("code", { required: true })}
          />
        )}
        <br />
        <Button type='submit'>{code ? "Verify code" : "Create Account"}</Button>
      </form>
    </Box>
  );
};

export default CreateAccount;
