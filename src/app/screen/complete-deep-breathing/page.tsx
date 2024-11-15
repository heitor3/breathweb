"use client";
import Container from "@/components/Container";
import Header from "@/components/Header";
import TimerCircle from "@/components/TimerCircle";
import "@/utils/i18n";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function BreathCompleteDeep() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funções para navegar no carrossel
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
      id: "screen_deep_1",
      steps: [
        "screen_deep_2",
        "screen_deep_3",
        "screen_deep_4",
        "screen_deep_5",
      ],
    },
    {
      id: "screen_deep_6",
      steps: ["screen_deep_7", "screen_deep_8"],
    },
    {
      id: "screen_deep_9",
      steps: ["screen_deep_10", "screen_deep_11"],
    },
  ];

  return (
    <Container isColumn>
      <Header icon="breath_5" title="breath_5" />
      <div className="flex h-full w-screen flex-col items-center justify-center">
        <div className="mt-4 lg:mt-14">
          <div className="mx-auto w-full max-w-lg overflow-hidden">
            <div className="rounded p-6 shadow">
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

          <div className="mt-16 flex items-center justify-around">
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
        </div>
      </div>
    </Container>
  );
}
