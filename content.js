(() => {
    chrome.storage.onChanged.addListener((changes, area) => {
        if (area === 'sync' && changes.hiddenCategories) {
        // TODO: Reapply current filtering logic
        }
    });


    chrome.storage.sync.get(['hiddenCategories'], (data) => {
        // TODO: Use saved storage data to decide what to hide
    });


})