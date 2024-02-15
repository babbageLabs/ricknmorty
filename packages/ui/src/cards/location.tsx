import { PlanetIcon } from '../icons'
import {
    Location
} from 'rickmortyapi'


export function LocationCard({
    location,
    onClick
}: {
    location: Location,
    onClick: (location: Location) => void
}): JSX.Element {
    return (<div className="max-w-sm w-full lg:max-w-full flex w-full" onClick={() => { onClick(location) }}>
        <div className="h-48 lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l" title="Woman holding a mug">
            {/* <image href={location.residents[0] || "#"} alt="rickmorty" width={"100"} height={"200"} /> */}
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal flex-1">
            <div className="">
                <p className="text-sm text-gray-600 flex items-center">
                    <PlanetIcon width='50px' height='40px' />
                    {location.type}
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">{location.name}</div>
                <div className="text-sm">
                    <p className="text-gray-900 leading-none">Dimension : {location.dimension}</p>
                    <p className="text-gray-600">Created: {new Date(location.created).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    </div>)
}
