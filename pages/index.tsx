import { HeaderAction } from "@/components/header";
import { Button, Center, Flex } from "@mantine/core";

const links = [
  {
    link: "/about",
    label: "Features",
  },
  {
    link: "#1",
    label: "Learn",
  },
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/pricing",
    label: "Pricing",
  },
  {
    link: "#2",
    label: "Support",
  },
];

export default function Home() {
  return (
    <div style={{ backgroundColor: "pink", margin: "0px" }}>
      <HeaderAction links={links} />
      <Center style={{ paddingTop: "60px" }}>
        <Flex direction={"column"}>
          <h1>아</h1>
          <h1>아</h1>
          <h1>아</h1>
          <h1>아</h1>
          <h1>아</h1>
          <h1>아</h1>
          <h1>아</h1>
          <h1>아</h1>
          <h1>아</h1>
          <h1>아</h1>
          <h1>아</h1>
          <h1>아</h1>
          <Button>ㅋㅋ</Button>
        </Flex>
      </Center>
    </div>
  );
}
