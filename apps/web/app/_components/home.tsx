'use client'

import { Grid } from "@repo/ui/grid";
import { LocationCard, LocationPreview } from "@repo/ui/cards";
import { Location } from "rickmortyapi"
import { useState } from "react";

export function Home({
    locations
}: {
    locations: Location[];
}): JSX.Element {

    const [location, setPreviewLocation] = useState<Location>()

    const onPreview = (location: Location) => {
        setPreviewLocation(location)
    }


    return (
        <section className="flex overflow-x-hidden overflow-y-hidden w-full h-full">
            <article className="h-full flex-1 overflow-y-auto ">
                <h1>Locations</h1>
                <Grid
                    onLoadMore={() => {
                        console.log("load more", 11111111111111111111111)
                    }}
                >
                    {locations.map((loc) => (
                        <div className="rounded w-full">
                            <LocationCard
                                selected={location}
                                key={`location-${loc.id}`}
                                location={loc}
                                onClick={onPreview} />
                        </div>
                    ))}
                </Grid>
            </article>

            <aside className="w-2/3 h-full overflow-y-hidden">
                <h2>Aside</h2>
                {!!location && <LocationPreview location={location} />}
            </aside>
        </section>
    );
}
