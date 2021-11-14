import React, { useRef } from 'react';

export default function Modal({ title, lists, onHideModal }) {
  const wrapperRef = useRef(null);
  return (
    <>
      <div
        className="md:hidden transition-all fixed z-50 inset-0 bg-oklightgray bg-opacity-50 w-full h-full flex justify-center flex-col items-center"
        onClick={(e: React.SyntheticEvent) => {
          // Don't hide if user clicked inside of the box
          if (e.target === wrapperRef.current) {
            onHideModal();
          }
        }}
        id="WRAPPER"
        ref={wrapperRef}
      >
        <div className="m-auto relative transition-all bg-okred text-okwhite p-8 w-11/12 h-1/2 overflow-auto z-40 rounded-md">
          <button
            onClick={onHideModal}
            className="md:hidden block text-okwhite absolute right-4 top-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h6 className="text-lg font-bold mb-4">{title}</h6>
          <ul>
            {lists?.map((list, idx) => (
              <li key={idx} className="text-sm mb-1 relative flex">
                <span className="w-1.5 h-1.5 rounded-full bg-okwhite mt-1.5 block absolute left-0 top-0"></span>
                <span className="pl-4">{list}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
