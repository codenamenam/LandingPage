import { HeaderResponsive } from "@/components/header";
import About from "./about";
import { FooterLinks } from "@/components/footer";

const links = [
  {
    link: "/",
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

const footerLinks = [
  {
    title: "About",
    links: [
      {
        label: "서비스 소개",
        link: "/",
      },
      {
        label: "결제하기",
        link: "/pay",
      },
      {
        label: "Pricing",
        link: "/pricing",
      },
      {
        label: "고객센터",
        link: "/service",
      },
    ],
  },
];

export default function Home() {
  return (
    <div style={{ backgroundColor: "white", margin: "0px" }}>
      <HeaderResponsive links={links} />
      <About />
      <FooterLinks data={footerLinks} />
    </div>
  );
}
