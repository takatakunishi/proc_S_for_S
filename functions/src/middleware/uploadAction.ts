import { db } from './firebase_util'

export const uploadsWTest = async (action: string, time: string, user: string) => {
    const docRef = db.collection('test').doc(user + ":" + time);
    await docRef.set({
        action: action,
        time: time
    });
}