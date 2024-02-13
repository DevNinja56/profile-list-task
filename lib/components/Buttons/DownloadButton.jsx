import React from "react";

const DownloadButton = () => {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      download="profiles.csv"
      href={`https://randomuser.me/api?results=200&format=csv`}
      className="bg-[#435FB5] text-white px-5 py-2 rounded-lg font-semibold text-sm  "
    >
      Download as CSV
    </a>
  );
};

export default DownloadButton;
