import { Header } from "@repo/ui/header";
import { SearchBar } from "@repo/ui/searchBar";
import { SearchCmd } from "@repo/ui/SearchCmd";

import { getLocations } from "rickmortyapi"
import { Home } from "./_components/home"

export default async function Page(): Promise<JSX.Element> {

  const locations = (await getLocations({ page: 1 })).data


  async function onSubmit() {
    "use server"
    const l = await getLocations({ page: 1 })
    console.log("submit", l);
  }

  return (
    <main className="h-full w-full px-2 overflow-x-hidden overflow-y-hidden flex flex-col">
      <section className="w-full">
        <Header >
          <div className="flex-1" />
        </Header>
      </section>

      <section className="w-full flex overflow-x-hidden overflow-y-auto h-full justify-center items-center">
        <Home locations={locations.results || []} />
      </section>
    </main>
  );
}
