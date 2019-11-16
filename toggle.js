function updateSquash(event, target) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { code: `document.querySelector('.btn-group-squash').innerText = '${event.target.value} and merge'` });
  });
  ;
}

function saveSquish() {
  console.log(document.querySelector('#squashText').value);
  chrome.storage.sync.set({ squishText: document.querySelector('#squashText').value });
}

document.getElementById('squashText').addEventListener('input', updateSquash);
document.getElementById('saveButton').addEventListener('click', saveSquish);
