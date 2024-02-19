import { Header } from "@repo/ui/header";
import { Tabs } from "@repo/ui/tabs";
import { Breadcrumbs } from "@repo/ui/breadcrumbs";
import { getCharacter } from "rickmortyapi"
import Image from "next/image";
import { KV } from "@repo/ui/kv";
import { Grid } from "@repo/ui/grid";
import { EpisodeCard } from "@repo/ui/cards";
import { Notes } from "@repo/ui/notes";

export default async function Page({
    params
}: {
    params: {
        id: string
    }
}
): Promise<JSX.Element> {


    let charId = params.id
    if (charId === undefined) {
        return <></>
    }
    const character = (await getCharacter(+charId)).data

    return (
        <main className="h-full w-full px-2 overflow-x-hidden overflow-y-hidden flex flex-col">
            <section className="w-full">
                <Header>
                    <div className="flex, flex-1 justify-center items-center text-center">
                        <h3 className="text bg-center font-mono font-medium text-2xl">{character.name}</h3>
                    </div>
                </Header>
                <Breadcrumbs />
            </section>

            <section className="w-full flex flex-col overflow-x-hidden overflow-y-auto h-full py-3 items-center">
                <div className="flex flex-col items-center">
                    <Image src={character.image} alt={character.name} width={100} height={100} className="rounded-full" />
                    <h1 className="text-2xl font-bold">{character.name}</h1>
                    <p className="text-gray-500">{character.species}</p>
                </div>
                <div className="flex flex-col justify-center items-center h-full w-2/3">
                    <Tabs
                        tabs={[
                            {
                                label: "About",
                                content: (
                                    <div className="flex flex-col items-center">
                                        <KV label="Gender">
                                            {character.gender}
                                        </KV>
                                        <KV label="Status">
                                            {character.status}
                                        </KV>
                                        <KV label="Locations">
                                            {character.location.name}
                                        </KV>
                                    </div>
                                )
                            },
                            {
                                label: "Episodes",
                                content: (
                                    <div>
                                        <Grid>
                                            <div data-testid="episodes" className='flex flex-wrap justify-center p-2 episodes'>
                                                {character.episode.map((episode, i) => (<EpisodeCard
                                                    key={`episode-${i}`} url={episode}
                                                />))}
                                            </div>
                                        </Grid>
                                    </div>
                                )
                            },
                            {
                                label: "Notes",
                                content: (<Notes notesId={`notes-${charId}`} />)
                            }
                        ]}
                    />
                </div>
            </section>
        </main>
    );
}
