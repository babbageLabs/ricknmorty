'use client'

import {
    Location,
} from 'rickmortyapi'
import { Grid } from '../grid';
import { ResidentCard } from '../cards/resident';

export function LocationPreview({
    location
}: {
    location: Location;
}): JSX.Element {
    return (<section id="preview" className="h-full w-full shadow overflow-y-auto">
        <div className='text-center w-full'>
            <h1 className="text-2xl font-bold">{location.name}</h1>
            <p className="text-gray-500">{location.type}</p>
            <p className="text-gray-500">{location.dimension}</p>
        </div>
        <Grid>
            <div id='characters' className='flex flex-wrap justify-center items-center p-2'>
                {location.residents.map((resident, i) => (<ResidentCard
                    key={`resident-${i}`} url={resident}
                />))}
            </div>
        </Grid>

    </section>)
}
