import type { TripInfoItemType } from "src/utils/types";
import Location from "src/assets/Location-Pin.png";
import Calendar from "src/assets/vectors/calendar.svg";
import Target from "src/assets/vectors/target.svg";
export const TripInfoData: TripInfoItemType[] = [
  {
    id: "2",
    icon: Target,
    label: "Itinerary:",
    value: "74534690879",
    style: { fontWeight: 400, fontSize: 14, color: "#757575" },
  },
  {
    id: "1",
    icon: Location,
    label: "",
    value: "Thailand",

    style: { fontWeight: 400, fontSize: 14, color: "#757575" },
  },
  {
    id: "3",
    icon: Calendar,
    label: "",
    value: "Sep 12 - 23",
    style: { fontWeight: 400, fontSize: 14, color: "#757575" },
  },
];
