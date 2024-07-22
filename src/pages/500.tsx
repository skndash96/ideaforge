import { Link } from "wouter";

export default function InternalServerError() {
    return (
        <div className="p-4 flex flex-col items-center">
            <h1 className="font-semibold text-2xl">
                Something went wrong
            </h1>
            <Link href="/" className="underline text-blue-600">
                Try again later
            </Link>
        </div>
    );
}