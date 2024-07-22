"use client";
import { FormEventHandler, useState } from "react";
import TagsInput from "../components/TagsInput";
import Select from "../components/Select";
import { categories } from "../lib/data";


export default function SubmitIdea() {
    const [title, setTitle] = useState<string>("");

    const [category, _setCategory] = useState<string | null>(null);
    const setCategory = (category: string | null) => _setCategory(category);

    const [kw, _setKw] = useState<string[]>([]);
    const setKw = (kw: string[]) => _setKw(kw);

    let [errors, setErrors] = useState<{
        title?: string,
        category?: string,
        keywords?: string,
    }>({});

    const handleSubmit: FormEventHandler = e => {
        e.preventDefault();

        errors = {};

        if (title.length < 20 || title.length > 200) {
            errors.title = "Title length should be in the range 20-200";
        }
        else if (!category || !categories.includes(category)) {
            errors.category = "Category is required";
        }
        else if (kw.length === 0) {
            errors.keywords = "Please provide atleast one keyword";
        }
        else if (kw.some(k => k.length < 3)) {
            errors.keywords = "All tags should be atleast 3 charecters long";
        } else {
            //TODO POSt @ /ideas
        }

        setErrors(errors);
    };

    return (
        <main className="p-4 relative grow">
            <form className="mt-4 p-4 flex flex-col gap-4 mx-auto max-w-sm" onSubmit={handleSubmit}>
                <h1 className="font-bold text-xl">
                    Submit your Billion dollar idea
                </h1>

                <fieldset className="form-control">
                    <label htmlFor="idea" className="label label-text">
                        Idea
                    </label>

                    <input
                        name="idea"
                        onChange={e => setTitle(e.currentTarget.value)}
                        type="text"
                        className="input input-bordered"
                        placeholder="Type here"
                    />
                </fieldset>

                <div>
                    <Select
                        label="Category"
                        data={categories}
                        value={category}
                        setValue={setCategory}
                    />
                </div>
{/* 
                <fieldset className="form-control w-fit flex-row items-center gap-4">
                    <label className="label label-text text-sm"> Show Email </label>
                    <input
                        onChange={() => showEmail(true)}
                        className="toggle toggle-sm"
                        type="checkbox"
                        defaultChecked
                    />
                </fieldset> */}

                <div>
                    <TagsInput
                        label="Keywords"
                        placeholder="Type a keyword and hit enter"
                        tags={kw}
                        setTags={setKw}
                    />

                    <span className="mt-1 label label-text-alt opacity-75">
                        *This will generate keyword tool reports
                    </span>
                </div>

                <button className="btn btn-secondary w-fit mx-auto text-white" type="submit">
                    Submit
                </button>
            </form>
        </main>
    );
}
