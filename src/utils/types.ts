export interface ItemType {
  label: string;
  id: string;
  active: boolean;
  icon: React.ReactNode;
  route: string;
}

export interface ImageViewType {
  value: string;
  id: string;
}

export interface TripItem {
  id: string;
  place: string;
  price: number;
  image: string;
}
export interface TripOption {
  name: string;
  id: string;
  list: TripItem[];
}
export enum ViewType {
  TAB = "tab",
  LIST = "list",
}
export enum TripOptionType {
  SAVE = "save",
  ITINERARY = "itinerary",
  CART = "cart",
}
