import type { SidebarItemType } from "src/utils/types";

export const SidebarItems: SidebarItemType[] = [
  {
    id: "1",
    label: "Upcoming",
    route: "/my-trips/upcoming-trips",
    active: false,
  },
  {
    id: "2",
    label: "Current",
    route: "/my-trips/current-trips",
    active: true,
  },
  {
    id: "3",
    label: "Past",
    route: "/my-trips/past-trips",
    active: false,
  },
  {
    id: "4",
    label: "Saved",
    route: "/my-trips/saved-trips",
    active: false,
  },
];
