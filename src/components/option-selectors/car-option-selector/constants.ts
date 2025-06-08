interface CarOptionFilter {
  id: string;
  label: string;
  checked: boolean;
}
export const filterItems: CarOptionFilter[] = [
  { label: "Car", checked: true, id: "1" },
  { label: "SUV", checked: false, id: "2" },
  { label: "Van", checked: false, id: "4" },
  { label: "Convertible", checked: false, id: "3" },
];
