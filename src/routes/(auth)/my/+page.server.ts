import { verifyToken } from '$lib/server/auth.js';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
    const token = cookies.get("token");
    if (!token) return redirect(302, "/login");
    const clientUserData = await verifyToken(token);
    if (!clientUserData) return redirect(302, "/login");
    return clientUserData.data;
}