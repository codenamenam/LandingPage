import { HeaderAction } from "@/components/header";
import About from "./about";
import { FooterLinks } from "@/components/footer";

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

const footerLinks = [
  {
    title: "About",
    links: [
      {
        label: "Features",
        link: "#",
      },
      {
        label: "Pricing",
        link: "#",
      },
      {
        label: "Support",
        link: "#",
      },
      {
        label: "Forums",
        link: "#",
      },
    ],
  },
  {
    title: "Project",
    links: [
      {
        label: "Contribute",
        link: "#",
      },
      {
        label: "Media assets",
        link: "#",
      },
      {
        label: "Changelog",
        link: "#",
      },
      {
        label: "Releases",
        link: "#",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        label: "Join Discord",
        link: "#",
      },
      {
        label: "Follow on Twitter",
        link: "#",
      },
      {
        label: "Email newsletter",
        link: "#",
      },
      {
        label: "GitHub discussions",
        link: "#",
      },
    ],
  },
];

export default function Home() {
  return (
    <div style={{ backgroundColor: "white", margin: "0px" }}>
      <HeaderAction links={links} />
      <About />
      <FooterLinks data={footerLinks} />
    </div>
  );
}
