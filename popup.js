chrome.storage.sync.get(
  ['hideCategoryHotTub', 'hideCategoryASMR', 'hideHypeTrain'],
  (data) => {
    document.getElementById('hideCategoryHotTub').checked = !!data.hideCategoryHotTub;
    document.getElementById('hideCategoryASMR').checked = !!data.hideCategoryASMR;
    document.getElementById('hideHypeTrain').checked = !!data.hideHypeTrain;
  }
);

document.getElementById("hideCategoryHotTub").addEventListener("change", function() {
    chrome.storage.sync.set({ hideCategoryHotTub: this.checked });
})

document.getElementById("hideCategoryASMR").addEventListener("change", function() {
    chrome.storage.sync.set({ hideCategoryASMR: this.checked });
})

document.getElementById("hideHypeTrain").addEventListener("change", function() {
    chrome.storage.sync.set({ hideHypeTrain: this.checked });
})