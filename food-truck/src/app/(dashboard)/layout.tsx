import { SearchInput } from "./search";

export default function Layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className=" flex justify-end">
                <SearchInput />
            </div>
            <main className=" bg-white min-h-full">
                {children}
            </main>
        </>
    );
}