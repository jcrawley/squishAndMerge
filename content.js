
chrome.storage.sync.get('squishText', function (value) {
  document.querySelector('.btn-group-squash').innerText = `${value.squishText || 'Squish'} and merge`;
})
