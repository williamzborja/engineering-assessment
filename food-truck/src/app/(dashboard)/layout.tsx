import Image from "next/image";
import { SearchInput } from "./search";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
    return (
        <div className="p-10 bg-slate-50">
            <header className="flex items-center gap-7">
                <Image
                    src="/food-truck.png"
                    alt="Logo"
                    width={50}
                    height={50}
                />
                <h1 className="text-4xl font-bold">Food Truck Finder</h1>
                <SearchInput />
            </header>

            <main className="min-h-full">
                {children}
            </main>
        </div>
    );
}