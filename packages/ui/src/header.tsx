export function Header({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <header className="w-full flex sticky top-0 bg-white shadow justify-center space-x-4 p-2">
      <section className="">
        <h1 className="text-2xl font-bold">Hello World</h1>
      </section>

      <section className="flex flex-1">{children}</section>

      <section></section>
    </header>
  );
}
