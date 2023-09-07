import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Image,
  rem,
  MediaQuery,
  Center,
  Flex,
} from "@mantine/core";

import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  footer: {
    paddingBottom: "12px",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan("md")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("md")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export function FooterLinks({ data }: FooterLinksProps) {
  const { classes } = useStyles();
  const router = useRouter();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => {
          event.preventDefault();
          router.push(link.link);
        }}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.afterFooter}>
        <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
          <Flex direction={"column"}>
            <Text color="dimmed" size="md">
              사업자등록번호: 747-35-01319 | 통신판매업 신고번호:
              2023-서울용산-1169 | 대표: 김선효
            </Text>
            <Text color="dimmed" size="md">
              상호명: 도파민디펜스 | 유선번호: 01055099750 주소: 서울특별시
              용산구 효창원로69길 42-3(효창동)
            </Text>
            <Text color="dimmed" size="md">
              © 2023 도파민 디펜스. All rights reserved.
            </Text>
          </Flex>
        </MediaQuery>
        <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
          <Flex direction={"column"}>
            <Text color="dimmed" size="12px">
              사업자등록번호: 747-35-01319
            </Text>
            <Text color="dimmed" size="12px">
              통신판매업 신고번호: 2023-서울용산-1169 | 대표: 김선효
            </Text>
            <Text color="dimmed" size="12px">
              상호명: 도파민디펜스 | 유선번호: 01055099750
            </Text>
            <Text color="dimmed" size="12px">
              주소: 서울특별시 용산구 효창원로69길 42-3(효창동)
            </Text>
            <Text color="dimmed" size="12px">
              © 2023 도파민 디펜스. All rights reserved.
            </Text>
          </Flex>
        </MediaQuery>
      </Container>
    </footer>
  );
}
