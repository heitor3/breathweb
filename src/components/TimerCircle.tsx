"use client";
import { useEffect, useState } from "react";

type TimerCircleProps = {
  colorSpin: string;
  colorBackGround: string;
  spinStart: boolean;
};

function TimerCircle({
  colorBackGround,
  colorSpin,
  spinStart,
}: TimerCircleProps) {
  const [spin, setSpin] = useState<string>("");

  useEffect(() => {
    if (spinStart === true) {
      setSpin("animate-spin-slow");
    } else {
      setSpin("");
    }
  }, [spinStart]);

  return (
    <div
      className={`h-36 w-36 ${spin} rounded-full border-[0.75rem] ${colorBackGround} ${colorSpin}`}
    />
  );
}

export default TimerCircle;
