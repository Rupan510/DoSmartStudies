/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import React, { useState } from "react";
// import "./navbar.css";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";
import { IconMenu2 } from '@tabler/icons';

// import { NavLink } from "react-router-dom";


const NavHeader = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>D</span>o
            <span>S</span>mart
            <span>S</span>tudies
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/preperation">PREPERATION</Link>
            </li>
            <li>
              <Link href="/syllabus">SYLLABUS</Link>
            </li>
            <li>
              <Link href="/timer">TIMER</Link>
            </li>
            <li>
              <Link href="/analysis">ANALYSIS</Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href=""
                target="">
                <IconMenu2 />
              </a>
            </li>
            <li>
              <a
                href=""
                target="">
                <IconMenu2 />
              </a>
            </li>
            <li>
              <a
                href=""
                target="">
                <IconMenu2 />
              </a>
            </li>
          </ul>

          
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <IconMenu2 />
            </a>
          </div>
        </div>
      </nav>

      
    </>
  );
};

export default NavHeader;



// import { useState } from "react";
// import {
//   createStyles,
//   Header,
//   Container,
//   Group,
//   Burger,
//   Paper,
//   Transition,
//   Text,
// } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
// import * as data from "./attibutes.json";
// import Link from "next/link";

// const linkString = JSON.stringify(data);
// const links = JSON.parse(linkString).links;

// const HEADER_HEIGHT = 60;

// const useStyles = createStyles((theme) => ({
//   root: {
//     position: "relative",
//     zIndex: 1,
//   },

//   dropdown: {
//     position: "absolute",
//     top: HEADER_HEIGHT,
//     left: 0,
//     right: 0,
//     zIndex: 0,
//     borderTopRightRadius: 0,
//     borderTopLeftRadius: 0,
//     borderTopWidth: 0,
//     overflow: "hidden",

//     [theme.fn.largerThan("sm")]: {
//       display: "none",
//     },
//   },

//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     height: "100%",
//   },

//   links: {
//     [theme.fn.smallerThan("sm")]: {
//       display: "none",
//     },
//   },

//   burger: {
//     [theme.fn.largerThan("sm")]: {
//       display: "none",
//     },
//   },

//   link: {
//     display: "block",
//     lineHeight: 1,
//     padding: "8px 12px",
//     borderRadius: theme.radius.sm,
//     textDecoration: "none",
//     color:
//       theme.colorScheme === "dark"
//         ? theme.colors.dark[0]
//         : theme.colors.gray[7],
//     fontSize: theme.fontSizes.sm,
//     fontWeight: 500,

//     "&:hover": {
//       backgroundColor:
//         theme.colorScheme === "dark"
//           ? theme.colors.dark[6]
//           : theme.colors.gray[0],
//     },

//     [theme.fn.smallerThan("sm")]: {
//       borderRadius: 0,
//       padding: theme.spacing.md,
//     },
//   },

//   linkActive: {
//     "&, &:hover": {
//       backgroundColor: theme.fn.variant({
//         variant: "light",
//         color: theme.primaryColor,
//       }).background,
//       color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
//         .color,
//     },
//   },
// }));

// type Links = {
//   link: string;
//   label: string;
// };

// export function NavHeader() {
//   const [opened, { toggle, close }] = useDisclosure(false);
//   const [active, setActive] = useState(links[0].link);
//   const { classes, cx } = useStyles();

//   const items = links.map((link: Links) => (
//     <Link
//       key={link.label}
//       href={link.link}
//       className={cx(classes.link, {
//         [classes.linkActive]: active === link.link,
//       })}
//       onClick={() => {
//         try {
//           setActive(link.link);
//           close();
//         } catch (error) {
//           console.log(error);
//         }
//       }}>
//       {link.label}
//     </Link>
//   ));

//   return (
//     <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
//       <Container className={classes.header}>
//         <Text>doSmartStudy</Text>
//         <Group spacing={5} className={classes.links}>
//           {items}
//         </Group>

//         <Burger
//           opened={opened}
//           onClick={toggle}
//           className={classes.burger}
//           size='sm'
//         />

//         <Transition transition='pop-top-right' duration={200} mounted={opened}>
//           {(styles) => (
//             <Paper className={classes.dropdown} withBorder style={styles}>
//               {items}
//             </Paper>
//           )}
//         </Transition>
//       </Container>
//     </Header>
//   );
// }


