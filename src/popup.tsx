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
      <div style={{ width: "160px" }} >
        <strong>Swagger-Basic-Authentication-Logout</strong>
        <h2>Working: {active?'ON':'OFF'}</h2><hr/>
        <p>
        This extension is still in beta. <a href="https://github.com/KairuiLiu/Swagger-Basic-Authentication-Logout" target="_blank">Feedback Here👋</a>
        </p>
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
