import React from "react";

export default function Card({cardNum, cardHolder, ccv, cardMonth, cardYear}) {
  return (
    <div className="card" >
      <p>Card Number: {cardNum}</p>
      <p>Card Holder: {cardHolder}</p>
      <p>CCV: {ccv}</p>
      <p>
        Expiration Date: {cardMonth} {cardYear} 
      </p>
    </div>
  );
}
