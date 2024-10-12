import React from "react";

const Waveform = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Vector"
          d="M13 7.0001H10.6L8.8 12.4001L5.2 1.6001L3.4 7.0001H1"
          stroke="#FEF6FB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default Waveform;
