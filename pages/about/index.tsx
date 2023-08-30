import {
  Button,
  Center,
  Flex,
  Image,
  Text,
  Grid,
  MediaQuery,
  Title,
} from "@mantine/core";

export default function About() {
  return (
    <>
      <Center>
        <div style={{ width: "64em" }}>
          <Grid style={{ paddingTop: "100px" }} align="center">
            <Grid.Col md={6} orderMd={1} order={2} style={{ padding: "0px" }}>
              <MediaQuery
                largerThan={"md"}
                styles={{ justifyContent: "flex-end" }}
              >
                <Flex justify={"center"}>
                  <Image src="./img/iphone.png" width={"300px"} />
                </Flex>
              </MediaQuery>
            </Grid.Col>
            <Grid.Col md={6} orderMd={2} order={1} style={{ padding: "0px" }}>
              <Flex direction={"column"} align={"center"}>
                <Title style={{ margin: "0px" }}>
                  AI가 도와주는 문해력 향상
                </Title>
                <Title style={{ margin: "0px" }}>하루 5분씩 꾸준히 도전!</Title>
                <Button style={{ margin: "30px" }}>지금 시작하기</Button>
              </Flex>
            </Grid.Col>
          </Grid>
        </div>
      </Center>

      <MediaQuery largerThan="md" styles={{ height: "500px" }}>
        <MediaQuery smallerThan="md" styles={{ height: "300px" }}>
          <Center style={{ backgroundColor: "rgb(250,250,250)" }}>
            <Flex
              direction={"column"}
              align={"center"}
              style={{ width: "64em", margin: "20px" }}
            >
              <Title style={{ margin: "20px", fontSize: "40px" }}>
                숏폼 컨텐츠의 유행! 도파민 중독!
              </Title>
              <Text style={{ fontSize: "20px" }}>
                연구 결과에 따르면 학생들이 숏폼 컨텐츠에 중독되어 문해력이 크게
                저하되었다고 합니다. 학생들은 긴 글을 잘 못읽고 국어 성적도 크게
                떨어지는 등 사회적으로 큰 문제가 되고 있습니다.
              </Text>
            </Flex>
          </Center>
        </MediaQuery>
      </MediaQuery>

      <MediaQuery largerThan="md" styles={{ height: "500px" }}>
        <MediaQuery smallerThan="md" styles={{ height: "300px" }}>
          <Center>
            <Grid style={{ width: "64em" }}>
              <Grid.Col span={4}>
                <Center>
                  <Flex direction={"column"} align={"center"}>
                    <Title>친구수</Title>
                    <Text>1200명</Text>
                  </Flex>
                </Center>
              </Grid.Col>
              <Grid.Col span={4}>
                <Center>
                  <Flex direction={"column"} align={"center"}>
                    <Title>누적 유료 결제자수 </Title>
                    <Text>142명</Text>
                  </Flex>
                </Center>
              </Grid.Col>
              <Grid.Col span={4}>
                <Center>
                  <Flex direction={"column"} align={"center"}>
                    <Title>활성 사용자 수 </Title>
                    <Text>97명</Text>
                  </Flex>
                </Center>
              </Grid.Col>
            </Grid>
          </Center>
        </MediaQuery>
      </MediaQuery>

      <MediaQuery largerThan="md" styles={{ height: "500px" }}>
        <MediaQuery smallerThan="md" styles={{ height: "300px" }}>
          <Center style={{ backgroundColor: "rgb(250,250,250)" }}>
            <Flex
              direction={"column"}
              align={"center"}
              style={{ padding: "30px" }}
            >
              <h1>사용하는 방법</h1>
              <Text>1. 요약 작성 2. 제출 3. 결과를 받아본다.</Text>
            </Flex>
          </Center>
        </MediaQuery>
      </MediaQuery>

      <MediaQuery largerThan="md" styles={{ height: "500px" }}>
        <MediaQuery smallerThan="md" styles={{ height: "300px" }}>
          <Center>
            <Flex
              direction={"column"}
              align={"center"}
              style={{ padding: "30px" }}
            >
              <h1>리뷰 영역</h1>
              <Text>A: 만족합니다!</Text>
              <Text>B: 너무 좋아요!</Text>
            </Flex>
          </Center>
        </MediaQuery>
      </MediaQuery>

      <MediaQuery largerThan="md" styles={{ height: "500px" }}>
        <MediaQuery smallerThan="md" styles={{ height: "300px" }}>
          <Center
            style={{ backgroundColor: "rgb(250,250,250)", width: "100%" }}
          >
            <Flex
              direction={"column"}
              align={"center"}
              style={{ padding: "30px" }}
            >
              <h1>오늘부터 시작해볼까요?</h1>
              <Button>무료로 시작하기</Button>
            </Flex>
          </Center>
        </MediaQuery>
      </MediaQuery>
    </>
  );
}
