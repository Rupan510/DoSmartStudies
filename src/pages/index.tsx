import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Flex,
  Text,
} from "@mantine/core";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>doSmartStudy</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Box sx={{ minHeight: "100vh" }}>
        <BackgroundImage
          src='/manstudyingstudy_table.png'
          sx={{ minHeight: "100vh", backgroundSize: "cover" }}>
          <Flex>
            <Text color='cyan'>doSmartStudy</Text>
          </Flex>
          <Flex
            mih={50}
            gap='sm'
            justify='flex-end'
            align='flex-start'
            direction='row'
            wrap='wrap'>
            <Link href='/CreateAccount'>
              <Button>Create Account</Button>
            </Link>
            <Link href='/Login'>
              <Button>Login</Button>
            </Link>
          </Flex>
        </BackgroundImage>
      </Box>
    </>
  );
}