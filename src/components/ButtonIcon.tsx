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
  colorFrom: string;
  colorTo: string;
};

export function ButtonIcon({
  icon,
  title,
  route,
  colorFrom,
  colorTo,
}: ButtonIconProps) {
  const breathIcon = BreathType[icon];

  return (
    <Link href={route}>
      <div className="flex items-center justify-center text-center flex-col group relative">
        <button
          className={`relative z-10 border-[1px] border-solid border-dark-background rounded-lg p-1 group-hover:before:opacity-60 before:opacity-0 before:absolute before:inset-1 before:-z-10 before:rounded-lg before:bg-gradient-to-r ${colorFrom} ${colorTo} before:blur-lg before:transition-opacity before:duration-300`}
        >
          <Image
            src={breathIcon}
            width={60}
            height={60}
            alt={title}
            className="md:w-20"
          />
        </button>
        <p
          className={`relative z-10 mt-2 button-icon-title group-hover:before:opacity-100 before:opacity-0 before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-r ${colorFrom} ${colorTo} before:blur-lg before:transition-opacity before:duration-300`}
        >
          {title}
        </p>
      </div>
    </Link>
  );
}
