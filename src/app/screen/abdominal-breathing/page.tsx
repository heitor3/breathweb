"use client";
import Container from "@/components/Container";
import Header from "@/components/Header";
import "@/utils/i18n";
import { useTranslation } from "react-i18next";

export default function BreathAbdominal() {
  const { t } = useTranslation();
  return (
    <Container>
      <Header icon="breath_3" title="breath_3" />
      <div className="flex w-full flex-col items-center">
        <div className="mt-12 space-y-2 text-start max-sm:px-12">
          <p>{t("screen_abdominal_1")}</p>
          <p>{t("screen_abdominal_2")}</p>
          <p>{t("screen_abdominal_3")}</p>
          <p>{t("screen_abdominal_4")}</p>
          <p>{t("screen_abdominal_5")}</p>
        </div>
      </div>
    </Container>
  );
}
