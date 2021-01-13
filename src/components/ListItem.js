import React from "react";

import PaymentCard from "./PaymentCard";

export default function ListItem({ data }) {
  return (
    <div>
      <div style={{display: "flex", justifyContent: "space-between", margin: '15px', paddingRight: '20px', color: 'gray'}}>
        <span>Today</span>
        <span>$1,965.69</span>
      </div>
      {data?.map((item) => (
        <PaymentCard key={item.user.name} payment={item} />
      ))}
    </div>
  );
}
