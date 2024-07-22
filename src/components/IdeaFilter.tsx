import Select from "../components/Select";
import { categories } from "../lib/data";
import { FormEventHandler, useState } from "react";
import { FaFilter as FilterIcon } from "react-icons/fa";
import TagsInput from "./TagsInput";

export default function IdeaFilter({
    filters,
    setFilters
}: {
    filters: IdeaFilterOptions,
    setFilters: (f: IdeaFilterOptions) => void
}) {
    const [category, _setCategory] = useState<string | null>(null);
    const setCategory = (s: string | null) => _setCategory(s);

    const [words, _setWords] = useState<string[]>([]);
    const setWords = (s: string[]) => _setWords(s);

    const drawerId = "ideaFilterDrawer";

    const clearFilters = () => {
        setCategory(null);
        setWords([]);
        setFilters({});
    };

    const handleSubmit: FormEventHandler = e => {
        e.preventDefault();

        //@ts-ignore
        document.getElementById(drawerId).checked = false;

        filters = {};

        if (category) {
            filters.category = category;
        }

        if (words.length > 0) {
            filters.words = words;
        }

        setFilters(filters);
    };

    return (
        <div className="drawer">
            <input id={drawerId} type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex gap-2">
                <label role="button" htmlFor={drawerId} className="w-fit btn btn-sm drawer-button">
                    <FilterIcon className="opacity-75" />
                    Filter
                </label>

                {Object.keys(filters).length !== 0 && (
                    <button onClick={clearFilters} className="btn btn-sm btn-ghost text-red-500">
                        Clear All
                    </button>
                )}
            </div>

            <div className="drawer-side z-10">
                <label className="drawer-overlay" htmlFor={drawerId} />

                <form onSubmit={handleSubmit} className="p-4 min-w-80 w-3/4 max-w-sm h-full flex flex-col gap-2 bg-base-100">
                    <h2 className="mb-2 text-xl font-bold flex items-center gap-2">
                        <FilterIcon className="opacity-75" />
                        Filter
                    </h2>

                    <TagsInput
                        label="Look for words"
                        placeholder="Type a word and hit Enter"
                        tags={words}
                        setTags={setWords}
                    />

                    <Select
                        label="Category"
                        data={categories}
                        value={category}
                        setValue={setCategory}
                    />

                    <button className="mt-4 w-fit btn btn-primary" type="submit">
                        Apply
                    </button>
                </form>
            </div>

        </div>
    );
}