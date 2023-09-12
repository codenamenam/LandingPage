import {
  SimpleGrid,
  Title,
  Box,
  Text,
  MediaQuery,
  Center,
  Flex,
} from "@mantine/core";

import { Fade } from "react-awesome-reveal";

export default function Pricing() {
  return (
    <>
      <Fade>
        <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
          <Center styles={{ width: "1060px" }}>
            <Flex direction={"column"} style={{ margin: "100px 0 200px 0" }}>
              <Center>
                <Title size={50}>가격 안내</Title>
              </Center>
              <Flex direction={"row"} style={{ marginTop: "100px" }}>
                <Box
                  sx={(theme) => ({
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.gray[1],
                    textAlign: "center",
                    padding: theme.spacing.xl,
                    borderRadius: "20px",
                    cursor: "pointer",

                    "&:hover": {
                      backgroundColor:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[5]
                          : theme.colors.gray[2],
                    },
                  })}
                  style={{ width: "300px", margin: "5px" }}
                >
                  <Text style={{ fontSize: 24 }}>1개월</Text>
                  <Text style={{ fontSize: 18, fontWeight: "", color: "gray" }}>
                    <br />
                  </Text>
                  <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                    3000원
                  </Text>
                </Box>
                <Box
                  sx={(theme) => ({
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.gray[1],
                    textAlign: "center",
                    padding: theme.spacing.xl,
                    borderRadius: "20px",
                    cursor: "pointer",

                    "&:hover": {
                      backgroundColor:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[5]
                          : theme.colors.gray[2],
                    },
                  })}
                  style={{ width: "300px", margin: "5px" }}
                >
                  <Text style={{ fontSize: 24 }}>3개월</Text>
                  <Text style={{ fontSize: 18, fontWeight: "", color: "gray" }}>
                    {" "}
                    9̶0̶0̶0̶원
                  </Text>
                  <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                    8000원
                  </Text>
                </Box>
                <Box
                  sx={(theme) => ({
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.gray[1],
                    textAlign: "center",
                    padding: theme.spacing.xl,
                    borderRadius: "20px",
                    cursor: "pointer",

                    "&:hover": {
                      backgroundColor:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[5]
                          : theme.colors.gray[2],
                    },
                  })}
                  style={{ width: "300px", margin: "5px" }}
                >
                  <Text style={{ fontSize: 24 }}>6개월</Text>
                  <Text style={{ fontSize: 18, fontWeight: "", color: "gray" }}>
                    1̶8̶0̶0̶0̶원
                  </Text>
                  <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                    15000원
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Center>
        </MediaQuery>

        <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
          <Center styles={{ width: "350px" }}>
            <Flex direction={"column"} style={{ margin: "50px 0 150px 0" }}>
              <Center>
                <Title size={40}>가격 안내</Title>
              </Center>
              <Flex direction={"column"} style={{ marginTop: "50px" }}>
                <Box
                  sx={(theme) => ({
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.gray[1],
                    textAlign: "center",
                    padding: theme.spacing.xl,
                    borderRadius: "20px",
                    cursor: "pointer",

                    "&:hover": {
                      backgroundColor:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[5]
                          : theme.colors.gray[2],
                    },
                  })}
                  style={{ width: "300px", margin: "5px" }}
                >
                  <Text style={{ fontSize: 24 }}>1개월</Text>
                  <Text style={{ fontSize: 18, fontWeight: "", color: "gray" }}>
                    <br />
                  </Text>
                  <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                    3000원
                  </Text>
                </Box>
                <Box
                  sx={(theme) => ({
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.gray[1],
                    textAlign: "center",
                    padding: theme.spacing.xl,
                    borderRadius: "20px",
                    cursor: "pointer",

                    "&:hover": {
                      backgroundColor:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[5]
                          : theme.colors.gray[2],
                    },
                  })}
                  style={{ width: "300px", margin: "5px" }}
                >
                  <Text style={{ fontSize: 24 }}>3개월</Text>
                  <Text style={{ fontSize: 18, fontWeight: "", color: "gray" }}>
                    {" "}
                    9̶0̶0̶0̶원
                  </Text>
                  <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                    8000원
                  </Text>
                </Box>
                <Box
                  sx={(theme) => ({
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.gray[1],
                    textAlign: "center",
                    padding: theme.spacing.xl,
                    borderRadius: "20px",
                    cursor: "pointer",

                    "&:hover": {
                      backgroundColor:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[5]
                          : theme.colors.gray[2],
                    },
                  })}
                  style={{ width: "300px", margin: "5px" }}
                >
                  <Text style={{ fontSize: 24 }}>6개월</Text>
                  <Text style={{ fontSize: 18, fontWeight: "", color: "gray" }}>
                    1̶8̶0̶0̶0̶원
                  </Text>
                  <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                    15000원
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Center>
        </MediaQuery>
      </Fade>
    </>
  );
}
