interface CarOptionFilter {
  id: string;
  label: string;
  checked: boolean;
}
export const amenitiesfilterItems: CarOptionFilter[] = [
  { label: "Gym", checked: true, id: "1" },
  { label: "Airport shuttle", checked: false, id: "2" },
  { label: "Free Parking", checked: false, id: "4" },
  { label: "Pool", checked: false, id: "3" },
  { label: "Mini bar", checked: false, id: "5" },
  { label: "Breakfast Included", checked: false, id: "6" },
];

export const propertyfilterItems: CarOptionFilter[] = [
  { label: "Apartment", checked: true, id: "1" },
  { label: "Hotel", checked: false, id: "2" },
  { label: "Guest house", checked: false, id: "4" },
  { label: "Hostel", checked: false, id: "3" },
];
export const cancelationfilterItems: CarOptionFilter[] = [
  { label: "Fully refundable", checked: true, id: "1" },
  { label: "Reserve now, pay later", checked: false, id: "2" },
];
