"use client";
import { ButtonIcon } from "@/components/ButtonIcon";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="flex h-screen flex-col items-center">
      <div className="mt-12 flex h-40 w-screen flex-col items-center text-center">
        <h1>{t("wellcome")}</h1>
        <p className="mt-2 md:text-[22px]">{t("select")}</p>
      </div>
      <div className="grid grid-cols-3 gap-6 gap-y-12 px-2 md:mt-6 lg:h-3/6 lg:gap-16">
        <ButtonIcon
          icon="breath_1"
          title={t("title_breath_1")}
          colorFrom="before:from-red-300"
          colorTo="before:to-lime-600"
          route="/screen/conscious-breathing"
        />
        <ButtonIcon
          icon="breath_2"
          title={t("title_breath_2")}
          colorFrom="before:from-fuchsia-300"
          colorTo="before:to-pink-600"
          route="/screen/4-7-8-breathing"
        />
        <ButtonIcon
          icon="breath_3"
          title={t("title_breath_3")}
          colorFrom="before:from-blue-300"
          colorTo="before:to-purple-600"
          route="/screen/abdominal-breathing"
        />
        <ButtonIcon
          icon="breath_4"
          title={t("title_breath_4")}
          colorFrom="before:from-sky-300"
          colorTo="before:to-cyan-600"
          route="/screen/square-breathing"
        />
        <ButtonIcon
          icon="breath_5"
          title={t("title_breath_5")}
          colorFrom="before:from-pink-300"
          colorTo="before:to-rose-600"
          route="/screen/complete-deep-breathing"
        />
        <ButtonIcon
          icon="breath_6"
          title={t("title_breath_6")}
          colorFrom="before:from-indigo-300"
          colorTo="before:to-teal-600"
          route="/screen/alternate-breathing"
        />
      </div>
    </main>
  );
}
