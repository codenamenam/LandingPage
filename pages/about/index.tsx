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

// 사진 2장 + 도파민 디펜스 소개
export function Hello() {
  return (
    <Center>
      <MediaQuery largerThan={"md"} styles={{ width: "1060px" }}>
        <MediaQuery
          smallerThan={"md"}
          styles={{ width: "300px", marginTop: "30px" }}
        >
          <div>
            <Grid style={{ padding: "100px 0 100px 0" }} align="center">
              <Grid.Col md={6} orderMd={1} order={2} style={{ padding: "0px" }}>
                <MediaQuery
                  largerThan={"md"}
                  styles={{
                    alignContent: "flex-end",
                    width: "100%",
                    margin: "50px 0 50px 50px",
                  }}
                >
                  <MediaQuery
                    smallerThan={"md"}
                    styles={{
                      justifyContent: "flex-end",
                      alignContent: "flex-end",
                      width: "100%",
                    }}
                  >
                    <div>
                      <Image src="./img/first.png" />
                    </div>
                  </MediaQuery>
                </MediaQuery>
              </Grid.Col>
              <Grid.Col md={6} orderMd={2} order={1} style={{ padding: "0px" }}>
                <Flex direction={"column"} align={"center"}>
                  <MediaQuery largerThan={"md"} styles={{ fontSize: "35px" }}>
                    <MediaQuery
                      smallerThan={"md"}
                      styles={{ fontSize: "25px" }}
                    >
                      <Title style={{ margin: "0px" }}>
                        AI가 길러주는 문해력
                        <br />
                        매일 5분씩 도전하기.
                      </Title>
                    </MediaQuery>
                  </MediaQuery>

                  <MediaQuery
                    largerThan={"md"}
                    styles={{ width: "350px", margin: "10px" }}
                  >
                    <MediaQuery
                      smallerThan={"md"}
                      styles={{ width: "280px", margin: "10px 0 0 0" }}
                    >
                      <div>
                        <Image src={"./img/dd-logo.png"} />
                      </div>
                    </MediaQuery>
                  </MediaQuery>
                  <MediaQuery
                    smallerThan={"md"}
                    styles={{ margin: "20px 0 15px" }}
                  >
                    <MediaQuery largerThan={"md"} styles={{ margin: "20px" }}>
                      <Button>
                        <Text>지금 시작하기</Text>
                      </Button>
                    </MediaQuery>
                  </MediaQuery>
                </Flex>
              </Grid.Col>
            </Grid>
          </div>
        </MediaQuery>
      </MediaQuery>
    </Center>
  );
}

// 가장 빠르게 문해력 향상하는법.
export function SimpleHello() {
  return (
    <MediaQuery largerThan="md" styles={{ height: "500px" }}>
      <MediaQuery smallerThan="md" styles={{ height: "300px" }}>
        <Center style={{ backgroundColor: "rgb(250,250,250)" }}>
          <Flex direction={"column"} align={"center"}>
            <MediaQuery largerThan={"md"} styles={{ fontSize: "2em" }}>
              <MediaQuery smallerThan={"md"} styles={{ fontSize: "18px" }}>
                <Text>가장 빠르게 문해력 향상하는법</Text>
              </MediaQuery>
            </MediaQuery>

            <MediaQuery
              largerThan={"md"}
              styles={{ fontSize: "3em", margin: "20px" }}
            >
              <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
                <Title>독서나 신문이 아닌, 도파민 디펜스.</Title>
              </MediaQuery>
            </MediaQuery>

            <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
              <MediaQuery
                smallerThan={"md"}
                styles={{ fontSize: "30px", marginTop: "10px" }}
              >
                <Title>독서나 신문이 아닌,</Title>
              </MediaQuery>
            </MediaQuery>
            <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
              <MediaQuery smallerThan={"md"} styles={{ fontSize: "30px" }}>
                <Title>도파민 디펜스.</Title>
              </MediaQuery>
            </MediaQuery>
          </Flex>
        </Center>
      </MediaQuery>
    </MediaQuery>
  );
}

