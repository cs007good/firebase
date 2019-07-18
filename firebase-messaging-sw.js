importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

var config = {
    messagingSenderId: "765573338074"
}

firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log('Received background message ', payload);
    if (Notification.permission === 'granted') {
        notification = new Notification(payload.data.title, {
            icon: '/icon/ms-icon-310x310.png',
            body: payload.data.body,
            onclick: function () {
                parent.focus();
                window.focus(); //just in case, older browsers
                this.close();
            }
        })
        //三秒後自動關閉
        setTimeout(notification.close.bind(notification), 3000);
    }
});