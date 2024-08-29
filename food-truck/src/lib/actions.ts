'use server'

import { redirect } from "next/navigation";

export async function nextPage(query: string, page: number, length: number) {
    'use server'
    redirect(`/?q=${query}&page=${Number(page) + 1}`)
}

export async function prevPage(query: string, page: number, length: number) {
    'use server'
    if (page <= 1) return;
    redirect(`/?q=${query}&page=${Number(page) - 1}`)
}