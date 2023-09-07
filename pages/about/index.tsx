import {
  Button,
  Center,
  Flex,
  Image,
  Text,
  Grid,
  MediaQuery,
  Title,
  Card,
  Group,
} from "@mantine/core";
import { useState, useEffect } from "react";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import { height } from "@mui/system";

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
                      <Image
                        src="./img/first.png"
                        style={{
                          filter: "drop-shadow(5px 10px 10px #c3c3c3)",
                        }}
                      />
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
                    styles={{ margin: "10px 0 40px" }}
                  >
                    <MediaQuery
                      largerThan={"md"}
                      styles={{ margin: "0px", height: "45px" }}
                    >
                      <Button color="ddColorMain">
                        <Text
                          color="white"
                          style={{
                            fontWeight: 900,
                            fontSize: "18px",
                          }}
                        >
                          무료 시작하기
                        </Text>
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
        <Center style={{ backgroundColor: "rgba(242, 29, 118, 0.10)" }}>
          <Flex direction={"column"} align={"center"}>
            <MediaQuery largerThan={"md"} styles={{ fontSize: "2em" }}>
              <MediaQuery smallerThan={"md"} styles={{ fontSize: "18px" }}>
                <Text color="grey" weight={500}>
                  가장 빠르게 문해력 향상하는법
                </Text>
              </MediaQuery>
            </MediaQuery>

            <MediaQuery
              largerThan={"md"}
              styles={{ fontSize: "3em", margin: "20px" }}
            >
              <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
                <Flex>
                  <Title size={50}>독서나 신문이 아닌,&nbsp;</Title>
                  <Title color="ddColorMain" size={50}>
                    도파민 디펜스.
                  </Title>
                </Flex>
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
                <Title color="ddColorMain">도파민 디펜스.</Title>
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
                      color="ddColorMain"
                    >
                      글 읽기
                    </Text>
                    <Title
                      style={{
                        marginBottom: "20px",
                        fontSize: "45px",
                      }}
                    >
                      쉽고 재미있는 글 읽기
                    </Title>
                    <Text style={{ fontSize: "25px" }}>
                      사전에 선정한 지문을 매일 오전 8시에
                    </Text>
                    <Text style={{ fontSize: "25px" }}>
                      카톡으로 보내드립니다.
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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="./img/Read.png"
                        height={"100%"}
                        style={{
                          filter: "drop-shadow(5px 10px 10px #c3c3c3)",
                        }}
                      />
                    </div>
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
                      color="ddColorMain"
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
                        height: "600px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="./img/Read.png"
                          height={"100%"}
                          style={{
                            filter: "drop-shadow(5px 10px 10px #c3c3c3)",
                          }}
                        />
                      </div>
                    </MediaQuery>
                  </MediaQuery>
                </Grid.Col>
                <Grid.Col md={12}>
                  <Flex direction={"column"} align={"center"}>
                    <Text
                      style={{
                        fontSize: "16px",
                        marginTop: "15px",
                        fontWeight: "500",
                      }}
                    >
                      사전에 엄선된 독서 지문을
                    </Text>
                    <Text style={{ fontSize: "16px", fontWeight: "500" }}>
                      매일 오전 8시에 카톡으로 보내드립니다.
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
                      color="ddColorMain"
                    >
                      요약하기
                    </Text>
                    <Title style={{ marginBottom: "20px", fontSize: "45px" }}>
                      쉽게 길르는 문해력
                    </Title>
                    <Text style={{ fontSize: "25px" }}>
                      문장을 이해하고 요약하는 과정에서 문맥을 파악하고
                    </Text>
                    <Text style={{ fontSize: "25px" }}>
                      단어의 의미를 유추하는 능력이 길러집니다.
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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="./img/Summary.png"
                        height={"100%"}
                        style={{
                          filter: "drop-shadow(5px 10px 10px #c3c3c3)",
                        }}
                      />
                    </div>
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
                      color="ddColorMain"
                    >
                      요약하기
                    </Text>
                    <Flex direction={"column"} align={"center"}>
                      <Title
                        style={{
                          marginBottom: "5px",
                          fontSize: "30px",
                        }}
                      >
                        쉽게 길르는 문해력
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
                        height: "600px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="./img/Summary.png"
                          height={"100%"}
                          style={{
                            filter: "drop-shadow(5px 10px 10px #c3c3c3)",
                          }}
                        />
                      </div>
                    </MediaQuery>
                  </MediaQuery>
                </Grid.Col>
                <Grid.Col md={12}>
                  <Flex direction={"column"} align={"center"}>
                    <Text
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        marginTop: "15px",
                      }}
                    >
                      문장을 이해하고 요약하는 과정에서
                    </Text>
                    <Text style={{ fontSize: "16px", fontWeight: "500" }}>
                      문맥을 파악하고 단어의 의미를 유추하는
                    </Text>
                    <Text style={{ fontSize: "16px", fontWeight: "500" }}>
                      능력이 길러집니다.
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
                      color="ddColorMain"
                    >
                      피드백
                    </Text>
                    <Title style={{ marginBottom: "20px", fontSize: "45px" }}>
                      재미있는 피드백
                    </Title>
                    <Text style={{ fontSize: "25px" }}>
                      요약한 내용의 잘한 점과 아쉬운 점, 점수와 연속 참여
                    </Text>
                    <Text style={{ fontSize: "25px" }}>
                      기록, 순위 제공으로 동기부여를 제공합니다.
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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="./img/Scoring.png"
                        height={"100%"}
                        style={{
                          filter: "drop-shadow(5px 10px 10px #c3c3c3)",
                        }}
                      />
                    </div>
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
                      color="ddColorMain"
                    >
                      피드백
                    </Text>
                    <Flex direction={"column"} align={"center"}>
                      <Title
                        style={{
                          fontSize: "30px",
                        }}
                      >
                        재미있는 피드백
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
                        height: "600px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="./img/Scoring.png"
                          height={"100%"}
                          style={{
                            filter: "drop-shadow(5px 10px 10px #c3c3c3)",
                          }}
                        />
                      </div>
                    </MediaQuery>
                  </MediaQuery>
                </Grid.Col>
                <Grid.Col md={12}>
                  <Flex direction={"column"} align={"center"}>
                    <Text
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        marginTop: "15px",
                      }}
                    >
                      요약한 내용의 잘한 점과 아쉬운 점,
                    </Text>
                    <Text
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      점수와 연속 참여 기록, 순위 제공으로
                    </Text>
                    <Text
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      동기부여를 제공합니다.
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
  // 버튼 3개
  const [activeAIButton, setActiveAIButton] = useState<number>(0);
  const handleAIButtonClick = (buttonName: number) => {
    setActiveAIButton(buttonName);
  };

  // 이미지 슬라이드 Swiper
  SwiperCore.use([Autoplay]);
  const [swiperIndex, setSwiperIndex] = useState<number>(0);
  const [swiperLarge, setSwiperLarge] = useState<SwiperCore>();
  const [swiperSmall, setSwiperSmall] = useState<SwiperCore>();

  return (
    <MediaQuery
      largerThan={"md"}
      styles={{ backgroundColor: "rgb(247, 250, 252)" }}
    >
      <Center>
        <MediaQuery largerThan={"md"} styles={{ width: "1060px" }}>
          <MediaQuery
            smallerThan={"md"}
            styles={{
              width: "350px",
              marginTop: "30px",
              backgroundColor: "rgb(247, 250, 252)",
              borderRadius: "20px",
            }}
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
                      <Center>
                        <Swiper
                          spaceBetween={50}
                          slidesPerView={1}
                          onActiveIndexChange={(swiperCore) => {
                            setSwiperIndex(swiperCore.activeIndex);
                            handleAIButtonClick(swiperCore.activeIndex);
                          }}
                          onSwiper={(swiper) => {
                            setSwiperLarge(swiper);
                          }}
                          autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                          }}
                        >
                          <SwiperSlide>
                            <Image src={"./img/ai_1.png"}></Image>
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image src={"./img/ai_2.png"}></Image>
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image src={"./img/ai_3.png"}></Image>
                          </SwiperSlide>
                        </Swiper>
                      </Center>
                    </MediaQuery>
                  </Grid.Col>
                  <Grid.Col
                    md={6}
                    order={2}
                    style={{
                      padding: "0 0 0 30px",
                    }}
                  >
                    <Flex direction={"column"} justify={"flex-start"}>
                      <Flex
                        direction={"row"}
                        align="center"
                        justify="center"
                        gap="sm"
                        style={{ marginBottom: "30px" }}
                      >
                        <Button
                          variant={activeAIButton === 0 ? "light" : "outline"}
                          radius="xl"
                          compact
                          size="30px"
                          style={{ width: "200px" }}
                          onClick={() => {
                            handleAIButtonClick(0);
                            swiperLarge?.slideTo(0);
                            swiperSmall?.slideTo(0);
                          }}
                        >
                          <Text
                            style={{
                              fontSize: "22px",
                              margin: "4px 10px 4px 10px",
                            }}
                          >
                            AI 엔지니어링
                          </Text>
                        </Button>
                        <Button
                          variant={activeAIButton === 1 ? "light" : "outline"}
                          radius="xl"
                          compact
                          size="30px"
                          style={{ width: "200px" }}
                          onClick={() => {
                            handleAIButtonClick(1);
                            swiperLarge?.slideTo(1);
                            swiperSmall?.slideTo(1);
                          }}
                        >
                          <Text
                            style={{
                              fontSize: "22px",
                              margin: "4px 10px 4px 10px",
                            }}
                          >
                            점수 계산
                          </Text>
                        </Button>
                        <Button
                          variant={activeAIButton === 2 ? "light" : "outline"}
                          radius="xl"
                          compact
                          size="30px"
                          style={{ width: "200px" }}
                          onClick={() => {
                            handleAIButtonClick(2);
                            swiperLarge?.slideTo(2);
                            swiperSmall?.slideTo(2);
                          }}
                        >
                          <Text
                            style={{
                              fontSize: "22px",
                              margin: "4px 10px 4px 10px",
                            }}
                          >
                            피드백 생성
                          </Text>
                        </Button>
                      </Flex>
                      <Title style={{ marginBottom: "20px", fontSize: "45px" }}>
                        피드백, 이렇게 만들었습니다.
                      </Title>
                      <Text style={{ fontSize: "25px" }}>
                        도파민 디펜스가 자체 개발한 AI 기술로 요약 내용을
                        채점합니다. 요약을 세분화하여 채점 기준에 맞게 점수를
                        부여하고 이후에 심화된 피드백을 생성합니다.
                      </Text>
                    </Flex>
                  </Grid.Col>
                </Grid>
              </MediaQuery>

              <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
                <Grid
                  style={{
                    padding: "20px 0 20px 0",
                  }}
                  align="center"
                >
                  <Grid.Col md={12}>
                    <Flex direction={"column"} align={"center"}>
                      <Flex
                        direction={"column"}
                        align={"center"}
                        style={{ marginTop: "20px" }}
                      >
                        <Title
                          style={{
                            fontSize: "30px",
                          }}
                        >
                          피드백,
                        </Title>
                        <Title
                          style={{
                            fontSize: "30px",
                          }}
                        >
                          이렇게 만들었습니다.
                        </Title>
                      </Flex>
                      <Flex
                        direction={"row"}
                        align="center"
                        justify="center"
                        style={{ marginTop: "40px" }}
                        gap={"5px"}
                      >
                        <Button
                          variant={activeAIButton === 0 ? "light" : "outline"}
                          radius="xl"
                          compact
                          onClick={() => {
                            handleAIButtonClick(0);
                            swiperLarge?.slideTo(0);
                            swiperSmall?.slideTo(0);
                          }}
                          style={{ width: "100px" }}
                        >
                          AI 엔지니어링
                        </Button>
                        <Button
                          variant={activeAIButton === 1 ? "light" : "outline"}
                          radius="xl"
                          compact
                          onClick={() => {
                            handleAIButtonClick(1);
                            swiperLarge?.slideTo(1);
                            swiperSmall?.slideTo(1);
                          }}
                          style={{ width: "100px" }}
                        >
                          점수 계산
                        </Button>
                        <Button
                          variant={activeAIButton === 2 ? "light" : "outline"}
                          radius="xl"
                          compact
                          onClick={() => {
                            handleAIButtonClick(2);
                            swiperLarge?.slideTo(2);
                            swiperSmall?.slideTo(2);
                          }}
                          style={{ width: "100px" }}
                        >
                          피드백 생성
                        </Button>
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
                          height: "100%",
                          padding: "5px 20px 0px 20px",
                        }}
                      >
                        <Center>
                          <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            onActiveIndexChange={(swiperCore) => {
                              setSwiperIndex(swiperCore.activeIndex);
                              handleAIButtonClick(swiperCore.activeIndex);
                            }}
                            onSwiper={(swiper) => {
                              setSwiperSmall(swiper);
                            }}
                            autoplay={{
                              delay: 4000,
                              disableOnInteraction: false,
                            }}
                          >
                            <SwiperSlide>
                              <Image src={"./img/ai_1.png"}></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                              <Image src={"./img/ai_2.png"}></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                              <Image src={"./img/ai_3.png"}></Image>
                            </SwiperSlide>
                          </Swiper>
                        </Center>
                      </MediaQuery>
                    </MediaQuery>
                  </Grid.Col>
                  <Grid.Col md={12}>
                    <Flex direction={"column"} align={"center"}>
                      <Text
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        도파민 디펜스가 자체 개발한 AI 기술로
                      </Text>
                      <Text
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        요약 내용을 채점합니다. 요약을 세분화하여
                      </Text>
                      <Text
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        채점 기준에 맞게 점수를 부여하고 이후에
                      </Text>
                      <Text
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        심화된 피드백을 생성합니다.
                      </Text>
                    </Flex>
                  </Grid.Col>
                </Grid>
              </MediaQuery>
            </div>
          </MediaQuery>
        </MediaQuery>
      </Center>
    </MediaQuery>
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
                    <Flex
                      direction={"row"}
                      align={"center"}
                      style={{ marginBottom: "20px" }}
                    >
                      <Text
                        style={{
                          fontSize: "26px",
                          fontWeight: "900",
                        }}
                        color="ddColorMain"
                      >
                        레포트
                      </Text>
                      <Text
                        style={{
                          fontSize: "26px",
                          fontWeight: "600",
                          marginLeft: "10px",
                        }}
                        color="rgba(0,0,0,0.3)"
                      >
                        9월 중 제공 예정
                      </Text>
                    </Flex>
                    <Title style={{ marginBottom: "20px", fontSize: "45px" }}>
                      꼼꼼하고 자세한 레포트
                    </Title>
                    <Text style={{ fontSize: "25px", marginBottom: "10px" }}>
                      도파민 디펜스는 꾸준한 참여가 중요합니다. 주간 레포트,
                      월간 레포트로 참여도와 평균 점수의 변화, 디펜스 총평을
                      제공해드립니다.
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
                        <img
                          src="./img/Report.png"
                          height={"100%"}
                          style={{
                            filter: "drop-shadow(5px 10px 10px #c3c3c3)",
                          }}
                        />
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
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                      color="rgba(0,0,0,0.4)"
                    >
                      9월 중 제공예정
                    </Text>
                    <Text
                      style={{
                        marginBottom: "5px",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                      color="ddColorMain"
                    >
                      레포트
                    </Text>

                    <Flex direction={"column"} align={"center"}>
                      <Title
                        style={{
                          fontSize: "30px",
                        }}
                      >
                        꼼꼼하고 자세한 레포트
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
                        height: "600px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="./img/Report.png"
                          height={"100%"}
                          style={{
                            filter: "drop-shadow(5px 10px 10px #c3c3c3)",
                          }}
                        />
                      </div>
                    </MediaQuery>
                  </MediaQuery>
                </Grid.Col>
                <Grid.Col md={12}>
                  <Flex direction={"column"} align={"center"}>
                    <Text
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        marginTop: "15px",
                      }}
                    >
                      도파민 디펜스는 꾸준한 참여가 중요합니다.
                    </Text>
                    <Text
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      주간 레포트, 월간 레포트로 참여도와 평균
                    </Text>
                    <Text
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      점수의 변화, 디펜스 총평을 제공해드립니다.
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
  // 버튼 3개
  const [activeReportButton, setActiveReportButton] = useState<number>(0);
  const handleReportButtonClick = (buttonName: number) => {
    setActiveReportButton(buttonName);
  };

  // 이미지 슬라이드 Swiper
  SwiperCore.use([Autoplay]);
  const [swiperIndex, setSwiperIndex] = useState<number>(0);
  const [swiperLarge, setSwiperLarge] = useState<SwiperCore>();
  const [swiperSmall, setSwiperSmall] = useState<SwiperCore>();

  return (
    <MediaQuery
      largerThan={"md"}
      styles={{ backgroundColor: "rgb(247, 250, 252)" }}
    >
      <Center>
        <MediaQuery largerThan={"md"} styles={{ width: "1060px" }}>
          <MediaQuery
            smallerThan={"md"}
            styles={{
              width: "350px",
              marginTop: "30px",
              backgroundColor: "rgb(247, 250, 252)",
              borderRadius: "20px",
            }}
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
                      <Center>
                        <Swiper
                          spaceBetween={50}
                          slidesPerView={1}
                          onActiveIndexChange={(swiperCore) => {
                            setSwiperIndex(swiperCore.activeIndex);
                            handleReportButtonClick(swiperCore.activeIndex);
                          }}
                          onSwiper={(swiper) => {
                            setSwiperLarge(swiper);
                          }}
                          autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                          }}
                        >
                          <SwiperSlide>
                            <Image src={"./img/graph.png"}></Image>
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image src={"./img/graph.png"}></Image>
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image src={"./img/graph.png"}></Image>
                          </SwiperSlide>
                        </Swiper>
                      </Center>
                    </MediaQuery>
                  </Grid.Col>
                  <Grid.Col
                    md={6}
                    order={2}
                    style={{
                      padding: "0 0 0 30px",
                    }}
                  >
                    <Flex direction={"column"} justify={"flex-start"}>
                      <Flex
                        direction={"row"}
                        align="center"
                        justify="center"
                        gap="sm"
                        style={{ marginBottom: "30px" }}
                      >
                        <Button
                          variant={
                            activeReportButton === 0 ? "light" : "outline"
                          }
                          radius="xl"
                          compact
                          size="30px"
                          style={{ width: "200px" }}
                          onClick={() => {
                            handleReportButtonClick(0);
                            swiperLarge?.slideTo(0);
                            swiperSmall?.slideTo(0);
                          }}
                        >
                          <Text
                            style={{
                              fontSize: "22px",
                              margin: "4px 10px 4px 10px",
                            }}
                          >
                            참여도 변화
                          </Text>
                        </Button>
                        <Button
                          variant={
                            activeReportButton === 1 ? "light" : "outline"
                          }
                          radius="xl"
                          compact
                          size="30px"
                          style={{ width: "200px" }}
                          onClick={() => {
                            handleReportButtonClick(1);
                            swiperLarge?.slideTo(1);
                            swiperSmall?.slideTo(1);
                          }}
                        >
                          <Text
                            style={{
                              fontSize: "22px",
                              margin: "4px 10px 4px 10px",
                            }}
                          >
                            점수 변화
                          </Text>
                        </Button>
                        <Button
                          variant={
                            activeReportButton === 2 ? "light" : "outline"
                          }
                          radius="xl"
                          compact
                          size="30px"
                          style={{ width: "200px" }}
                          onClick={() => {
                            handleReportButtonClick(2);
                            swiperLarge?.slideTo(2);
                            swiperSmall?.slideTo(2);
                          }}
                        >
                          <Text
                            style={{
                              fontSize: "22px",
                              margin: "4px 10px 4px 10px",
                            }}
                          >
                            디펜스 총평
                          </Text>
                        </Button>
                      </Flex>
                      <Title style={{ marginBottom: "20px", fontSize: "45px" }}>
                        레포트, 이렇게 만들었습니다.
                      </Title>
                      <Text style={{ fontSize: "25px" }}>
                        꾸준히 참여할수록 데이터는 쌓입니다. 도파민 디펜스는
                        데이터를 가공하여 사용자마다 개인화된 레포트를
                        제공합니다. 또한 참여 기록을 평가하는 AI가 총평을
                        생성하여 1:1 선생님이 평가해주는 듯한 경험을 제공합니다.
                      </Text>
                    </Flex>
                  </Grid.Col>
                </Grid>
              </MediaQuery>

              <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
                <Grid
                  style={{
                    padding: "20px 0 20px 0",
                  }}
                  align="center"
                >
                  <Grid.Col md={12}>
                    <Flex direction={"column"} align={"center"}>
                      <Flex
                        direction={"column"}
                        align={"center"}
                        style={{ margin: "20px 0 20px 0" }}
                      >
                        <Title
                          style={{
                            fontSize: "30px",
                          }}
                        >
                          레포트,
                        </Title>
                        <Title
                          style={{
                            fontSize: "30px",
                          }}
                        >
                          이렇게 만들었습니다.
                        </Title>
                      </Flex>
                      <Flex
                        direction={"row"}
                        align="center"
                        justify="center"
                        style={{ marginTop: "20px" }}
                        gap={"5px"}
                      >
                        <Button
                          variant={
                            activeReportButton === 0 ? "light" : "outline"
                          }
                          radius="xl"
                          compact
                          onClick={() => {
                            handleReportButtonClick(0);
                            swiperLarge?.slideTo(0);
                            swiperSmall?.slideTo(0);
                          }}
                          style={{ width: "100px" }}
                        >
                          참여도 변화
                        </Button>
                        <Button
                          variant={
                            activeReportButton === 1 ? "light" : "outline"
                          }
                          radius="xl"
                          compact
                          onClick={() => {
                            handleReportButtonClick(1);
                            swiperLarge?.slideTo(1);
                            swiperSmall?.slideTo(1);
                          }}
                          style={{ width: "100px" }}
                        >
                          점수 변화
                        </Button>
                        <Button
                          variant={
                            activeReportButton === 2 ? "light" : "outline"
                          }
                          radius="xl"
                          compact
                          onClick={() => {
                            handleReportButtonClick(2);
                            swiperLarge?.slideTo(2);
                            swiperSmall?.slideTo(2);
                          }}
                          style={{ width: "100px" }}
                        >
                          디펜스 총평
                        </Button>
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
                          height: "100%",
                          padding: "5px 20px 0px 20px",
                        }}
                      >
                        <Center>
                          <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            onActiveIndexChange={(swiperCore) => {
                              setSwiperIndex(swiperCore.activeIndex);
                              handleReportButtonClick(swiperCore.activeIndex);
                            }}
                            onSwiper={(swiper) => {
                              setSwiperSmall(swiper);
                            }}
                            autoplay={{
                              delay: 4000,
                              disableOnInteraction: false,
                            }}
                          >
                            <SwiperSlide>
                              <Image src={"./img/graph.png"}></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                              <Image src={"./img/graph.png"}></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                              <Image src={"./img/graph.png"}></Image>
                            </SwiperSlide>
                          </Swiper>
                        </Center>
                      </MediaQuery>
                    </MediaQuery>
                  </Grid.Col>
                  <Grid.Col md={12}>
                    <Flex direction={"column"} align={"center"}>
                      <Text
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          marginTop: "15px",
                        }}
                      >
                        꾸준히 참여할수록 데이터는 쌓입니다.
                      </Text>
                      <Text
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        도파민 디펜스는 데이터를 가공하여 사용자마다
                      </Text>
                      <Text
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        개인화된 레포트를 제공합니다. 또한 참여 기록을
                      </Text>
                      <Text
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        평가하는 AI가 총평을 생성하여 1:1 선생님이
                      </Text>
                      <Text
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        평가해주는 듯한 경험을 제공합니다.
                      </Text>
                    </Flex>
                  </Grid.Col>
                </Grid>
              </MediaQuery>
            </div>
          </MediaQuery>
        </MediaQuery>
      </Center>
    </MediaQuery>
  );
}