// 읽기 기능 소개
export function FunctionRead() {
  return (
    <MediaQuery largerThan="md" styles={{ height: "500px" }}>
      <MediaQuery smallerThan="md" styles={{ height: "300px" }}>
        <Center>
          <Grid
            style={{ padding: "100px 0 100px 0", width: "1060px" }}
            align="center"
          >
            <Grid.Col md={6} orderMd={1} order={2} style={{ padding: "0px" }}>
              <Flex direction={"column"} align={"flex-start"}>
                <Text
                  style={{
                    marginBottom: "20px",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  글 읽기
                </Text>
                <Title style={{ marginBottom: "20px", fontSize: "45px" }}>
                  쉽고 재미있는 글 읽기
                </Title>
                <Text style={{ fontSize: "25px" }}>
                  사전에 엄선된 지문을 매일 오전 8시에 보내드립니다.
                </Text>
              </Flex>
            </Grid.Col>
            <Grid.Col md={6} orderMd={2} order={1} style={{ padding: "0px" }}>
              <Flex direction={"column"} align={"flex-end"}>
                <Title style={{ margin: "0px", fontSize: "50px" }}>
                  사진 영역
                </Title>
              </Flex>
            </Grid.Col>
          </Grid>
        </Center>
      </MediaQuery>
    </MediaQuery>
  );
}

// 요약 기능 소개
export function FunctionSummary() {
  return (
    <MediaQuery largerThan="md" styles={{ height: "500px" }}>
      <MediaQuery smallerThan="md" styles={{ height: "300px" }}>
        <Center>
          <Grid
            style={{ padding: "100px 0 100px 0", width: "1060px" }}
            align="center"
          >
            <Grid.Col md={6} orderMd={1} order={2} style={{ padding: "0px" }}>
              <Flex direction={"column"} align={"flex-start"}>
                <Text
                  style={{
                    marginBottom: "20px",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  요약하기
                </Text>
                <Title style={{ marginBottom: "20px", fontSize: "45px" }}>
                  짧고 굵게! 핵심만 요약하기
                </Title>
                <Text style={{ fontSize: "25px" }}>
                  문장을 잘 이해하고 요약하는 과정에서 문해력이 길러집니다.
                </Text>
              </Flex>
            </Grid.Col>
            <Grid.Col md={6} orderMd={2} order={1} style={{ padding: "0px" }}>
              <Flex direction={"column"} align={"flex-end"}>
                <Title style={{ margin: "0px", fontSize: "50px" }}>
                  사진 영역
                </Title>
              </Flex>
            </Grid.Col>
          </Grid>
        </Center>
      </MediaQuery>
    </MediaQuery>
  );
}

// 채점 기능 소개
export function FunctionScoring() {
  return (
    <MediaQuery largerThan="md" styles={{ height: "500px" }}>
      <MediaQuery smallerThan="md" styles={{ height: "300px" }}>
        <Center>
          <Grid
            style={{ padding: "100px 0 100px 0", width: "1060px" }}
            align="center"
          >
            <Grid.Col md={6} orderMd={1} order={2} style={{ padding: "0px" }}>
              <Flex direction={"column"} align={"flex-start"}>
                <Text
                  style={{
                    marginBottom: "20px",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  채점하기
                </Text>
                <Title style={{ marginBottom: "20px", fontSize: "45px" }}>
                  AI 채점
                </Title>
                <Text style={{ fontSize: "25px" }}>
                  요약을 잘 했는지 평가받고 어떤 부분을 잘 했는지, <br />
                  못했는지 알게 됩니다.
                </Text>
              </Flex>
            </Grid.Col>
            <Grid.Col md={6} orderMd={2} order={1} style={{ padding: "0px" }}>
              <Flex direction={"column"} align={"flex-end"}>
                <Title style={{ margin: "0px", fontSize: "50px" }}>
                  사진 영역
                </Title>
              </Flex>
            </Grid.Col>
          </Grid>
        </Center>
      </MediaQuery>
    </MediaQuery>
  );
}

// 채점 세부
export function MoreInfoScoring() {
  return (
    <MediaQuery largerThan="md" styles={{ height: "500px" }}>
      <MediaQuery smallerThan="md" styles={{ height: "300px" }}>
        <Center style={{ backgroundColor: "rgb(250,250,250)" }}>
          <Grid
            style={{ padding: "100px 0 100px 0", width: "1060px" }}
            align="center"
          >
            <Grid.Col md={6} orderMd={1} order={2} style={{ padding: "0px" }}>
              <Flex direction={"column"} align={"center"}>
                <Title style={{ margin: "0px", fontSize: "50px" }}>
                  사진 슬라이드 영역
                </Title>
              </Flex>
            </Grid.Col>
            <Grid.Col md={6} orderMd={2} order={1} style={{ padding: "0px" }}>
              <Flex direction={"column"} align={"flex-start"}>
                <Text
                  style={{
                    marginBottom: "20px",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  고급 AI 기술 | 점수 제공 | 피드백 제공
                </Text>
                <Title style={{ marginBottom: "20px", fontSize: "45px" }}>
                  선생님보다 정확한 AI
                </Title>
                <Text style={{ fontSize: "25px" }}>
                  도파민 디펜스가 자체 개발한 AI로 채점해드립니다.
                </Text>
              </Flex>
            </Grid.Col>
          </Grid>
        </Center>
      </MediaQuery>
    </MediaQuery>
  );
}

// 레포트
export function Report() {
  return (
    <MediaQuery largerThan="md" styles={{ height: "500px" }}>
      <MediaQuery smallerThan="md" styles={{ height: "300px" }}>
        <Center>
          <Grid
            style={{ padding: "100px 0 100px 0", width: "1060px" }}
            align="center"
          >
            <Grid.Col md={6} orderMd={1} order={2} style={{ padding: "0px" }}>
              <Flex direction={"column"} align={"flex-start"}>
                <Text
                  style={{
                    marginBottom: "20px",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  레포트
                </Text>
                <Title style={{ marginBottom: "20px", fontSize: "45px" }}>
                  꼼꼼한 레포트
                </Title>
                <Text style={{ fontSize: "25px" }}>
                  점수, 피드백은 기본! 내가 전체에서 몇등인지, 며칠 째
                  참여중인지 동기부여도 해드립니다.
                </Text>
              </Flex>
            </Grid.Col>
            <Grid.Col md={6} orderMd={2} order={1} style={{ padding: "0px" }}>
              <Flex direction={"column"} align={"flex-end"}>
                <Title style={{ margin: "0px", fontSize: "50px" }}>
                  사진 영역
                </Title>
              </Flex>
            </Grid.Col>
          </Grid>
        </Center>
      </MediaQuery>
    </MediaQuery>
  );
}

// 레포트 세부
export function MoreInfoReport() {
  return (
    <MediaQuery largerThan="md" styles={{ height: "500px" }}>
      <MediaQuery smallerThan="md" styles={{ height: "300px" }}>
        <Center style={{ backgroundColor: "rgb(250,250,250)" }}>
          <Grid
            style={{ padding: "100px 0 100px 0", width: "1060px" }}
            align="center"
          >
            <Grid.Col md={6} orderMd={1} order={2} style={{ padding: "0px" }}>
              <Flex direction={"column"} align={"center"}>
                <Title style={{ margin: "0px", fontSize: "50px" }}>
                  사진 슬라이드 영역
                </Title>
              </Flex>
            </Grid.Col>
            <Grid.Col md={6} orderMd={2} order={1} style={{ padding: "0px" }}>
              <Flex direction={"column"} align={"flex-start"}>
                <Text
                  style={{
                    marginBottom: "20px",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  Beta
                </Text>
                <Text
                  style={{
                    marginBottom: "20px",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  일간 레포트 | 주간 레포트 | 월간 레포트
                </Text>
                <Title style={{ marginBottom: "20px", fontSize: "45px" }}>
                  꾸준히 받아보는 레포트
                </Title>
                <Text style={{ fontSize: "25px" }}>
                  꾸준히 참여할수록 쌓이는 데이터. 나의 참여 기록을
                  <br />
                  일별, 주별, 월별로 레포트로 한 눈에 확인할 수 있습니다.
                </Text>
              </Flex>
            </Grid.Col>
          </Grid>
        </Center>
      </MediaQuery>
    </MediaQuery>
  );
}

// 지표
export function Indicator() {
  return (
    <MediaQuery largerThan="md" styles={{ height: "500px" }}>
      <MediaQuery smallerThan="md" styles={{ height: "300px" }}>
        <Center>
          <div>
            <Center>
              <Title>이미 많은 사람들이 도파민 디펜스를 사용중입니다.</Title>
            </Center>
            <Grid style={{ maxWidth: "1060px" }}>
              <Grid.Col span={4}>
                <Center>
                  <Flex direction={"column"} align={"center"}>
                    <Title style={{ margin: "20px", fontSize: "35px" }}>
                      친구 수
                    </Title>
                    <Text style={{ fontSize: "20px" }}>1200명</Text>
                  </Flex>
                </Center>
              </Grid.Col>
              <Grid.Col span={4}>
                <Center>
                  <Flex direction={"column"} align={"center"}>
                    <Title style={{ margin: "20px", fontSize: "35px" }}>
                      누적 유료 결제자 수
                    </Title>
                    <Text style={{ fontSize: "20px" }}>142명</Text>
                  </Flex>
                </Center>
              </Grid.Col>
              <Grid.Col span={4}>
                <Center>
                  <Flex direction={"column"} align={"center"}>
                    <Title style={{ margin: "20px", fontSize: "35px" }}>
                      활성 사용자 수
                    </Title>
                    <Text style={{ fontSize: "20px" }}>97명</Text>
                  </Flex>
                </Center>
              </Grid.Col>
            </Grid>
          </div>
        </Center>
      </MediaQuery>
    </MediaQuery>
  );
}

// 리뷰
export function Review() {
  return (
    <MediaQuery largerThan="md" styles={{ height: "500px" }}>
      <MediaQuery smallerThan="md" styles={{ height: "300px" }}>
        <Center>
          <Grid style={{ width: "1060px" }}>
            <Grid.Col span={6}>
              <Center>
                <Flex direction={"column"} align={"center"}>
                  <Title style={{ margin: "20px", fontSize: "35px" }}>
                    별점 5점
                  </Title>
                </Flex>
              </Center>
            </Grid.Col>
            <Grid.Col span={6}>
              <Center>
                <Flex direction={"column"} align={"center"}>
                  <Title style={{ margin: "20px", fontSize: "35px" }}>
                    너무 유익해요
                  </Title>
                </Flex>
              </Center>
            </Grid.Col>
            <Grid.Col span={6}>
              <Center>
                <Flex direction={"column"} align={"center"}>
                  <Title style={{ margin: "20px", fontSize: "35px" }}>
                    좋아요
                  </Title>
                </Flex>
              </Center>
            </Grid.Col>
            <Grid.Col span={6}>
              <Center>
                <Flex direction={"column"} align={"center"}>
                  <Title style={{ margin: "20px", fontSize: "35px" }}>
                    재밌어요
                  </Title>
                </Flex>
              </Center>
            </Grid.Col>
          </Grid>
        </Center>
      </MediaQuery>
    </MediaQuery>
  );
}

// 다시 한번 안내
export function Bye() {
  return (
    <MediaQuery largerThan="md" styles={{ height: "500px" }}>
      <MediaQuery smallerThan="md" styles={{ height: "300px" }}>
        <Center style={{ backgroundColor: "rgb(250,250,250)", width: "100%" }}>
          <Flex
            direction={"column"}
            align={"center"}
            style={{ padding: "30px" }}
          >
            <Title style={{ marginBottom: "20px", fontSize: "45px" }}>
              오늘부터 시작하는 도파민 디펜스
            </Title>
            <Button>무료로 시작하기</Button>
          </Flex>
        </Center>
      </MediaQuery>
    </MediaQuery>
  );
}
export default function About() {
  return (
    <>
      <Hello />
      <SimpleHello />
      <FunctionRead />
      <FunctionSummary />
      <FunctionScoring />
      <MoreInfoScoring />
      <Report />
      <MoreInfoReport />
      <Indicator />
      <Review />
      <Bye />
    </>
  );
}
