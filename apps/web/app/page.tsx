import { Header } from "@repo/ui/header";
import { SearchBar } from "@repo/ui/searchBar.tsx";

export default function Page(): JSX.Element {
  return (
    <main className="h-full w-full">
      <Header>
        <nav>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </Header>
      <section>
        <SearchBar />
      </section>
    </main>
  );
}
