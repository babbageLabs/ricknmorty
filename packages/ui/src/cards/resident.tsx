import { useEffect, useState } from 'react';
import {
    Character,
    getCharacter
} from 'rickmortyapi'
import Image from 'next/image'


export function ResidentCard({
    url,
}: {
    url: string,
}): JSX.Element {
    const [resident, setResident] = useState<Character>()
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        let id = url.split('/').pop();

        if (!id || isNaN(+id)) {
            return
        }
        setIsLoading(true)
        getCharacter(+id)
            .then((data) => {
                setResident(data.data)
            })
            .finally(() => {
                setIsLoading(false)
            })

    }, [url])

    return (
        <>
            {resident && !isLoading ? (
                <div className="max-w-sm rounded overflow-hidden shadow p-2 m-1">
                    <Image
                        className="rounded"
                        height={300}
                        width={380}
                        src={resident?.image || '#'}
                        alt={resident?.name}
                        loading='lazy'
                    />
                    <div className="px-6 py-4 w-auto">
                        <div className="font-bold text-xl z-10 mt-2 text-blue-500 hover:underline hover:text-green hover:shadow-text-lg">{resident?.name}</div>
                    </div>
                    <div className="p-1">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{resident?.gender}</span>
                        {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{resident?.episode[-1]}</span> */}
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{resident?.species}</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{resident?.status}</span>
                    </div>
                </div>
            ) : (
                <div className="max-w-sm rounded overflow-hidden shadow w-full p-2 animate-pulse">
                    <div className="bg-gray-200 h-360 w-full"></div>
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
