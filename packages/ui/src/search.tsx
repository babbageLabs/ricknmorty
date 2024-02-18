'use client'
import { useRef, useState } from 'react';
import { getLocations, getCharacters, getEpisodes, getCharacter, getLocation, Location } from 'rickmortyapi'


enum Filter {
    All = 'all',
    LocationName = 'lName',
    CharacterName = 'cName',
    EpisodeName = 'eName'
}

const apiFilters = [
    {
        label: 'All',
        value: Filter.All
    },
    {
        label: 'Location Name',
        value: Filter.LocationName
    },
    {
        label: 'Character Name',
        value: Filter.CharacterName
    },
    {
        label: 'Episode Name',
        value: Filter.EpisodeName
    }
]


export function SearchCmd({
    className,
    setLocations
}: {
    className?: string;
    setLocations: (locations: Location[]) => void
}): JSX.Element {
    const ref = useRef(null)
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const [filters, setFilters] = useState(Filter.LocationName)

    async function getItems() {
        setLoading(true)
        let locations: Location[] = []
        let locationIds: number[] = []
        let characterIds: number[] = []

        switch (filters) {
            case Filter.CharacterName:
                locationIds = (await getCharacters({
                    name: search
                }))
                    .data.results?.map((c) => c.location.url.split('/').pop() as string)
                    .map((c) => +c) || []
                console.log(locationIds)
                break;
            case Filter.EpisodeName:
                characterIds = ((await getEpisodes({ name: search })).data.results || [])
                    .map((c) => c.characters)
                    .flat()
                    .map((c) => c.split('/').pop() as string)
                    .map((c) => +c) || []
                locationIds = (await getCharacter(characterIds)).data.map((c) => c.location.url.split('/').pop() as string).map((c) => +c)
                break;
            default:
                if (search.length === 0) {
                    locations = (await getLocations({
                        page: 1
                    })).data.results || []
                    break;
                } else {
                    locations = (await getLocations(
                        {
                            name: search
                        }
                    )).data.results || []
                }
                break;
        }

        if (locationIds.length) {
            locations = (await getLocation(locationIds)).data
        }

        if (locations.length) {
            setLocations(locations)
        }
        setLoading(false)
    }

    return (
        <div className={`flex items-center flex-wrap px-2`}>
            <div className='p-1'>
                <input
                    ref={ref}
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            getItems();
                        }
                    }}
                    placeholder="Search..."
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>


            <div>
                <select
                    title="Filter"
                    className='p-1'
                    value={filters}
                    onChange={(e) => setFilters(e.target.value as Filter)}
                >
                    {
                        apiFilters.map((filter, i) => (
                            <option key={i} value={filter.value}>{filter.label}</option>
                        ))
                    }
                </select>
            </div>

            <div>
                <button
                    onClick={getItems}
                    className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Search
                </button>
                {
                    search.length > 0 && <button
                        onClick={() => {
                            setSearch('');
                            setFilters(Filter.LocationName);
                            getItems();
                        }}
                        className="px-4 py-2 ml-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Reset
                    </button>
                }
            </div>
        </div>
    )
}
