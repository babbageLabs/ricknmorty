export function Grid({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <section className="flex flex-row flex-wrap h-full w-full overflow-y-auto overflow-x-hidden justify-center items-center">
      {children}
    </section>
  );
}
