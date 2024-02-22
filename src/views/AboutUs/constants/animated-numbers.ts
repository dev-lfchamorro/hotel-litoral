import { AnimatedNumbersProps } from "../../../components/AnimatedNumbers/types";

type AnimatedNumbersContent = {
  [key: string]: AnimatedNumbersProps[];
};

export const animatedNumbersContent: AnimatedNumbersContent = {
  section1: [
    { endValue: 23, text: "Quartos", sizeContent: "big", speed: 1800 },
    {
      endValue: 230,
      text: "Turistas este ano",
      sizeContent: "big",
      speed: 2200,
    },
    { endValue: 10, text: "Estacionamentos", sizeContent: "big", speed: 2500 },
  ],
};
