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
                          지금 시작하기
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
                      color="ddColorMain"
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
                      color="ddColorMain"
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
                            고급 AI 기술
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
                            점수 제공
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
                            피드백 제공
                          </Text>
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
                    padding: "20px 0 20px 0",
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
                          고급 AI 기술
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
                          점수 제공
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
                          height: "300px",
                          padding: "5px 20px 0px 20px",
                        }}
                      >
                        <div>
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
                      꼼꼼한 레포트
                    </Title>
                    <Text style={{ fontSize: "25px", marginBottom: "10px" }}>
                      점수, 피드백은 기본! 내가 전체에서 몇등인지, 며칠 째
                      참여중인지 동기부여도 해드립니다.
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
                        꼼꼼한 레포트
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
                            점수 변화
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
                            주간 레포트
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
                            월간 레포트
                          </Text>
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
                    padding: "20px 0 20px 0",
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
                          고급 AI 기술
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
                          점수 제공
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
                          height: "300px",
                          padding: "5px 20px 0px 20px",
                        }}
                      >
                        <div>
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
                        </div>
                      </MediaQuery>
                    </MediaQuery>
                  </Grid.Col>
                  <Grid.Col md={12}>
                    <Flex direction={"column"} align={"center"}>
                      <Text style={{ fontSize: "14px", marginTop: "5px" }}>
                        꾸준히 참여할수록 쌓이는 데이터! 나의 참여 기록을
                      </Text>
                      <Text style={{ fontSize: "14px", marginTop: "5px" }}>
                        일별, 주별, 월별로 레포트로
                      </Text>
                      <Text style={{ fontSize: "14px", marginTop: "5px" }}>
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
                  사용자들의 따근따끈한 리뷰를 확인해보세요.
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
                  사용자들의 따근따끈한 리뷰를 확인해보세요.
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
                      style={{ margin: "30px 0 70px 0", height: "350px" }}
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

                <Button>무료 시작하기</Button>
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
                <Title color="ddColorMain">도파민 디펜스,</Title>
                <Title>지금 바로 도전해보세요!</Title>
                <Button style={{ marginTop: "20px" }}>무료 시작하기</Button>
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