interface UserReviewProps {
  imageURL: string;
  name: string;
  job: string;
  title: string;
  comment: string;
}

const userReviewData = [
  {
    imageURL: "./img/user.png",
    name: "남동훈",
    job: "세명대학교 재학생",
    title: "문해력 향상이 필요하다면 추천!",
    comment: "도파민 디펜스하고 세명대 갔습니다!",
  },
  {
    imageURL: "./img/user.png",
    name: "남훈동",
    job: "상지대학교 재학생",
    title: "문해력 최고!",
    comment: "도파민 디펜스ㄱㄱ",
  },
  {
    imageURL: "./img/user.png",
    name: "김선효",
    job: "상지대학교 재학생",
    title: "문해력 최고!",
    comment: "도파민 디펜스ㄱㄱ",
  },
  {
    imageURL: "./img/user.png",
    name: "김효선",
    job: "상지대학교 재학생",
    title: "문해력 최고!",
    comment: "도파민 디펜스ㄱㄱ",
  },
  {
    imageURL: "./img/user.png",
    name: "이건협",
    job: "상지대학교 재학생",
    title: "문해력 최고!",
    comment: "도파민 디펜스ㄱㄱ",
  },
  {
    imageURL: "./img/user.png",
    name: "이협건",
    job: "상지대학교 재학생",
    title: "문해력 최고!",
    comment: "도파민 디펜스ㄱㄱ",
  },
];

