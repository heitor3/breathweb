"use client";
import Container from "@/components/Container";
import Header from "@/components/Header";
import TimerCircle from "@/components/TimerCircle";
import "@/utils/i18n";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Breath478() {
  const { t } = useTranslation();
  const [timerStart, setTimerStart] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [stage, setStage] = useState(1);
  const [breathe, setBreathe] = useState("");
  const [color, setColor] = useState("dark:text-amber-950");

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (stage === 1) {
      setBreathe("screen_487_6");
      setColor("border-lime-500");
    } else if (stage === 2) {
      setBreathe("screen_487_7");
      setColor("border-red-500");
    } else {
      setBreathe("screen_487_8");
      setColor("border-lime-500");
    }

    if (timerStart) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (stage === 1 && prevSeconds === 4) {
            setStage(2);
            return 0;
          } else if (stage === 2 && prevSeconds === 7) {
            setStage(3);
            return 0;
          } else if (stage === 3 && prevSeconds === 8) {
            setStage(1);
            return 0;
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000);
    } else {
      setColor("");
      setBreathe("");
      setStage(1);
      setSeconds(0);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timerStart, stage]);

  function handleStartClock() {
    setTimerStart(true);
  }
  function handleStopClock() {
    setTimerStart(false);
  }

  return (
    <Container isColumn={true}>
      <Header icon="breath_2" title="breath_2" />
      <div className="flex h-full w-screen flex-col items-center justify-center">
        <div className="mt-4 lg:mt-14">
          <p>{t("screen_487_1")}</p>
          <p>{t("screen_487_2")}</p>
          <p>{t("screen_487_3")}</p>
          <p>{t("screen_487_4")}</p>
        </div>
        <div className="mt-10 flex w-11/12 items-center justify-center">
          <p className="text-[72px]">{timerStart ? seconds : "0"}</p>
          <div className="absolute">
            <TimerCircle
              spinStart={timerStart}
              colorBackGround={color}
              colorSpin="border-t-light-background"
            />
          </div>
        </div>
        <p className="mt-12">
          {timerStart ? `${t(breathe)}` : `${t("screen_487_5")}`}
        </p>

        <div className="mt-12 flex min-w-80 flex-row items-center justify-around">
          <button
            onClick={handleStartClock}
            className="h-11 w-24 rounded-md bg-lime-500"
          >
            {t("screen_487_Start")}
          </button>
          <button
            onClick={handleStopClock}
            className="h-11 w-24 rounded-md bg-red-500"
          >
            {t("screen_487_Stop")}
          </button>
        </div>
      </div>
    </Container>
  );
}
