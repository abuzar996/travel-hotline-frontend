import type { ImageViewType, ItemType } from "./types";
import {
  HomeOutlined,
  HistoryOutlined,
  TeamOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import HomeImage1 from "src/assets/home-4.png";
import HomeImage2 from "src/assets/home-3.png";
import HomeImage3 from "src/assets/home-2.png";
import HomeImage4 from "src/assets/home-1.png";
export const navItems: ItemType[] = [
  {
    label: "HOME",
    id: "1",
    active: true,
    icon: <HomeOutlined />,
    route: "/home",
  },
  {
    label: "BUILD A TRIP",
    id: "2",
    active: false,
    icon: <GlobalOutlined />,
    route: "/build-my-trip",
  },
  {
    label: "MY TRIPS",
    id: "3",
    active: false,
    icon: <HistoryOutlined />,
    route: "/my-trips",
  },
  {
    label: "ABOUT US",
    id: "4",
    active: false,
    icon: <TeamOutlined />,
    route: "/about-us",
  },
];

export const homeData: ImageViewType[] = [
  { value: HomeImage1, id: "1" },
  { value: HomeImage2, id: "2" },
  { value: HomeImage3, id: "3" },
  { value: HomeImage4, id: "4" },
];
