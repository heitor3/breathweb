"use client";
import React, { useEffect, useState } from "react";
import { Home, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  BreathIcon,
  AnxietyIcon,
  BothLungIcon,
  BreathDeepIcon,
  LungBreathIcon,
  LungSideIcon,
} from "@/assets/IconBreath";
import { useTranslation } from "react-i18next";

export default function ToggleNavigationMenu() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
    console.log("path ", pathname);
  }, [pathname]);

  return (
    <div className="relative">
      {/* Botão para abrir/fechar o menu */}
      <button
        className="p-2 text-gray-700"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <Menu size={24} />
      </button>

      <div
        className={`fixed left-0 top-0 z-20 h-full bg-gray-800 text-white shadow-lg shadow-black transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-[46%] max-md:w-[100%]`}
      >
        <div className="p-4">
          <div className="flex w-full items-center justify-end">
            <button
              className="text-gray-400 hover:text-white"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <X size={36} />
            </button>
          </div>
          <nav className="mt-16">
            <ul className="space-y-6 p-2">
              {pathname === "/" ? null : (
                <a
                  href="/"
                  className="flex h-14 w-full items-center justify-center p-6 shadow-md shadow-gray-900 hover:text-gray-300"
                >
                  <li className="flex w-full flex-row items-center">
                    <Home size={20} className="mr-4 md:mr-12" />
                    Home
                  </li>
                </a>
              )}
              <a
                href="/screen/conscious-breathing"
                className="flex h-14 w-full items-center justify-center p-6 shadow-md shadow-gray-900 hover:text-gray-300"
              >
                <li className="flex w-full flex-row items-center max-md:text-sm">
                  <Image
                    src={AnxietyIcon}
                    alt="teste"
                    width={40}
                    height={40}
                    className="mr-4 md:mr-12"
                  />
                  {t("title_breath_1")}
                </li>
              </a>
              <a
                href="/screen/4-7-8-breathing"
                className="flex h-14 w-full items-center justify-center p-6 shadow-md shadow-gray-900 hover:text-gray-300"
              >
                <li className="flex w-full flex-row items-center max-md:text-sm">
                  <Image
                    src={BothLungIcon}
                    alt="teste"
                    width={40}
                    height={40}
                    className="mr-4 md:mr-12"
                  />
                  {t("title_breath_2")}
                </li>
              </a>
              <a
                href="/screen/abdominal-breathing"
                className="flex h-14 w-full items-center justify-center p-6 shadow-md shadow-gray-900 hover:text-gray-300"
              >
                <li className="flex w-full flex-row items-center max-md:text-sm">
                  <Image
                    src={BreathDeepIcon}
                    alt="teste"
                    width={40}
                    height={40}
                    className="mr-4 md:mr-12"
                  />
                  {t("title_breath_3")}
                </li>
              </a>
              <a
                href="/screen/square-breathing"
                className="flex h-14 w-full items-center justify-center p-6 shadow-md shadow-gray-900 hover:text-gray-300"
              >
                <li className="flex w-full flex-row items-center max-md:text-sm">
                  <Image
                    src={BreathIcon}
                    alt="teste"
                    width={40}
                    height={40}
                    className="mr-4 md:mr-12"
                  />
                  {t("title_breath_4")}
                </li>
              </a>
              <a
                href="/screen/complete-deep-breathing"
                className="flex h-14 w-full items-center justify-center p-6 shadow-md shadow-gray-900 hover:text-gray-300"
              >
                <li className="flex w-full flex-row items-center max-md:text-sm">
                  <Image
                    src={LungBreathIcon}
                    alt="teste"
                    width={40}
                    height={40}
                    className="mr-4 md:mr-12"
                  />
                  {t("title_breath_5")}
                </li>
              </a>
              <a
                href="/screen/alternate-breathing"
                className="flex h-14 w-full items-center justify-center p-6 shadow-md shadow-gray-900 hover:text-gray-300"
              >
                <li className="flex w-full flex-row items-center max-md:text-sm">
                  <Image
                    src={LungSideIcon}
                    alt="teste"
                    width={40}
                    height={40}
                    className="mr-4 md:mr-12"
                  />
                  {t("title_breath_6")}
                </li>
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
