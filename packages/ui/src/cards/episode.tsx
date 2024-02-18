'use client'
import { useEffect, useState } from 'react';
import {
    Episode,
    getEpisode
} from 'rickmortyapi'

export function EpisodeCard({
    url,
}: {
    url: string,
}): JSX.Element {
    const [episode, setEpisode] = useState<Episode>()
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        let id = url.split('/').pop();

        if (!id || isNaN(+id)) {
            return
        }
        setIsLoading(true)
        getEpisode(+id)
            .then((data) => {
                setEpisode(data.data)
            })
            .finally(() => {
                setIsLoading(false)
            })

    }, [url])

    return (
        <>
            {episode && !isLoading ? (
                <div className="max-w-sm rounded overflow-hidden shadow p-2 m-1">
                    <div className="px-6 py-4 w-auto">
                        <div className="font-bold text-xl z-10 mt-2 text-blue-500 hover:underline hover:text-green hover:shadow-text-lg">{episode?.name}</div>
                    </div>
                    <div className="p-1">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{episode?.episode}</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{episode?.air_date}</span>
                    </div>
                </div>
            ) : (
                <div className="max-w-sm rounded overflow-hidden shadow w-full p-2 animate-pulse">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 bg-gray-200 h-6 w-1/2"></div>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-4 w-1/4"></span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-4 w-1/4"></span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-4 w-1/4"></span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-4 w-1/4"></span>
                    </div>
                </div>
            )}
        </>
    );
}
