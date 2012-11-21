//codigo de la pagina
var idbook
// funcion de cambio de enlace
function checkForValidUrl(tabId, changeInfo, tab) {
  //alert(changeInfo.url);
  console.log(tab.url);console.log("prueba");
  // If the letter 'g' is found in the tab's URL...
  if (tab.url.indexOf('libro') > -1) {
    // ... show the page action.
	chrome.browserAction.setIcon({path:"img/ebook_search_16.png"});
  }
  else {chrome.browserAction.setIcon({path:"img/ebook_16.png"});}
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
//chrome.tabs.onUpdated.addListener(function (){console.log(changeInfo.url)})
chrome.tabs.onActivated.addListener(checkForValidUrl);
chrome.tabs.onSelectionChanged.addListener(checkForValidUrl);
