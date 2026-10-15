import type { ReactNode } from "react";

type Props = {
  title: string;
  /** Small line above the title, for example the series years. */
  kicker?: string | null;
  children?: ReactNode;
};

export default function PageHeader({ title, kicker, children }: Props) {
  return (
    <header className="reveal pb-10 pt-10 md:pb-14 md:pt-16">
      {kicker && <p className="text-muted">{kicker}</p>}
      <h1 className="mt-1 font-serif text-[2.5rem] leading-[1.05] tracking-tight md:text-[3.5rem]">{title}</h1>
      {children}
    </header>
  );
}
