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
import { Demo } from "../../components/slide";

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
              <Grid.Col
                md={6}
                orderMd={1}
                order={2}
                style={{
                  padding: "0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MediaQuery
                  largerThan={"md"}
                  styles={{
                    alignContent: "center",
                    width: "100%",
                    margin: "50px 0 50px 50px",
                  }}
                >
                  <MediaQuery
                    smallerThan={"md"}
                    styles={{
                      justifyContent: "center",
                      alignContent: "center",
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
    <Center>
      <MediaQuery largerThan={"md"} styles={{ width: "1060px" }}>
        <MediaQuery
          smallerThan={"md"}
          styles={{ width: "300px", marginTop: "30px" }}
        >
          <div>
            <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
              <Grid
                style={{
                  padding: "100px 0 100px 0",
                }}
                align="center"
              >
                <Grid.Col
                  md={6}
                  orderMd={1}
                  order={2}
                  style={{
                    padding: "0px",
                  }}
                >
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
                <Grid.Col
                  md={6}
                  orderMd={2}
                  order={1}
                  style={{
                    padding: "0px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MediaQuery
                    largerThan={"md"}
                    styles={{
                      alignContent: "center",
                      width: "100%",
                      height: "700px",
                    }}
                  >
                    <MediaQuery
                      smallerThan={"md"}
                      styles={{
                        justifyContent: "center",
                        alignContent: "center",
                        width: "100%",
                        height: "370px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src="./img/Read.png" height={"100%"} />
                      </div>
                    </MediaQuery>
                  </MediaQuery>
                </Grid.Col>
              </Grid>
            </MediaQuery>

            <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
              <Grid
                style={{
                  padding: "50px 0 50px 0",
                }}
                align="center"
              >
                <Grid.Col md={12}>
                  <Flex direction={"column"} align={"center"}>
                    <Text
                      style={{
                        marginBottom: "5px",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      글 읽기
                    </Text>
                    <Title
                      style={{
                        marginBottom: "5px",
                        fontSize: "30px",
                      }}
                    >
                      쉽고 재미있는 글 읽기
                    </Title>
                  </Flex>
                </Grid.Col>
                <Grid.Col md={12}>
                  <MediaQuery
                    largerThan={"md"}
                    styles={{
                      alignContent: "center",
                      width: "100%",
                      height: "700px",
                    }}
                  >
                    <MediaQuery
                      smallerThan={"md"}
                      styles={{
                        justifyContent: "center",
                        alignContent: "center",
                        width: "100%",
                        height: "370px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src="./img/Read.png" height={"100%"} />
                      </div>
                    </MediaQuery>
                  </MediaQuery>
                </Grid.Col>
                <Grid.Col md={12}>
                  <Flex direction={"column"} align={"center"}>
                    <Text style={{ fontSize: "14px", marginTop: "5px" }}>
                      사전에 엄선된 지문을
                    </Text>
                    <Text style={{ fontSize: "14px" }}>
                      매일 오전 8시에 보내드립니다.
                    </Text>
                  </Flex>
                </Grid.Col>
              </Grid>
            </MediaQuery>
          </div>
        </MediaQuery>
      </MediaQuery>
    </Center>
  );
}

// 요약 기능 소개
export function FunctionSummary() {
  return (
    <Center>
      <MediaQuery largerThan={"md"} styles={{ width: "1060px" }}>
        <MediaQuery
          smallerThan={"md"}
          styles={{ width: "300px", marginTop: "30px" }}
        >
          <div>
            <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
              <Grid
                style={{
                  padding: "100px 0 100px 0",
                }}
                align="center"
              >
                <Grid.Col
                  md={6}
                  orderMd={1}
                  order={2}
                  style={{
                    padding: "0px",
                  }}
                >
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
                <Grid.Col
                  md={6}
                  orderMd={2}
                  order={1}
                  style={{
                    padding: "0px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MediaQuery
                    largerThan={"md"}
                    styles={{
                      alignContent: "center",
                      width: "100%",
                      height: "700px",
                    }}
                  >
                    <MediaQuery
                      smallerThan={"md"}
                      styles={{
                        justifyContent: "center",
                        alignContent: "center",
                        width: "100%",
                        height: "370px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src="./img/Summary.png" height={"100%"} />
                      </div>
                    </MediaQuery>
                  </MediaQuery>
                </Grid.Col>
              </Grid>
            </MediaQuery>

            <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
              <Grid
                style={{
                  padding: "50px 0 50px 0",
                }}
                align="center"
              >
                <Grid.Col md={12}>
                  <Flex direction={"column"} align={"center"}>
                    <Text
                      style={{
                        marginBottom: "5px",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      요약하기
                    </Text>
                    <Flex direction={"column"} align={"center"}>
                      <Title
                        style={{
                          fontSize: "30px",
                        }}
                      >
                        짧고 굵게!
                      </Title>
                      <Title
                        style={{
                          marginBottom: "5px",
                          fontSize: "30px",
                        }}
                      >
                        핵심만 요약하기
                      </Title>
                    </Flex>
                  </Flex>
                </Grid.Col>
                <Grid.Col md={12}>
                  <MediaQuery
                    largerThan={"md"}
                    styles={{
                      alignContent: "center",
                      width: "100%",
                      height: "700px",
                    }}
                  >
                    <MediaQuery
                      smallerThan={"md"}
                      styles={{
                        justifyContent: "center",
                        alignContent: "center",
                        width: "100%",
                        height: "370px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src="./img/Summary.png" height={"100%"} />
                      </div>
                    </MediaQuery>
                  </MediaQuery>
                </Grid.Col>
                <Grid.Col md={12}>
                  <Flex direction={"column"} align={"center"}>
                    <Text style={{ fontSize: "14px", marginTop: "5px" }}>
                      문장을 잘 이해하고 요약하는 과정에서
                    </Text>
                    <Text style={{ fontSize: "14px" }}>
                      문해력이 길러집니다.
                    </Text>
                  </Flex>
                </Grid.Col>
              </Grid>
            </MediaQuery>
          </div>
        </MediaQuery>
      </MediaQuery>
    </Center>
  );
}

// 채점 기능 소개
export function FunctionScoring() {
  return (
    <Center>
      <MediaQuery largerThan={"md"} styles={{ width: "1060px" }}>
        <MediaQuery
          smallerThan={"md"}
          styles={{ width: "300px", marginTop: "30px" }}
        >
          <div>
            <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
              <Grid
                style={{
                  padding: "100px 0 100px 0",
                }}
                align="center"
              >
                <Grid.Col
                  md={6}
                  orderMd={1}
                  order={2}
                  style={{
                    padding: "0px",
                  }}
                >
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
                      요약을 잘 했는지 평가받고 어떤 부분을 잘 했는지, 못했는지
                      알게 됩니다.
                    </Text>
                  </Flex>
                </Grid.Col>
                <Grid.Col
                  md={6}
                  orderMd={2}
                  order={1}
                  style={{
                    padding: "0px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MediaQuery
                    largerThan={"md"}
                    styles={{
                      alignContent: "center",
                      width: "100%",
                      height: "700px",
                    }}
                  >
                    <MediaQuery
                      smallerThan={"md"}
                      styles={{
                        justifyContent: "center",
                        alignContent: "center",
                        width: "100%",
                        height: "370px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src="./img/Scoring.png" height={"100%"} />
                      </div>
                    </MediaQuery>
                  </MediaQuery>
                </Grid.Col>
              </Grid>
            </MediaQuery>

            <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
              <Grid
                style={{
                  padding: "50px 0 50px 0",
                }}
                align="center"
              >
                <Grid.Col md={12}>
                  <Flex direction={"column"} align={"center"}>
                    <Text
                      style={{
                        marginBottom: "5px",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      채점하기
                    </Text>
                    <Flex direction={"column"} align={"center"}>
                      <Title
                        style={{
                          fontSize: "30px",
                        }}
                      >
                        AI 채점
                      </Title>
                    </Flex>
                  </Flex>
                </Grid.Col>
                <Grid.Col md={12}>
                  <MediaQuery
                    largerThan={"md"}
                    styles={{
                      alignContent: "center",
                      width: "100%",
                      height: "700px",
                    }}
                  >
                    <MediaQuery
                      smallerThan={"md"}
                      styles={{
                        justifyContent: "center",
                        alignContent: "center",
                        width: "100%",
                        height: "370px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src="./img/Scoring.png" height={"100%"} />
                      </div>
                    </MediaQuery>
                  </MediaQuery>
                </Grid.Col>
                <Grid.Col md={12}>
                  <Flex direction={"column"} align={"center"}>
                    <Text style={{ fontSize: "14px", marginTop: "5px" }}>
                      요약을 잘 했는지 평가받고
                    </Text>
                    <Text style={{ fontSize: "14px" }}>
                      어떤 부분을 잘 했는지, 못했는지 알게 됩니다.
                    </Text>
                  </Flex>
                </Grid.Col>
              </Grid>
            </MediaQuery>
          </div>
        </MediaQuery>
      </MediaQuery>
    </Center>
  );
}

// 채점 세부
export function MoreInfoScoring() {
  return (
    <Center style={{ backgroundColor: "rgb(250, 250,250)" }}>
      <MediaQuery largerThan={"md"} styles={{ width: "1060px" }}>
        <MediaQuery
          smallerThan={"md"}
          styles={{ width: "300px", marginTop: "30px" }}
        >
          <div>
            <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
              <Grid
                style={{
                  padding: "100px 0 100px 0",
                }}
                align="center"
              >
                <Grid.Col
                  md={6}
                  order={1}
                  style={{
                    padding: "0px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MediaQuery
                    largerThan={"md"}
                    styles={{
                      alignContent: "center",
                      width: "100%",
                      height: "700px",
                    }}
                  >
                    <MediaQuery
                      smallerThan={"md"}
                      styles={{
                        justifyContent: "center",
                        alignContent: "center",
                        width: "100%",
                        height: "370px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src="./img/ai_1.png" width={"100%"} />
                      </div>
                    </MediaQuery>
                  </MediaQuery>
                </Grid.Col>
                <Grid.Col
                  md={6}
                  order={2}
                  style={{
                    padding: "0 0 0 20px",
                  }}
                >
                  <Flex direction={"column"} align={"flex-start"}>
                    <Flex direction={"row"} align="center" justify="center">
                      <Button variant="outline" radius="xl" compact>
                        고급 AI 기술
                      </Button>
                      <Button variant="outline" radius="xl" compact>
                        점수 제공
                      </Button>
                      <Button variant="outline" radius="xl" compact>
                        피드백 제공
                      </Button>
                    </Flex>
                    <Title style={{ marginBottom: "20px", fontSize: "45px" }}>
                      선생님보다 정확한 AI
                    </Title>
                    <Text style={{ fontSize: "25px" }}>
                      도파민 디펜스가 자체 개발한 AI로 채점해드립니다.
                    </Text>
                  </Flex>
                </Grid.Col>
              </Grid>
            </MediaQuery>

            <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
              <Grid
                style={{
                  padding: "50px 0 50px 0",
                }}
                align="center"
              >
                <Grid.Col md={12}>
                  <Flex direction={"column"} align={"center"}>
                    <Flex
                      direction={"row"}
                      align="center"
                      justify="center"
                      style={{ marginBottom: "20px" }}
                    >
                      <Button variant="outline" radius="xl" compact>
                        고급 AI 기술
                      </Button>
                      <Button variant="outline" radius="xl" compact>
                        점수 제공
                      </Button>
                      <Button variant="outline" radius="xl" compact>
                        피드백 제공
                      </Button>
                    </Flex>
                    <Flex direction={"column"} align={"center"}>
                      <Title
                        style={{
                          fontSize: "30px",
                        }}
                      >
                        AI 채점
                      </Title>
                    </Flex>
                  </Flex>
                </Grid.Col>
                <Grid.Col md={12}>
                  <MediaQuery
                    largerThan={"md"}
                    styles={{
                      alignContent: "center",
                      width: "100%",
                      height: "700px",
                    }}
                  >
                    <MediaQuery
                      smallerThan={"md"}
                      styles={{
                        justifyContent: "center",
                        alignContent: "center",
                        width: "100%",
                        height: "370px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src="./img/ai_1.png" width={"400px"} />
                      </div>
                    </MediaQuery>
                  </MediaQuery>
                </Grid.Col>
                <Grid.Col md={12}>
                  <Flex direction={"column"} align={"center"}>
                    <Text style={{ fontSize: "14px", marginTop: "5px" }}>
                      도파민 디펜스가 자체 개발한 AI로 채점해드립니다.
                    </Text>
                  </Flex>
                </Grid.Col>
              </Grid>
            </MediaQuery>
          </div>
        </MediaQuery>
      </MediaQuery>
    </Center>
  );
}

// 레포트
export function Report() {
  return (
    <Center>
      <MediaQuery largerThan={"md"} styles={{ width: "1060px" }}>
        <MediaQuery
          smallerThan={"md"}
          styles={{ width: "300px", marginTop: "30px" }}
        >
          <div>
            <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
              <Grid
                style={{
                  padding: "100px 0 100px 0",
                }}
                align="center"
              >
                <Grid.Col
                  md={6}
                  orderMd={1}
                  order={2}
                  style={{
                    padding: "0px",
                  }}
                >
                  <Flex direction={"column"} align={"flex-start"}>
                    <Text
                      style={{
                        marginBottom: "20px",
                        fontSize: "26px",
                        fontWeight: "bold",
                      }}
                    >
                      레포트
                    </Text>
                    <Title style={{ marginBottom: "20px", fontSize: "45px" }}>
                      꼼꼼한 레포트
                    </Title>
                    <Text style={{ fontSize: "25px", marginBottom: "10px" }}>
                      점수, 피드백은 기본! 내가 전체에서 몇등인지, 며칠 째
                      참여중인지 동기부여도 해드립니다.
                    </Text>
                    <Text
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      9월 중 제공 예정
                    </Text>
                  </Flex>
                </Grid.Col>
                <Grid.Col
                  md={6}
                  orderMd={2}
                  order={1}
                  style={{
                    padding: "0px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MediaQuery
                    largerThan={"md"}
                    styles={{
                      alignContent: "center",
                      width: "100%",
                      height: "700px",
                    }}
                  >
                    <MediaQuery
                      smallerThan={"md"}
                      styles={{
                        justifyContent: "center",
                        alignContent: "center",
                        width: "100%",
                        height: "370px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src="./img/Report.png" height={"100%"} />
                      </div>
                    </MediaQuery>
                  </MediaQuery>
                </Grid.Col>
              </Grid>
            </MediaQuery>

            <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
              <Grid
                style={{
                  padding: "50px 0 50px 0",
                }}
                align="center"
              >
                <Grid.Col md={12}>
                  <Flex direction={"column"} align={"center"}>
                    <Text
                      style={{
                        marginBottom: "5px",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      레포트
                    </Text>

                    <Flex direction={"column"} align={"center"}>
                      <Title
                        style={{
                          fontSize: "30px",
                        }}
                      >
                        꼼꼼한 레포트
                      </Title>
                      <Text
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        9월 중 제공예정
                      </Text>
                    </Flex>
                  </Flex>
                </Grid.Col>
                <Grid.Col md={12}>
                  <MediaQuery
                    largerThan={"md"}
                    styles={{
                      alignContent: "center",
                      width: "100%",
                      height: "700px",
                    }}
                  >
                    <MediaQuery
                      smallerThan={"md"}
                      styles={{
                        justifyContent: "center",
                        alignContent: "center",
                        width: "100%",
                        height: "370px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src="./img/Report.png" height={"100%"} />
                      </div>
                    </MediaQuery>
                  </MediaQuery>
                </Grid.Col>
                <Grid.Col md={12}>
                  <Flex direction={"column"} align={"center"}>
                    <Text style={{ fontSize: "14px", marginTop: "5px" }}>
                      점수, 피드백은 기본! 내가 전체에서 몇등인지, 며칠 째
                    </Text>
                    <Text style={{ fontSize: "14px", marginTop: "5px" }}>
                      참여중인지 동기부여도 해드립니다.
                    </Text>
                  </Flex>
                </Grid.Col>
              </Grid>
            </MediaQuery>
          </div>
        </MediaQuery>
      </MediaQuery>
    </Center>
  );
}

// 레포트 세부
export function MoreInfoReport() {
  return (
    <Center style={{ backgroundColor: "rgb(250, 250,250)" }}>
      <MediaQuery largerThan={"md"} styles={{ width: "1060px" }}>
        <MediaQuery
          smallerThan={"md"}
          styles={{ width: "300px", marginTop: "30px" }}
        >
          <div>
            <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
              <Grid
                style={{
                  padding: "100px 0 100px 0",
                }}
                align="center"
              >
                <Grid.Col
                  md={6}
                  order={1}
                  style={{
                    padding: "0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MediaQuery
                    largerThan={"md"}
                    styles={{
                      alignContent: "center",
                      width: "100%",
                      height: "700px",
                    }}
                  >
                    <MediaQuery
                      smallerThan={"md"}
                      styles={{
                        justifyContent: "center",
                        alignContent: "center",
                        width: "100%",
                        height: "370px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src="./img/graph.png" width={"100%"} />
                      </div>
                    </MediaQuery>
                  </MediaQuery>
                </Grid.Col>
                <Grid.Col
                  md={6}
                  order={2}
                  style={{
                    padding: "0 0 0 20px",
                  }}
                >
                  <Flex direction={"column"} align={"flex-start"}>
                    <Flex direction={"row"} align="center" justify="center">
                      <Button variant="outline" radius="xl" compact>
                        점수 변화
                      </Button>
                      <Button variant="outline" radius="xl" compact>
                        주간 레포트
                      </Button>
                      <Button variant="outline" radius="xl" compact>
                        월간 레포트
                      </Button>
                    </Flex>
                    <Title style={{ marginBottom: "20px", fontSize: "45px" }}>
                      꾸준히 받아보는 레포트
                    </Title>
                    <Text style={{ fontSize: "25px" }}>
                      꾸준히 참여할수록 쌓이는 데이터! 나의 참여 기록을 일별,
                      주별, 월별로 레포트로 한 눈에 확인할 수 있습니다.
                    </Text>
                  </Flex>
                </Grid.Col>
              </Grid>
            </MediaQuery>

            <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
              <Grid
                style={{
                  padding: "50px 0 50px 0",
                }}
                align="center"
              >
                <Grid.Col md={12}>
                  <Flex direction={"column"} align={"center"}>
                    <Flex direction={"row"} align="center" justify="center">
                      <Button variant="outline" radius="xl" compact>
                        점수 변화
                      </Button>
                      <Button variant="outline" radius="xl" compact>
                        주간 레포트
                      </Button>
                      <Button variant="outline" radius="xl" compact>
                        월간 레포트
                      </Button>
                    </Flex>
                    <Flex direction={"column"} align={"center"}>
                      <Title
                        style={{
                          fontSize: "30px",
                        }}
                      >
                        꾸준히 받아보는 레포트
                      </Title>
                    </Flex>
                  </Flex>
                </Grid.Col>
                <Grid.Col md={12}>
                  <MediaQuery
                    largerThan={"md"}
                    styles={{
                      alignContent: "center",
                      width: "100%",
                      height: "700px",
                    }}
                  >
                    <MediaQuery
                      smallerThan={"md"}
                      styles={{
                        justifyContent: "center",
                        alignContent: "center",
                        width: "100%",
                        height: "370px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src="./img/graph.png" width={"400px"} />
                      </div>
                    </MediaQuery>
                  </MediaQuery>
                </Grid.Col>
                <Grid.Col md={12}>
                  <Flex direction={"column"} align={"center"}>
                    <Text style={{ fontSize: "14px", marginTop: "5px" }}>
                      꾸준히 참여할수록 쌓이는 데이터! 나의 참여 기록을
                    </Text>
                    <Text style={{ fontSize: "14px" }}>
                      일별, 주별, 월별로 레포트로
                    </Text>
                    <Text style={{ fontSize: "14px" }}>
                      한 눈에 확인할 수 있습니다.
                    </Text>
                  </Flex>
                </Grid.Col>
              </Grid>
            </MediaQuery>
          </div>
        </MediaQuery>
      </MediaQuery>
    </Center>
  );
}

// 지표
export function Indicator() {
  return (
    <MediaQuery largerThan="md" styles={{ height: "500px" }}>
      <MediaQuery smallerThan="md" styles={{ height: "300px" }}>
        <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
          <Center>
            <div>
              <Center style={{ marginBottom: "50px" }}>
                <Title>이미 많은 사람들이 도파민 디펜스를 사용중입니다.</Title>
              </Center>
              <Grid style={{ width: "1060px" }}>
                <Grid.Col span={4}>
                  <Center>
                    <Flex direction={"column"} align={"center"}>
                      <Title style={{ margin: "20px", fontSize: "25px" }}>
                        친구 수
                      </Title>
                      <Text style={{ fontSize: "20px" }}>1200명</Text>
                    </Flex>
                  </Center>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Center>
                    <Flex direction={"column"} align={"center"}>
                      <Title style={{ margin: "20px", fontSize: "25px" }}>
                        누적 유료 결제자 수
                      </Title>
                      <Text style={{ fontSize: "20px" }}>142명</Text>
                    </Flex>
                  </Center>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Center>
                    <Flex direction={"column"} align={"center"}>
                      <Title style={{ margin: "20px", fontSize: "25px" }}>
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
                    아아
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
            <Title style={{ marginBottom: "20px", fontSize: "35px" }}>
              오늘부터 시작해보세요!
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
      <Center>
        <MediaQuery
          largerThan={"md"}
          styles={{ width: "1000px", margin: "0 0 40px 0" }}
        >
          <MediaQuery
            smallerThan={"md"}
            styles={{ width: "100%", margin: "0 20px 0 20px" }}
          >
            <div>
              <Demo />
            </div>
          </MediaQuery>
        </MediaQuery>
      </Center>
      <MoreInfoReport />
      <Indicator />
      <Review />
      <Bye />
    </>
  );
}
