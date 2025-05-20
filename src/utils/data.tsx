import type { ItemType } from "./types";
import {
  HomeOutlined,
  HistoryOutlined,
  TeamOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
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
