"use client";
import Container from "@/components/Container";
import Header from "@/components/Header";
import "@/utils/i18n";
import { useTranslation } from "react-i18next";

export default function BreathConscious() {
  const { t } = useTranslation();
  return (
    <Container>
      <Header icon="breath_1" title="breath_1" />
      <div className="flex w-full flex-col items-center">
        <div className="mt-12 space-y-2 text-start max-sm:px-12">
          <p>{t("screen_conscious_text_1")}</p>
          <p>{t("screen_conscious_text_2")}</p>
          <p>{t("screen_conscious_text_3")}</p>
        </div>
      </div>
    </Container>
  );
}
