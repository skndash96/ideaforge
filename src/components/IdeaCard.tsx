export default function IdeaCard({
    idea
}: {
    idea: Idea
}) {
    return (
        <div className="p-4 card z-0 shadow-md">
            <span className="text-sm font-semibold">
                {idea.category}
            </span>

            <span className="mt-2">
                {idea.body}
            </span>

            <ul className="mt-4 text-sm flex flex-wrap gap-2">
                {idea.keywords.split(/,\s+/).map(k => (
                    <li key={k} className="badge badge-ghost">
                        {k}
                    </li>
                ))}
            </ul>
        </div>
    );
}