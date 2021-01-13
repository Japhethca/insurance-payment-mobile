import React from 'react';

import homeIcon from '../assets/home.svg';
import alarmIcon from '../assets/alarm-black.svg';
import creditCardIcon from '../assets/credit_card-24px.svg';
import userIcon from '../assets/user.svg';
import addIcon from '../assets/add-24px.svg';
import notificationIcon from '../assets/notifications-new.svg';
// import usdIcon from '../assets/usd-currency.svg';
import twoDotsIcon from '../assets/two-dots.svg';
import arrowFowardIcon from '../assets/arrow_forward-24px.svg'
import maximizeIcon from '../assets/maximize-24px.svg';
import USFlagIcon from '../assets/us-flag.svg';


const icons = { 
    'home': homeIcon,
    'alarm': alarmIcon,
    'user': userIcon,
    'credit-card': creditCardIcon,
    'add': addIcon,
    'two-dots': twoDotsIcon,
    'arrow-foward': arrowFowardIcon,
    'notification-new': notificationIcon,
    'maximize': maximizeIcon,
    'us-flag': USFlagIcon,
}

export default function Icon({name, ...props}) {
    const iconName = icons[name] ? icons[name] : '';
    return <img src={iconName} alt="" {...props}/>
}