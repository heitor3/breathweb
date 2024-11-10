import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  isColumn?: boolean;
};

function Container({ children, isColumn = false }: ContainerProps) {
  const exposure = isColumn ? "flex-row max-lg:flex-col" : "flex-col";
  return (
    <main className={`flex ${exposure} justify-center md:max-w-[1440px]`}>
      {children}
    </main>
  );
}

export default Container;
