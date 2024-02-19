'use client';
import { useEffect, useId, useRef } from "react";

export function Grid({
  children,
  onLoadMore
}: {
  children: React.ReactNode;
  onLoadMore?: () => void;
}): JSX.Element {

  const id = useId();
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries?.[0]?.isIntersecting) {
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
