import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Popup = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.storage.sync.get("active", function (d) {
        chrome.action.setBadgeText({ text: d.active?'ON':'OFF' });
        setActive(d.active);
      });
    });
  }, []);

  return (
    <>
      <h1>
        {active?'ON':'OFF'}
      </h1>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
