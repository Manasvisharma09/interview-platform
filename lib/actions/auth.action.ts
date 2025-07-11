"use server";

import { db,auth } from "@/firebase/admin";
import { cookies } from "next/headers";

const ONE_WEEK = 60 * 60 * 24 * 7 ;


export async function signUp(params: SignUpParams) {
    const {uid, name, email } = params;

    try{
        const userRecord=await db.collection('users').doc(uid).get();
        if (userRecord.exists) {
            return {
                success: false,
                message: "User already exists. Please log in instead."
            };
        }
        await db.collection('users').doc(uid).set({
            name,
            email
        });
        return{
            success: true,
            message: "Account created successfully. Please sign in.",
            
        }

    }catch(error:any){
        console.error("Error signing up:", error);
        if (error.code === "auth/email-already-exists") {
            return{
                success: false,
                message: "Email already exists. Please use a different email address."
                
            }
        }
        return {
            success: false,
            message: " Failed to create an account. "
        };
    }

}
export async function signIn(params: SignInParams) {
    const { email, idToken } = params;

    try {
        const userRecord = await auth.getUserByEmail(email);
        if (!userRecord) {
            return {
                success: false,
                message: "User not found. Please sign up."
            };
        }

        await setSessionCookie(idToken);

        // return {
        //     success: true,
        //     message: "Sign-in successful",
        //     uid: userRecord.uid
        // };
    } catch (error:any) {
        console.error("Error signing in:", error);
        return {
            success: false,
            message: error.message || "Failed to sign in."
        };
    }
}

export async function setSessionCookie(idToken: string) {
    const cookieStore = await cookies();

    const sessionCookie = await auth.createSessionCookie(idToken, 
        { expiresIn: ONE_WEEK*1000 });
    
    cookieStore.set('session', sessionCookie, {
        // 5 daysma
        maxAge: ONE_WEEK,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax',
    });

}
export async function getCurrentUser() :Promise<User| null>{
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session')?.value;

    if (!sessionCookie) {
        return null;
    }

    try {
        const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
        const userRecord = await db.collection('users').doc(decodedClaims.uid).get();
        if (!userRecord.exists) {
            return null;
        }
        return{
            ...userRecord.data(),
            id: userRecord.id,

        }as User;
    } catch (error:any) {
        console.error("Error verifying session cookie:", error);
        return null;
    }
}
export async function isAuthenticated(){
    const user = await getCurrentUser();
   return !!user;
}

