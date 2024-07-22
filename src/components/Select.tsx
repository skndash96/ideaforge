import { useState } from "react";
import { FaCheck as CheckIcon } from "react-icons/fa";
import { RxCaretSort as SelectIcon } from "react-icons/rx";

export default function Select({
    label,
    data,
    value,
    setValue
}: {
    label: string,
    data: string[],
    value: string | null,
    setValue: (s: string | null) => void
}) {
    const [v, setV] = useState<string>("");

    const handleItemClick = (item: string) => {
        setValue(item);
        setV("");
    };

    return (
        <fieldset className="form-control">
            <label className="label label-text">
                {label}
            </label>

            <div className="dropdown dropdown-bottom dropdown-start">
                <div tabIndex={0} role="button" className="w-full btn bg-transparent border-2 font-medium items-center justify-between">
                    <span className="">
                        {value || "Select"}
                    </span>

                    <SelectIcon />
                </div>

                <ul tabIndex={0} className="mt-2 w-full dropdown-content menu z-[1] rounded-box overflow-auto bg-base-200">
                    {(() => {
                        let filtered = data.filter(item => item.toLowerCase().includes(v.toLowerCase().trim()));
                        if (filtered.length === 0) return (
                            <li className="p-2">
                                No category found
                            </li>
                        );

                        return filtered.map(item => (
                            <li key={item}>
                                <button
                                    type="button"
                                    onClick={() => handleItemClick(item)}
                                    className="w-full btn btn-sm font-medium btn-ghost justify-start"
                                >
                                    {value === item && (
                                        <CheckIcon />
                                    )}
                                    {item}
                                </button>
                            </li>
                        ));
                    })()}
                </ul>
            </div>
        </fieldset>
    );
}