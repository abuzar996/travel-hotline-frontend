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
export enum Requirements {
  FLIGHT = "Flight",
  CAR = "Car",
  STAY = "Stay",
  EXCURSIONS = "Excursions",
  RESTAURANTS = "Restaurants",
}
export interface TripRequirements {
  id: string;
  label: Requirements;
  value: Requirements;
}

export interface TripEssentialsStat {
  label: string;
  id: string;
  icon: React.ReactNode;
}
export interface TripEssentialsOffer {
  id: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}
export interface TripEssentialType {
  headLabel: string;
  type: Requirements;
  offers: TripEssentialsOffer[];
  stats: TripEssentialsStat[];
  label: string;
  id: string;
  price: string;
  image: string;
}

export type ItemSelectorCardType = {
  type: Requirements;
  label: string;
  image: string;
};

export enum PlaneSeatStatus {
  AVAILABLE = "Available",
  SELECTED = "Selected",
  NOT_AVAILABLE = "Not Available",
}

export interface PlaneSeatDataType {
  status: PlaneSeatStatus;
  id: string;
  color: string;
  text: string;
}
