import * as breath from "@/assets/IconBreath";
import Image from "next/image";
import Link from "next/link";

const BreathType = {
  breath_1: breath.AnxietyIcon,
  breath_2: breath.BothLungIcon,
  breath_3: breath.BreathDeepIcon,
  breath_4: breath.BreathIcon,
  breath_5: breath.LungBreathIcon,
  breath_6: breath.LungSideIcon,
};

type IconBreath = keyof typeof BreathType;

type ButtonIconProps = {
  icon: IconBreath;
  title: string;
  route: string;
};

export function ButtonIcon({ icon, title, route }: ButtonIconProps) {
  const breathIcon = BreathType[icon];

  return (
    <Link href={route}>
      <div className="flex items-center justify-center flex-col">
        <button className="border-[1px] border-solid border-dark-background rounded-lg p-1 w-14">
          <Image src={breathIcon} width={60} height={60} alt={title} />
        </button>
        <p className="mt-2 text-center button-icon-title">{title}</p>
      </div>
    </Link>
  );
}
