import React from 'react';

function Loading() {
  return (
    <div>
      <h2 className="pt-3">To Do List:</h2>
      <div class="spinner-border text-warning ml-5" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
