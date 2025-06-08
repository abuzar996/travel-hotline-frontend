import type { SurveyItemType } from "src/utils/types";
import Music from "src/assets/emoji_music.png";
import Umbrella from "src/assets/emoji_beach.png";
import SmallAirplane from "src/assets/emoji_smallairplane.png";
import Shopping from "src/assets/emoji_shopping.png";
import Tower from "src/assets/emoji_yokyo.png";
import Food from "src/assets/emoji_steaming.png";
import Relaxation from "src/assets/emoji_smiling.png";
import Festival from "src/assets/emoji_bird.png";
import Camera from "src/assets/emoji_camera.png";
import Heart from "src/assets/emoji _sparkling.png";
import Family from "src/assets/emoji_family.png";
import Airplane from "src/assets/emoji_airplane.png";
export const surveyData: SurveyItemType[] = [
  {
    id: "1",
    label:
      "What time of day do you prefer to start your activities when traveling?",
    options: [
      {
        id: "11",
        value: "Afternoon Riser",
      },
      {
        id: "12",
        value: "Early Bird",
      },
      {
        id: "13",
        value: "Night Owl",
      },
    ],
  },
  {
    id: "2",
    label:
      "How would you describe your ideal travel experience in terms of activity level?",
    options: [
      {
        id: "21",
        value: "Relaxing and laid back",
      },
      {
        id: "22",
        value: "High energy and adventurous",
      },
      {
        id: "23",
        value: "Combo of relaxing & high energy ",
      },
    ],
  },
  {
    id: "3",
    label: "Tourist mode or blend in with the locals?",
    options: [
      {
        id: "21",
        value: "Combo of tourist mode & local mode",
      },
      {
        id: "22",
        value: "Blend in with the locals",
      },
      {
        id: "23",
        value: "Blend in with the locals",
      },
    ],
  },
  {
    id: "4",
    label:
      "What are your preferred accommodation options? Select all that apply",
    options: [
      {
        id: "21",
        value: "Luxury",
      },
      {
        id: "22",
        value: "Budget-friendly",
      },
      {
        id: "23",
        value: "Best reviews & recommendations",
      },
      {
        id: "24",
        value: "Unique & Off the beaten path",
      },
    ],
  },
  {
    id: "8",
    label: "What’s your approach to trying new experiences?",
    options: [
      {
        id: "21",
        value: "I’m open as long as they fit my budget",
      },
      {
        id: "22",
        value: "I’m not open to new experiences",
      },
      {
        id: "23",
        value: "I'm open if the reviews are good.",
      },
    ],
  },
  {
    id: "5",
    label: "How would you describe your preferred daily travel pace? ",
    options: [
      {
        id: "21",
        value: " I want to see & do everything",
      },
      {
        id: "22",
        value: "Balance of adventure and relaxation",
      },
      {
        id: "23",
        value: "Leisurely and relaxed all the time",
      },
    ],
  },
  {
    id: "6",
    label: "How would you describe your approach to travel budgeting?",
    options: [
      {
        id: "21",
        value: "I compare reviews before anything",
      },
      {
        id: "22",
        value: "Convenience over cost",
      },
      {
        id: "23",
        value: "Best deals & discounts ",
      },
    ],
  },
  {
    id: "7",
    label: "What’s your usual budget when traveling?",
    options: [
      {
        id: "21",
        value: "It depends on the trip",
      },
    ],
  },
  {
    id: "9",
    label: "Select icons that represent you to enhance your journey",
    options: [],
  },
  {
    id: "10",
    label: "Congrats! You are an Effortless Explorer!",
    options: [],
  },
  {
    id: "11",
    label: "To create your account and Save your personality",
    options: [],
  },
];

export const iconData: { icon: string; label: string; id: string }[] = [
  { id: "1", label: "Music & Dance", icon: Music },
  { id: "2", label: "Beach vibes", icon: Umbrella },
  { id: "3", label: "Heights", icon: SmallAirplane },
  { id: "4", label: "Shopping", icon: Shopping },
  { id: "5", label: "Tourism", icon: Tower },
  { id: "6", label: "Food/Culinary", icon: Food },
  { id: "7", label: "Relaxation", icon: Relaxation },
  { id: "8", label: "Local festivals", icon: Festival },
  { id: "9", label: "Photography", icon: Camera },
  { id: "10", label: "Romance", icon: Heart },
  { id: "11", label: "Family & friends", icon: Family },
  { id: "12", label: "All day trips", icon: Airplane },
];
