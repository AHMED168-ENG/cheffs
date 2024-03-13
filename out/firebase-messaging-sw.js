importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js'
)
importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging-compat.js'
)
firebase?.initializeApp({
    apiKey: "AIzaSyBo1GhrADmLYKu13jfzwFZkpQUQP9maJgk",
    authDomain: "andiamo-331f2.firebaseapp.com",
    projectId: "andiamo-331f2",
    storageBucket: "andiamo-331f2.appspot.com",
    messagingSenderId: "633590796870",
    appId: "1:633590796870:web:741d86d2ca9b121cbbb047",
    measurementId: "G-1N60BGVF37"
})

// Retrieve firebase messaging
const messaging = firebase?.messaging()

messaging.onBackgroundMessage(function (payload) {
    const notificationTitle = payload.notification.title
    const notificationOptions = {
        body: payload.notification.body,
    }

    self.registration.showNotification(notificationTitle, notificationOptions)
})
