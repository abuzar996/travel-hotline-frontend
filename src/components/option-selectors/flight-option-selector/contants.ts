interface FlightOptionFilter {
  id: string;
  label: string;
  checked: boolean;
}
export const filterItems: FlightOptionFilter[] = [
  { label: "Cheapest", checked: true, id: "1" },
  { label: "Recommended", checked: false, id: "2" },
  { label: "Nonstop", checked: false, id: "3" },
];
