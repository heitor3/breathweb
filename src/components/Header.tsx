import * as breath from "@/assets/IconBreath";
import Image from "next/image";

const BreathType = {
  breath_1: breath.AnxietyIcon,
  breath_2: breath.BothLungIcon,
  breath_3: breath.BreathDeepIcon,
  breath_4: breath.BreathIcon,
  breath_5: breath.LungBreathIcon,
  breath_6: breath.LungSideIcon,
};

const BreathName = {
  breath_1: "title_breath_1",
  breath_2: "title_breath_2",
  breath_3: "title_breath_3",
  breath_4: "title_breath_4",
  breath_5: "title_breath_5",
  breath_6: "title_breath_6",
};

type IconBreath = keyof typeof BreathType;
type NameBreath = keyof typeof BreathName;

type HeaderBreathProps = {
  icon: IconBreath;
  title: NameBreath;
};

export default function Header({ icon, title }: HeaderBreathProps) {
  const image = BreathType[icon];
  const text = BreathName[title];

  return (
    <div>
      <Image src={image} width={60} height={60} alt="text" />
      <p>{text}</p>
    </div>
  );
}
