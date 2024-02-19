"use client";

import { Grid } from "@repo/ui/grid";
import { LocationCard, LocationPreview } from "@repo/ui/cards";
import { Location } from "rickmortyapi";
import { useState } from "react";
import { SearchCmd } from "@repo/ui/SearchCmd";

export function Home({ locations }: { locations: Location[] }): JSX.Element {
  const [location, setPreviewLocation] = useState<Location>();
  const [searchResults, setSearchResults] = useState<Location[]>([]);

  const onPreview = (location: Location) => {
    setPreviewLocation(location);
  };

  return (
    <section className="flex overflow-x-hidden overflow-y-hidden w-full h-full">
      <article className="h-full flex-1 overflow-y-auto ">
        <div
          className="w-full min-h-20 bg-gray-200 flex justify-center items-center rounded py-1"
          style={{ position: "sticky", top: 0 }}
        >
          <h1>Locations</h1>
          <SearchCmd setLocations={setSearchResults} />
        </div>
        <Grid onLoadMore={() => { }}>
          {(searchResults.length ? searchResults : locations).map((loc) => (
            <div
              key={`location-${loc.id}`}
              className="rounded w-full locations"
            >
              <LocationCard
                selected={location}
                location={loc}
                onClick={onPreview}
              />
            </div>
          ))}
        </Grid>
      </article>

      <aside className="w-3/5 h-full overflow-y-hidden">
        {!location && <div className="h-full w-full flex items-center justify-center" >
          <div>
            <h1 className="text-center">Select a location to preview</h1>
          </div>
        </div>
        }
        {!!location && <LocationPreview location={location} />}
      </aside>
    </section>
  );
}
