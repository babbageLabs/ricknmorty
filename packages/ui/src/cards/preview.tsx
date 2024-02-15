import {
    Location
} from 'rickmortyapi'


export function LocationPreview({
    location
}: {
    location: Location;
}): JSX.Element {
    return (<div className="h-full w-full shadow">
        <h1>{location.name}</h1>
        <p>{location.type}</p>
        <p>{location.dimension}</p>
        <div>
            <p>Residents</p>
            <ul>
                {location.residents.map((resident: Character) => (
                    <li key={resident.id}>{resident.name}</li>
                ))}
            </ul>
        </div>

    </div>)
}
