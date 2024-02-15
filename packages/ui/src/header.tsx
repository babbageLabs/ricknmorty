export function Header({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <header className="w-full flex">
      <section className="p-2">
        <h1 className="text-2xl font-bold">Hello World</h1>
      </section>

      <section className="flex flex-1">{children}</section>

      <section></section>
    </header>
  );
}
