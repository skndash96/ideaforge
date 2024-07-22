import { useState } from "react";

export default function TagsInput({
    label,
    placeholder,
    tags,
    setTags
}: {
    label: string,
    placeholder: string,
    tags: string[],
    setTags: (tags: string[]) => void
}) {
    const [input, setInput] = useState<string>("");

    const addTag = (tag: string) => {
        setInput("");

        if (tags.find(t => t.toLowerCase() === tag.toLowerCase())) return;

        setTags(Array.from(new Set([...tags, tag])));
    };

    const removeTag = (idx: number) => {
        let _tags = [...tags];
        _tags.splice(idx, 1);
        setTags(_tags)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        let v = e.currentTarget.value.trim();

        if (e.key === "Enter" && v.length !== 0) {
            e.preventDefault();

            addTag(v);
        }
    };

    return (
        <fieldset className="form-control">
            <label className="label label-text">
                {label}
            </label>

            <ul className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                    <li key={idx} className="py-4 badge shadow-sm">
                        {tag}

                        <button className="btn btn-xs btn-ghost text-red-500" onClick={() => removeTag(idx)} type="button">
                            x
                        </button>
                    </li>
                ))}
            </ul>

            <input
                value={input}
                onKeyDown={handleKeyDown}
                onChange={e => setInput(e.target.value)}
                className="mt-2 input input-bordered" placeholder={placeholder}
            />
        </fieldset>
    );
}