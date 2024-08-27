'use server'

import { redirect } from "next/navigation";

export async function nextPage(query: string, page: number, length: number) {
    'use server'
    console.log('Next button clicked')
    if (length < 5) return;
    redirect(`/?q=${query}&page=${page + 1}`)
}