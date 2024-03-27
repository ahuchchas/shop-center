"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h2>Something went wrong!</h2>
      <p>Error: {error.message}</p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="bg-gray-900 text-white px-2 py-1 rounded"
      >
        Try again
      </button>
    </div>
  );
}
