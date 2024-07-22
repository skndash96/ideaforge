import IdeaCard from "../components/IdeaCard";
import IdeaFilter from "../components/IdeaFilter";
import { useEffect, useState } from "react";
import { ideas } from "../lib/data";

export default function Home() {
    const [loading, setLoading] = useState<boolean>(true);

    const [filters, _setFilters] = useState<IdeaFilterOptions>({});
    const setFilters = (s: IdeaFilterOptions) => _setFilters(s);

    const [data, setData] = useState<Idea[]>([]);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setData(ideas);
            setLoading(false);
        }, 1000);
    }, [filters]);

    return (
        <main className="py-8 px-4 min-h-screen">
            <div className="w-full mx-auto max-w-xl">
                <h1 className="mb-4 text-2xl font-bold">
                    Latest Ideas
                </h1>

                <IdeaFilter
                    filters={filters}
                    setFilters={setFilters}
                />

                <ul className="mt-4 flex flex-col gap-4">
                    {loading
                        ? (
                            new Array(4).fill(null).map(() => (
                                <div className="w-full h-36 skeleton bg-base-200" />
                            ))
                        )
                        : (
                            data.map((idea, idx) => (
                                <IdeaCard key={idx} idea={idea} />
                            ))
                        )
                    }
                </ul>
            </div>
        </main>
    );
}