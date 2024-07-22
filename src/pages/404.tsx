import { Link } from "wouter";

export default function NotFound() {
    return (
        <div className="p-4 flex flex-col items-center">
            <h1 className="font-semibold text-2xl">
                Page not Found
            </h1>
            <Link href="/" className="underline text-blue-600">
                Go to home
            </Link>
        </div>
    );
}