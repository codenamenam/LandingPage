import About from "./about";
import { FooterLinks } from "@/components/footer";

const footerLinks = [
  {
    title: "About",
    links: [
      {
        label: "서비스 소개",
        link: "/about",
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
      <About />
    </div>
  );
}
