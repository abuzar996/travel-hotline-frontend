import type { ImageViewType, ItemType, TripOption } from "./types";
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

export const tripData: TripOption[] = [
  {
    id: "1",
    name: "Foodie Galorie",
    list: [
      {
        id: "11",
        place: "Thailand",
        price: 769,
        image: HomeImage1,
      },
      {
        id: "12",
        place: "Moroco",
        price: 569,
        image: HomeImage2,
      },
      {
        id: "13",
        place: "Egypt",
        price: 169,
        image: HomeImage3,
      },
      {
        id: "14",
        place: "Baku",
        price: 131,
        image: HomeImage4,
      },
    ],
  },
  {
    id: "2",
    name: "EcoTourism Adventure",
    list: [
      {
        id: "21",
        place: "Bahamas",
        price: 769,
        image: HomeImage3,
      },
      {
        id: "22",
        place: "St. Lucia",
        price: 566,
        image: HomeImage4,
      },
      {
        id: "23",
        place: "Cozumel",
        price: 820,
        image: HomeImage2,
      },
      {
        id: "24",
        place: "Singapore",
        price: 720,
        image: HomeImage1,
      },
    ],
  },
  {
    id: "3",
    name: "Romantic Getaway",
    list: [
      {
        id: "31",
        place: "Barcelona",
        price: 459,
        image: HomeImage2,
      },
      {
        id: "32",
        place: "Brazil",
        price: 539,
        image: HomeImage3,
      },
      {
        id: "33",
        place: "Spain",
        price: 720,
        image: HomeImage1,
      },
      {
        id: "34",
        place: "Singapore",
        price: 720,
        image: HomeImage4,
      },
    ],
  },
];
