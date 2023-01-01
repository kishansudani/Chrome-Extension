// open popup from website button click
chrome.runtime.onMessageExternal.addListener(
  (request, sender, sendResponse) => {
    if (request.message === "open_popup") {
      chrome.browserAction.setPopup({ popup: "popup.html" });
    }
  }
);

// for reciving message
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {});

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    // This is a new installation
    console.log("Extension installed");
  } else if (details.reason === "update") {
    // This is an update
    console.log(
      "Extension updated from version " +
        details.previousVersion +
        " to " +
        details.newVersion
    );
  }
});
