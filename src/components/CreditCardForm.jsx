import React, { useState } from "react";
import InputMask from "react-input-mask";
import "../style/CreditCardForm.css";

const CreditCardForm = () => {
  const [cardDetails, setCardDetails] = useState("");
  const handleInputChange = (e) => {
    setCardDetails(e.target.value);
  };
  return (
    <div className="credi__card">
      <InputMask
        mask="9999 9999 9999 9999 99/99 999"
        value={cardDetails}
        onChange={handleInputChange}
        placeholder="  Card Number       MM / YY    CVC">
        {(inputProps) => (
          <input {...inputProps} type="text" className="card_input" />
        )}
      </InputMask>
    </div>
  );
};

export default CreditCardForm;
