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
import { useState, useEffect } from "react";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

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
      styles={{ backgroundColor: "rgb(250, 250,250)" }}
    >
      <Center>
        <MediaQuery largerThan={"md"} styles={{ width: "1060px" }}>
          <MediaQuery
            smallerThan={"md"}
            styles={{
              width: "350px",
              marginTop: "30px",
              backgroundColor: "rgb(250,250,250)",
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
      styles={{ backgroundColor: "rgb(250, 250,250)" }}
    >
      <Center>
        <MediaQuery largerThan={"md"} styles={{ width: "1060px" }}>
          <MediaQuery
            smallerThan={"md"}
            styles={{
              width: "350px",
              marginTop: "30px",
              backgroundColor: "rgb(250,250,250)",
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

// 리뷰
export function Review() {
  const [swiper, setSwiper] = useState<SwiperCore>();

  return (
    <MediaQuery largerThan="md" styles={{ width: "1060px" }}>
      <MediaQuery
        smallerThan="md"
        styles={{
          width: "100%",
          marginTop: "50px",
        }}
      >
        <Center>
          <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
            <Flex direction={"column"} align={"center"}>
              <Text style={{ fontSize: "30px", fontWeight: "bold" }}>
                2023.9.5일 기준
              </Text>
              <Title style={{ fontSize: "60px" }}>
                1387명이 도파민 디펜스 사용 중
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
                  alignContent: "center",
                  width: "1060px",
                  height: "700px",
                }}
              >
                <div>
                  <Swiper
                    onSwiper={(onSwiper) => setSwiper(onSwiper)}
                    spaceBetween={50}
                    slidesPerView={1}
                  >
                    <SwiperSlide>
                      <Text>1번</Text>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Text>2번</Text>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Text>3번</Text>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </MediaQuery>
            </Flex>
          </MediaQuery>

          <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
            <Flex direction={"column"} align={"center"}>
              <Text style={{ fontSize: "15px", fontWeight: "bold" }}>
                2023.9.5일 기준
              </Text>
              <Title style={{ fontSize: "25px" }}>
                1387명이 도파민 디펜스 사용 중
              </Title>
              <Text
                style={{
                  fontSize: "18px",
                  margin: "20px",
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
                  width: "350px",
                  height: "300px",
                  padding: "5px 20px 0px 20px",
                }}
              >
                <div>
                  <Swiper
                    onSwiper={(onSwiper) => setSwiper(onSwiper)}
                    spaceBetween={50}
                    slidesPerView={1}
                  >
                    <SwiperSlide>
                      <Image src={"./img/ai_1.png"}></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={"./img/ai_1.png"}></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={"./img/ai_1.png"}></Image>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </MediaQuery>
            </Flex>
          </MediaQuery>
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
      <MoreInfoReport />
      <Review />
      <Bye />
    </>
  );
}
