import { HeaderAction } from "@/components/header";
import { Button, Center, Flex, Image, Container, Text } from "@mantine/core";
import { useEffect, useState } from "react";

const links = [
  {
    link: "/about",
    label: "서비스 소개",
  },
  {
    link: "/pay",
    label: "결제하기",
  },
  {
    link: "/pricing",
    label: "Pricing",
  },
  {
    link: "support",
    label: "고객센터",
  },
];

export default function Home() {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    // 클라이언트 측에서만 이벤트 리스너를 추가하도록 조건을 검사합니다.
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const isSmallScreen = screenSize < 768; // Example breakpoint for small screens

  return (
    <div style={{ backgroundColor: "white", margin: "0px" }}>
      <HeaderAction links={links} />

      {isSmallScreen ? (
        <div className="smaller">
          <Center style={{ paddingTop: "100px" }}>
            <Container>
              <Center>
                <Flex direction={"column"} gap={"md"}>
                  <h1>도파민 디펜스!</h1>
                  <h1>한달 3000원!</h1>
                </Flex>
              </Center>
              <Image src="./img/iphone.png" width={"300px"} />
              <Center>
                <Flex direction={"column"} gap={"md"}></Flex>
              </Center>
            </Container>
          </Center>
        </div>
      ) : (
        <div className="larger">
          <Center style={{ paddingTop: "100px" }}>
            <Flex direction={"row"}>
              <Image src="./img/iphone.png" width={"300px"} />
              <Center>
                <h1>도파민 디펜스!</h1>
                <h1>한달 3000원!</h1>
              </Center>
            </Flex>
          </Center>
        </div>
      )}

      <div style={{ backgroundColor: "#AAFFAA", width: "100%" }}>
        <h1>회색</h1>
        <h1>회색</h1>
        <h1>회색</h1>
        <h1>회색</h1>
      </div>
      <div style={{ width: "100%" }}>
        <h1>흰색</h1>
        <h1>흰색</h1>
        <h1>흰색</h1>
        <h1>흰색</h1>
      </div>
      <div style={{ backgroundColor: "#AAFFAA", width: "100%" }}>
        <h1>회색</h1>
        <h1>회색</h1>
        <h1>회색</h1>
        <h1>회색</h1>
      </div>
      <div style={{ width: "100%" }}>
        <h1>흰색</h1>
        <h1>흰색</h1>
        <h1>흰색</h1>
        <h1>흰색</h1>
      </div>

      <Button>ㅋㅋ</Button>
    </div>
  );
}