// 리뷰 - 카드
export function UserReview(info: UserReviewProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="apart" mt="md" mb="xs">
        <Flex align={"center"} gap={"10px"}>
          <Image src={info.imageURL} style={{ width: "40px" }}></Image>
          <div>
            <Text style={{ fontSize: "15px" }}>{info.name}</Text>
            <Text style={{ fontSize: "15px" }}>{info.job}</Text>
          </div>
        </Flex>
      </Group>

      <Title style={{ fontSize: "22px" }}>{info.title}</Title>
      <Text size="sm" style={{ fontSize: "15px" }}>
        {info.comment}
      </Text>
    </Card>
  );
}

// 리뷰
export function Review() {
  const [swiper, setSwiper] = useState<SwiperCore>();

  const userReivewsSlides = userReviewData.map((review, index) => (
    <SwiperSlide key={index}>
      <UserReview
        imageURL={review.imageURL}
        name={review.name}
        job={review.job}
        title={review.title}
        comment={review.comment}
      />
    </SwiperSlide>
  ));

  return (
    <MediaQuery largerThan="md" styles={{ width: "1060px" }}>
      <MediaQuery
        smallerThan="md"
        styles={{
          width: "100%",
        }}
      >
        <>
          <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
            <Center>
              <Flex
                direction={"column"}
                align={"center"}
                style={{ margin: "100px 0 100px 0" }}
              >
                <Text style={{ fontSize: "25px", fontWeight: "bold" }}>
                  2023.9.5일 기준
                </Text>
                <Title style={{ fontSize: "60px" }}>도파민 디펜스 사용자</Title>
                <Title style={{ fontSize: "60px" }} color="ddColorMain">
                  1378명
                </Title>
                <Text
                  style={{
                    fontSize: "30px",
                    margin: "20px",
                    fontWeight: "bold",
                    color: "grey",
                  }}
                >
                  실제 사용자들의 리뷰를 확인해보세요.
                </Text>

                <MediaQuery
                  largerThan={"md"}
                  styles={{
                    justifyContent: "center",
                    alignContent: "center",
                    width: "1060px",
                  }}
                >
                  <div>
                    <Swiper
                      onSwiper={(onSwiper) => setSwiper(onSwiper)}
                      spaceBetween={10}
                      slidesPerView={3}
                      style={{ margin: "100px 0 0 0" }}
                      autoplay={{ delay: 0, disableOnInteraction: false }}
                      speed={5000}
                      loop={true}
                      loopedSlides={3}
                    >
                      {userReivewsSlides}
                    </Swiper>
                  </div>
                </MediaQuery>
              </Flex>
            </Center>
          </MediaQuery>

          <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
            <Center>
              <Flex
                direction={"column"}
                align={"center"}
                style={{ marginTop: "40px" }}
              >
                <Text style={{ fontSize: "15px", fontWeight: "bold" }}>
                  2023.9.5일 기준
                </Text>
                <Title style={{ fontSize: "30px" }}>도파민 디펜스 사용자</Title>
                <Title style={{ fontSize: "40px" }} color="ddColorMain">
                  1378명
                </Title>
                <Text
                  style={{
                    fontSize: "18px",
                    margin: "10px",
                    fontWeight: "bold",
                    color: "grey",
                  }}
                >
                  실제 사용자들의 리뷰를 확인해보세요.
                </Text>

                <MediaQuery
                  smallerThan={"md"}
                  styles={{
                    justifyContent: "center",
                    alignContent: "center",
                    width: "100%",
                    height: "400px",
                    padding: "5px 20px 0px 20px",
                  }}
                >
                  <div>
                    <Swiper
                      onSwiper={(onSwiper) => setSwiper(onSwiper)}
                      slidesPerView={2}
                      style={{
                        margin: "30px 0 70px 0",
                        height: "350px",
                        pointerEvents: "none",
                      }}
                      autoplay={{ delay: 0, disableOnInteraction: false }}
                      speed={5000}
                      loop={true}
                      loopedSlides={2}
                      direction="vertical"
                    >
                      {userReivewsSlides}
                    </Swiper>
                  </div>
                </MediaQuery>
              </Flex>
            </Center>
          </MediaQuery>
        </>
      </MediaQuery>
    </MediaQuery>
  );
}

