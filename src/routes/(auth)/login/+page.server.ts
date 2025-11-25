import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { signToken } from '$lib/server/auth';

const users = [
    { username: "user1", email: "codesep8@gmail.com", password: "111" }
]

export const actions = {
	default: async ({ cookies, request, url }) => {
		const reqData = await request.formData();
		const email = reqData.get('email');
		const password = reqData.get('password');

        const userData = users.find(u => u.email === email);
        if (!userData) return fail(400, { error: "user not found or password is incorrect." });
        if (userData.password !== password) return fail(400, { error: "user not found or password is incorrect." });

        const token = await signToken(
            {
                username: userData.username,
                email: userData.email
            }
        );

        cookies.set("token", token, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            maxAge: 60 * 60 * 24
        })

        return redirect(300, "/");
	}
} satisfies Actions;