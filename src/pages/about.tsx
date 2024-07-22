import { FcIdea as BulbIcon } from "react-icons/fc";

export default function About() {
    return (
        <main className="relative grow p-2 pt-12">
            <div className="absolute inset-0 w-full h-full pointer-events-none bg-[url('/hero.jpg')] bg-cover bg-right" />

            <div className="ml-8 sm:pt-8 z-[1] relative">
                <h1 className="text-3xl font-bold">
                    Discover, Connect, Create
                </h1>

                <h1 className="mt-2 text-5xl font-black">
                    Build the Tomorrow, Today
                </h1>

                <a href="/" className="mt-4 btn btn-secondary text-white">
                    <BulbIcon size={24} />
                    Explore
                </a>
            </div>
        </main>
    );
}
