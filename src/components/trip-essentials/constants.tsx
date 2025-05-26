import { Requirements, type TripRequirements } from "src/utils/types";
import type { TripEssentialType } from "src/utils/types";
import { StarIcon } from "lucide-react";
import { Image } from "antd";
import Excursion from "src/assets/excursion.png";
import HotelVector from "src/assets/vectors/stay-2.svg";
import CarVector from "src/assets/vectors/car-2.svg";
import Location from "src/assets/vectors/loc-2.svg";
import Cancel from "src/assets/vectors/cancel.svg";
import Breakfast from "src/assets/vectors/breakfast.svg";
import Dog from "src/assets/vectors/pdog.svg";
import Hotel from "src/assets/hotel.png";
import Clock from "src/assets/vectors/clock.svg";
import Element from "src/assets/vectors/element.svg";
import Dot from "src/assets/vectors/dots.svg";
import Reservation from "src/assets/vectors/reservation.svg";
import Walking from "src/assets/vectors/walking.svg";
import Restaurant from "src/assets/restaurants.png";
import Car from "src/assets/car.png";
import Transmission from "src/assets/vectors/transmission.svg";
import Doors from "src/assets/vectors/doors.svg";
import Users from "src/assets/vectors/users.svg";
import Flight from "src/assets/flight.png";
import Plane from "src/assets/vectors/plane.svg";
export const sidebarData: TripRequirements[] = [
  {
    id: "1",
    label: Requirements.FLIGHT,
    value: Requirements.FLIGHT,
  },
  {
    id: "2",
    label: Requirements.CAR,
    value: Requirements.CAR,
  },
  {
    id: "3",
    label: Requirements.STAY,
    value: Requirements.STAY,
  },
  {
    id: "4",
    label: Requirements.EXCURSIONS,
    value: Requirements.EXCURSIONS,
  },
  {
    id: "5",
    label: Requirements.RESTAURANTS,
    value: Requirements.RESTAURANTS,
  },
];

export const tripData: TripEssentialType[] = [
  {
    id: "1",
    type: Requirements.STAY,
    label: "Radisson Hotel",
    price: "$250/",
    offers: [
      {
        id: "11",
        label: "Parking",
        value: "Free",
        icon: <Image src={CarVector} />,
      },
      {
        id: "12",
        label: "Breakfast",
        value: "Included",
        icon: <Image src={Breakfast} />,
      },
      {
        id: "13",
        label: "Fee Cancelation",
        value: "24h",
        icon: <Image src={Cancel} />,
      },
      {
        id: "14",
        label: "Pets",
        value: "$250 Deposit",
        icon: <Image src={Dog} />,
      },
    ],
    image: Hotel,
    stats: [
      {
        id: "1",
        label: "4.8/5",
        icon: <StarIcon size={18} fill="#FFDA67" color="#FFDA67" />,
      },
      {
        id: "2",
        label: "Hotel",
        icon: <Image src={HotelVector} />,
      },
      {
        id: "3",
        label: "12 km from you",
        icon: <Image src={Location} />,
      },
    ],
  },
  {
    id: "2",
    type: Requirements.FLIGHT,
    label: "Air India",
    price: "$250/",
    offers: [
      {
        id: "11",
        label: "Parking",
        value: "Free",
        icon: <Image src={CarVector} />,
      },
      {
        id: "12",
        label: "Breakfast",
        value: "Included",
        icon: <Image src={Breakfast} />,
      },
      {
        id: "13",
        label: "Fee Cancelation",
        value: "24h",
        icon: <Image src={Cancel} />,
      },
      {
        id: "14",
        label: "Pets",
        value: "$250 Deposit",
        icon: <Image src={Dog} />,
      },
    ],
    image: Flight,
    stats: [
      {
        id: "1",
        label: "4.8/5",
        icon: <StarIcon size={18} fill="#FFDA67" color="#FFDA67" />,
      },
      {
        id: "2",
        label: "Non stop",
        icon: <Image src={Plane} />,
      },
      {
        id: "3",
        label: "Personal Items",
        icon: <Image src={Doors} />,
      },
      {
        id: "4",
        label: "Economy",
        icon: <Image src={Users} />,
      },
    ],
  },
  {
    id: "3",
    type: Requirements.EXCURSIONS,
    label: "Radisson Hotel",
    price: "$250/",
    offers: [
      {
        id: "11",
        label: "Duration",
        value: "7hrs",
        icon: <Image src={Clock} />,
      },
      {
        id: "12",
        label: "Main Element",
        value: "Air",
        icon: <Image src={Element} />,
      },
      {
        id: "13",
        label: "Free Cancelation",
        value: "24h",
        icon: <Image src={Dot} />,
      },
    ],
    image: Excursion,
    stats: [
      {
        id: "1",
        label: "4.8/5",
        icon: <StarIcon size={18} fill="#FFDA67" color="#FFDA67" />,
      },
    ],
  },
  {
    id: "4",
    type: Requirements.RESTAURANTS,
    label: "Radisson Hotel",
    price: "$250/",
    offers: [
      {
        id: "41",
        label: "Reservations",
        value: "Yes",
        icon: <Image src={Reservation} />,
      },
      {
        id: "42",
        label: "Walk-in",
        value: "Yes",
        icon: <Image src={Walking} />,
      },
    ],
    image: Restaurant,
    stats: [
      {
        id: "1",
        label: "4.8/5",
        icon: <StarIcon size={18} fill="#FFDA67" color="#FFDA67" />,
      },
      {
        id: "2",
        label: "24/7",
        icon: <Image src={Clock} />,
      },
    ],
  },
  {
    id: "5",
    type: Requirements.CAR,
    label: "Radisson Hotel",
    price: "$250/",
    offers: [
      {
        id: "41",
        label: "Reservations",
        value: "",
        icon: <Image src={Reservation} />,
      },
      {
        id: "42",
        label: "Walk-in",
        value: "",
        icon: <Image src={Walking} />,
      },
    ],
    image: Car,
    stats: [
      {
        id: "1",
        label: "4.8/5",
        icon: <StarIcon size={18} fill="#FFDA67" color="#FFDA67" />,
      },
      {
        id: "2",
        label: "Automatic",
        icon: <Image src={Transmission} />,
      },
      {
        id: "3",
        label: "Doors",
        icon: <Image src={Doors} />,
      },
      {
        id: "4",
        label: "People",
        icon: <Image src={Users} />,
      },
    ],
  },
];
