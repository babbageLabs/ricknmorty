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



    return (<section className="h-full w-full shadow justify-center items-center overflow-y-auto">
        <div className='text-center w-full'>
            <h1>{location.name}</h1>
            <p>{location.type}</p>
            <p>{location.dimension}</p>
        </div>
        <div className='w-full'>
            <Grid>
                {location.residents.map((resident, i) => (<ResidentCard
                    key={`resident-${i}`} url={resident}
                />))}
            </Grid>
        </div>
    </section>)
}
