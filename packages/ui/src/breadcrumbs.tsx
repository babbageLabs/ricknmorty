"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Breadcrumbs(): JSX.Element {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((p) => p);

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2">
        <li>
          <Link href="/">
            <span className="text-blue-500 hover:underline">Home</span>
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;

          return (
            <li key={path}>
              <Link href={path}>
                <span className="text-blue-500 hover:underline">
                  {" "}
                  {`> ${segment}`}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
