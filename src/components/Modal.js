import React from "react";

const Modal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="mx-10 my-5">
          <p className="font-bold text-center mb-10">
            Are sure you have attempted all questions and ready to end exams?
          </p>
          <div className="flex gap-5"><button className="border border-rose-900 bg-rose-50 font-semibold px-10 py-3 w-max rounded-xl">
            End Exams
          </button>

          <button className="bg-rose-900 px-10 font-semibold py-3 w-max rounded-xl text-white">
            Cancel
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
