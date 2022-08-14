chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ active: false }, () => {});
  chrome.action.setBadgeText({ text: 'OFF' });
});

chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
  if (info.status === 'complete') {
    chrome.tabs.sendMessage(
      tabId,
      { type: 'tabUpdate', tab: tab, chrome },
      function (v) {
        chrome.storage.sync.set({ active: v }, () => {});
        chrome.action.setBadgeText({ text: v ? 'ON' : 'OFF' });
      }
    );
  }
});
