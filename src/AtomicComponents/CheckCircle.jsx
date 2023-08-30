import React from "react";
import { Check } from "heroicons-react";

const CheckCircle = ({className, size}) => {
  return (
    <>
      <div className={className}>
        <Check size={size} className="text-sec6" />        
      </div>
    </>
  );
};

export default CheckCircle;
