import { initializeApp, getApps, getApp } from 'firebase/app'
import {
    getMessaging,
    getToken,
    onMessage,
    isSupported,
} from 'firebase/messaging'
import { useStoreFcm } from './hooks/react-query/push-notification/usePushNotification'

const firebaseConfig = {
    apiKey: "AIzaSyBo1GhrADmLYKu13jfzwFZkpQUQP9maJgk",
    authDomain: "andiamo-331f2.firebaseapp.com",
    projectId: "andiamo-331f2",
    storageBucket: "andiamo-331f2.appspot.com",
    messagingSenderId: "633590796870",
    appId: "1:633590796870:web:741d86d2ca9b121cbbb047",
    measurementId: "G-1N60BGVF37"
}
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const messaging = (async () => {
    try {
        const isSupportedBrowser = await isSupported()
        if (isSupportedBrowser) {
            return getMessaging(firebaseApp)
        }

        return null
    } catch (err) {
        return null
    }
})()

export const fetchToken = async (setTokenFound, setFcmToken) => {
    return getToken(await messaging, {
        vapidKey:
            'BCPFGFd3-AFHMl7Pam0VJ9oN5_kOptV8GFByVNv8b9b9vKD2-n8WJ6vDNszqfIhYF-dMS8KfdItlorIUC0-eSHg',
    })
        .then((currentToken) => {
            if (currentToken) {
                setTokenFound(true)
                setFcmToken(currentToken)

                // Track the token -> client mapping, by sending to backend server
                // show on the UI that permission is secured
            } else {
                setTokenFound(false)
                setFcmToken()
                // shows on the UI that permission is required
            }
        })
        .catch((err) => {
            console.error(err)
            // catch error while creating client token
        })
}

export const onMessageListener = async () =>
    new Promise((resolve) =>
        (async () => {
            const messagingResolve = await messaging
            onMessage(messagingResolve, (payload) => {
                resolve(payload)
            })
        })()
    )