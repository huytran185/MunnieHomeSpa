import React, { forwardRef, useImperativeHandle } from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

//Notification components which display message after user using a function

const Notifications = forwardRef((props,ref) => {
    useImperativeHandle(ref, ()=>({
        createNotification(type,content){
            switch (type) {
                case 'info':
                NotificationManager.info(content);
                break;
                case 'success':
                NotificationManager.success(content);
                break;
                case 'warning':
                NotificationManager.warning(content, 'Close after 3000ms', 3000);
                break;
                case 'error':
                NotificationManager.error(content, 'Click me!', 5000, () => {
                    alert('callback');
                });
                break;
                default: break;
            }
        }
    }))
    
    return (
        <div>
            <NotificationContainer/>
        </div>
    )
})

export default Notifications
