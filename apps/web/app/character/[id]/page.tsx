import { Header } from "@repo/ui/header";
import { Tabs } from "@repo/ui/tabs";
import { getCharacter } from "rickmortyapi"
import Image from "next/image";

export default async function Page(): Promise<JSX.Element> {

    const character = (await getCharacter(1)).data

    return (
        <main className="h-full w-full px-2 overflow-x-hidden overflow-y-hidden flex flex-col">
            <section className="w-full">
                <Header>
                    <nav className="flex w-full">

                    </nav>
                </Header>
            </section>

            <section className="w-full flex flex-col overflow-x-hidden overflow-y-auto h-full">
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
                                    <h2 className="text-xl font-bold">About</h2>
                                    <p>{character.status}</p>
                                    <div>
                                        <h2 className="text-xl font-bold">Locations</h2>
                                        <p>Locations</p>
                                    </div>
                                </div>
                            )
                        },
                        {
                            label: "Episodes",
                            content: (
                                <div>
                                    <h2 className="text-xl font-bold">Episodes</h2>
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
