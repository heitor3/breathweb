"use client";
import Container from "@/components/Container";
import Header from "@/components/Header";
import "@/utils/i18n";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function BreathCompleteDeep() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Steps.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Steps.length - 1 : prevIndex - 1,
    );
  };

  const Steps = [
    {
      id: "screen_alternate_1",
      steps: ["screen_alternate_2", "screen_alternate_3"],
    },
    {
      id: "screen_alternate_4",
      steps: ["screen_alternate_5", "screen_alternate_6", "screen_alternate_7"],
    },
    {
      id: "screen_alternate_9",
      steps: ["screen_alternate_8", "screen_alternate_10"],
    },
  ];

  return (
    <Container isColumn>
      <Header icon="breath_6" title="breath_6" />
      <div className="flex h-full w-screen flex-col items-center justify-center">
        <div className="lg:mt-14">
          <div className="overflow-hidde mx-auto w-full max-w-lg">
            <div className="h-[260px] rounded p-6">
              <h3 className="mb-2 text-2xl font-bold">
                {t(Steps[currentIndex].id)}
              </h3>
              <ul className="mt-4 list-inside list-disc">
                {Steps[currentIndex].steps.map((step, index) => (
                  <li key={index} className="text-gray-700">
                    {t(step)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-around">
            <button
              onClick={prevSlide}
              className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
            >
              <ArrowRight />
            </button>
          </div>
          <div className="justify mt-12 flex flex-col items-center space-y-6 md:mt-16 md:space-y-10">
            <p>{t("screen_alternate_11")}</p>
            <p>
              {t("screen_alternate_12")}
              <strong>{count}</strong>
            </p>
            <div className="flex w-80 justify-evenly">
              <button
                onClick={() => setCount(count + 1)}
                aria-label="Start Button"
                className="h-11 w-24 rounded-md bg-lime-500"
              >
                {t("screen_alternate_Start")}
              </button>
              <button
                onClick={() => setCount(0)}
                aria-label="Stop Button"
                className="h-11 w-24 rounded-md bg-red-500"
              >
                {t("screen_alternate_Stop")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
