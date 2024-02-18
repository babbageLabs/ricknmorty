'use client'
import { PlanetIcon } from '../icons'
import {
    Location
} from 'rickmortyapi'
import { useEffect } from 'react'


export function LocationCard({
    location,
    onClick,
    selected
}: {
    location: Location,
    onClick: (location: Location) => void,
    selected?: Location
}): JSX.Element {
    return (<div className={`max-w-sm p-1 w-full lg:max-w-full flex w-full  ${location.id === selected?.id ? 'bg-blue-600' : ''}`} onClick={() => { onClick(location) }}>

        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-2 flex flex-col justify-between leading-normal flex-1">
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
