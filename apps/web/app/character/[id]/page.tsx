import { Header } from "@repo/ui/header";
import { Tabs } from "@repo/ui/tabs";
import { Breadcrumbs } from "@repo/ui/breadcrumbs";
import { getCharacter } from "rickmortyapi"
import Image from "next/image";
import { KV } from "@repo/ui/kv";

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

    console.log(character)

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

            <section className="w-full flex flex-col overflow-x-hidden overflow-y-auto h-full py-3">
                <div className="flex flex-col items-center">
                    <Image src={character.image} alt={character.name} width={100} height={100} className="rounded-full" />
                    <h1 className="text-2xl font-bold">{character.name}</h1>
                    <p className="text-gray-500">{character.species}</p>
                </div>
                <Tabs
                    tabs={[
                        {
                            label: "About",
                            content: (
                                <div>
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
                                    <h2 className="text-xl">Episodes</h2>
                                    <p>Episodes</p>
                                </div>
                            )
                        },
                        {
                            label: "Notes",
                            content: (
                                <div>
                                    <h2 className="text-xl font-bold">Notes</h2>
                                    <p>Notes</p>
                                </div>
                            )
                        }
                    ]}
                />
            </section>
        </main>
    );
}
