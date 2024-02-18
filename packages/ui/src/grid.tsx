import { useEffect, useId, useRef, useState } from "react";

export function Grid({
  children,
  onLoadMore
}: {
  children: React.ReactNode;
  onLoadMore?: () => void;
}): JSX.Element {
  const lastElementRef = useRef<HTMLDivElement | null>(null);
  const id = useId();
  const observerTarget = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | { message: string }>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries?.[0]?.isIntersecting) {
          console.log("load more", 11111111111111111111111);
          onLoadMore && onLoadMore();
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [children]);


  return (
    <section id={id} key={id} className="flex flex-col w-full overflow-y-auto overflow-x-hidden">
      {children}
    </section>
  );
}
