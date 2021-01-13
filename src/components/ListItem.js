import React from 'react';

import PaymentCard from './PaymentCard';

export default function ListItem({data}) {
    return <div>
        {data?.map(item => <PaymentCard key={item.user.name} payment={item} />)}
    </div>
}