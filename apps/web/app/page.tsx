import { Header } from "@repo/ui/header";
import { Grid } from "@repo/ui/grid";
import { SearchBar } from "@repo/ui/searchBar.tsx";
import { getLocations } from "rickmortyapi"

export default async function Page(): Promise<JSX.Element> {

  const locations = (await getLocations({ page: 1 })).data


  async function onSubmit() {
    "use server"
    const l = await getLocations({ page: 1 })
    console.log("submit", l);
  }

  console.log("locations", locations.results);

  return (
    <main className="h-full w-full p-2 overflow-x-hidden overflow-y-hidden">
      <Header>
        <nav className="flex">
          <ul className="flex p-2">
            <li className="px-2">
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </Header>
      <section className="justify-center w-full">
        <SearchBar onSubmit={onSubmit} />
      </section>

      <section className="h-full w-full flex overflow-y-hidden">
        <article className="w-3/4 h-full p-2">
          <h1>Locations</h1>
          <Grid>
            {locations.results?.map(({
              id,
              name,
              type,
            }) => (
              <div key={`location-${id}`} className="max-w-sm rounded overflow-hidden w-1/2">
                {/* <img className="w-full" src="path_to_your_image.jpg" alt="Sunset in the mountains" /> */}
                <div className="p-2">
                  <div className="font-bold text-xl mb-2">{name}</div>
                  <p className="text-gray-700 text-base">
                    {type}
                  </p>
                </div>
                <div className="px-6 py-4 flex items-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Button
                  </button>
                </div>
              </div>
            ))}
          </Grid>
        </article>

        <aside className="w-1/4 h-full p-2 ">
          <h2>Aside</h2>
        </aside>
      </section>
    </main>
  );
}
