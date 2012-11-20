//codigo de la pagina

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
  //alert(changeInfo.url);
  console.log(changeInfo.url);
  // If the letter 'g' is found in the tab's URL...
  if (tab.url.indexOf('libro') > -1) {
    // ... show the page action.
	chrome.browserAction.setIcon({path:"iconok.png"});
  }
  else {chrome.browserAction.setIcon({path:"icon.png"});}
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
//chrome.tabs.onUpdated.addListener(function (){console.log(changeInfo.url)})
chrome.tabs.onActivated.addListener(checkForValidUrl);
chrome.tabs.onHighlighted.addListener(checkForValidUrl);
