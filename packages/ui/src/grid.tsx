export function Grid({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <section className="flex flex-row flex-wrap h-full w-full space-x-5 overflow-y-auto overflow-x-hidden">
      {children}
      <style>{`
        @media (max-width: 768px) {
          .flex-row {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
