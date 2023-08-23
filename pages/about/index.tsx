import {
  Button,
  Center,
  Flex,
  Image,
  Text,
  Grid,
  MediaQuery,
} from "@mantine/core";

export default function About() {
  return (
    <>
      <Grid style={{ padding: "100px" }} align="center">
        <Grid.Col sm={6} orderSm={1} order={2}>
          <MediaQuery largerThan={"sm"} styles={{ justifyContent: "flex-end" }}>
            <Flex justify={"center"}>
              <Image src="./img/iphone.png" width={"300px"} />
            </Flex>
          </MediaQuery>
        </Grid.Col>
        <Grid.Col sm={6} orderSm={2} order={1}>
          <Flex direction={"column"} align={"center"}>
            <h1 style={{ margin: "0px" }}>도파민 디펜스</h1>
            <h1 style={{ margin: "0px" }}>한 달에 3000원! </h1>
            <Button style={{ margin: "30px" }}>지금 시작하기</Button>
          </Flex>
        </Grid.Col>
      </Grid>

      <div style={{ backgroundColor: "rgb(250,250,250)", width: "100%" }}>
        <Center>
          <Flex
            direction={"column"}
            align={"center"}
            style={{ padding: "30px" }}
          >
            <h1>숏폼 컨텐츠의 유행! 도파민 중독!</h1>
            <Text>
              연구 결과에 따르면 학생들이 숏폼 컨텐츠에 중독되어 문해력이 크게
              저하되었다고 합니다. 학생들은 긴 글을 잘 못읽고 국어 성적도 크게
              떨어지는 등 사회적으로 큰 문제가 되고 있습니다.
            </Text>
            <h3>여러분은 어떻게 하시겠습니까?</h3>
          </Flex>
        </Center>
      </div>

      <div>
        <Center>
          <h1>폼 미쳤다!</h1>
        </Center>
        <Grid>
          <Grid.Col span={4}>
            <Center>
              <Flex direction={"column"}>
                <h1>친구수</h1>
                <h1>1200명</h1>
              </Flex>
            </Center>
          </Grid.Col>
          <Grid.Col span={4}>
            <Center>
              <Flex direction={"column"}>
                <h1>누적 유료 결제자수 </h1>
                <h1>142명</h1>
              </Flex>
            </Center>
          </Grid.Col>
          <Grid.Col span={4}>
            <Center>
              <Flex direction={"column"}>
                <h1>활성 사용자 수 </h1>
                <h1>97명</h1>
              </Flex>
            </Center>
          </Grid.Col>
        </Grid>
      </div>

      <div style={{ backgroundColor: "rgb(250,250,250)", width: "100%" }}>
        <Center>
          <Flex
            direction={"column"}
            align={"center"}
            style={{ padding: "30px" }}
          >
            <h1>사용하는 방법</h1>
            <Text>1. 요약 작성 2. 제출 3. 결과를 받아본다.</Text>
          </Flex>
        </Center>
      </div>
      <div style={{ width: "100%" }}>
        <Center>
          <Flex
            direction={"column"}
            align={"center"}
            style={{ padding: "30px" }}
          >
            <h1>사용자들의 생생한 간증</h1>
            <Text>A: 만족합니다!</Text>
            <Text>B: 너무 좋아요!</Text>
          </Flex>
        </Center>
      </div>
      <div style={{ backgroundColor: "rgb(250,250,250)", width: "100%" }}>
        <Center>
          <Flex
            direction={"column"}
            align={"center"}
            style={{ padding: "30px" }}
          >
            <h1>오늘부터 시작해보는건 어떨까요?</h1>
            <Text>무료체험부터 체험해봅시다.</Text>
            <Button>지금 시작하기</Button>
          </Flex>
        </Center>
      </div>
    </>
  );
}
