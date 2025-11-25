import { SignJWT, jwtVerify } from "jose";

const secretKey = new TextEncoder().encode('ajwsfa0snfdoahbnsho8hf9usw');

async function signToken(data: object) {
    return await new SignJWT({ data })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1d")
        .sign(secretKey);
}

async function verifyToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, secretKey);
        return payload;
    } catch(err) {
        return null;
    }
}

export {
    signToken,
    verifyToken
}