// 다시 한번 안내
export function Bye() {
  return (
    <MediaQuery largerThan="md" styles={{ width: "1060px" }}>
      <MediaQuery
        smallerThan="md"
        styles={{
          width: "100%",
        }}
      >
        <>
          <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
            <Center style={{ height: "500px" }}>
              <Flex
                direction={"column"}
                align={"center"}
                style={{ padding: "30px" }}
              >
                <Flex>
                  <Title
                    style={{ marginBottom: "20px", fontSize: "50px" }}
                    color="ddColorMain"
                  >
                    도파민 디펜스,&nbsp;
                  </Title>
                  <Title style={{ marginBottom: "20px", fontSize: "50px" }}>
                    지금 바로 도전해보세요!
                  </Title>
                </Flex>

                <Button color="ddColorMain">
                  <Text
                    color="white"
                    style={{
                      fontWeight: 900,
                      fontSize: "18px",
                    }}
                  >
                    지금 시작하기
                  </Text>
                </Button>
              </Flex>
            </Center>
          </MediaQuery>

          <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
            <Center style={{ height: "300px" }}>
              <Flex
                direction={"column"}
                align={"center"}
                style={{ padding: "30px" }}
              >
                <Title color="ddColorMain" size={30}>
                  도파민 디펜스,
                </Title>
                <Title size={30}>지금 바로 도전해보세요!</Title>
                <Button color="ddColorMain" style={{ marginTop: "20px" }}>
                  <Text
                    color="white"
                    style={{
                      fontWeight: 700,
                      fontSize: "15px",
                    }}
                  >
                    지금 시작하기
                  </Text>
                </Button>
              </Flex>
            </Center>
          </MediaQuery>
        </>
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
      <Review />
      <Bye />
    </>
  );
}
