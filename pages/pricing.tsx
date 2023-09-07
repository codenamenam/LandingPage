import { SimpleGrid, Box, Text } from "@mantine/core";

export default function Pricing() {
  return (
    <SimpleGrid
      cols={3}
      breakpoints={[{ maxWidth: "xs", cols: 1 }]}
      style={{ margin: "200px 100px 200px 100px" }}
    >
      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          textAlign: "center",
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          cursor: "pointer",

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[1],
          },
        })}
      >
        <Text style={{ fontSize: 24 }}>1개월</Text>
        <Text style={{ fontSize: 18, fontWeight: "", color: "gray" }}>
          <br />
        </Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>3000원</Text>
      </Box>
      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          textAlign: "center",
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          cursor: "pointer",

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[1],
          },
        })}
      >
        <Text style={{ fontSize: 24 }}>3개월</Text>
        <Text style={{ fontSize: 18, fontWeight: "", color: "gray" }}>
          {" "}
          9̶0̶0̶0̶원
        </Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>8000원</Text>
      </Box>
      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          textAlign: "center",
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          cursor: "pointer",

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[1],
          },
        })}
      >
        <Text style={{ fontSize: 24 }}>6개월</Text>
        <Text style={{ fontSize: 18, fontWeight: "", color: "gray" }}>
          1̶8̶0̶0̶0̶원
        </Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>15000원</Text>
      </Box>
    </SimpleGrid>
  );
}
