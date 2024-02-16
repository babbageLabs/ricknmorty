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
        <section className="w-full flex overflow-x-hidden overflow-y-hidden h-full justify-center items-center">
            <article className="h-full flex-1 ">
                <h1>Locations</h1>
                <Grid>
                    {locations.map((loc) => (
                        <div className="rounded w-full p-1">
                            <LocationCard
                                selected={location}
                                key={`location-${loc.id}`}
                                location={loc}
                                onClick={onPreview} />
                        </div>
                    ))}
                </Grid>
            </article>

            <aside className="w-1/2 h-full overflow-y-hidden">
                <h2>Aside</h2>
                {!!location && <LocationPreview location={location} />}
            </aside>
        </section>
    );
}
