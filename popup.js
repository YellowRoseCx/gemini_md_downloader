// popup.js

document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    const copyBtn = document.getElementById('copyBtn');
    const status = document.getElementById('status');

    // Check if the current tab is a Gemini page
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const currentTab = tabs[0];
        
        if (!currentTab.url || !currentTab.url.startsWith("https://gemini.google.com")) {
            downloadBtn.disabled = true;
            copyBtn.disabled = true;
            status.textContent = 'Please use this extension on a Gemini page';
            status.style.color = '#ea4335';
            return;
        }

        // Download button click event
        downloadBtn.addEventListener('click', function() {
            downloadBtn.disabled = true;
            status.textContent = 'Downloading...';
            status.style.color = '#666';
            
            chrome.tabs.sendMessage(currentTab.id, { action: "download_markdown" }, function(response) {
                if (chrome.runtime.lastError) {
                    status.textContent = 'Download failed';
                    status.style.color = '#ea4335';
                } else {
                    status.textContent = 'Download successful!';
                    status.style.color = '#34a853';
                    setTimeout(() => window.close(), 1000);
                }
                downloadBtn.disabled = false;
            });
        });

        // Copy button click event
        copyBtn.addEventListener('click', function() {
            copyBtn.disabled = true;
            status.textContent = 'Copying...';
            status.style.color = '#666';
            
            chrome.tabs.sendMessage(currentTab.id, { action: "copy_markdown" }, function(response) {
                if (chrome.runtime.lastError) {
                    status.textContent = 'Copy failed';
                    status.style.color = '#ea4335';
                } else if (response && response.success) {
                    status.textContent = 'Copied to clipboard!';
                    status.style.color = '#34a853';
                    setTimeout(() => window.close(), 1000);
                } else {
                    status.textContent = 'Copy failed, please try again';
                    status.style.color = '#ea4335';
                }
                copyBtn.disabled = false;
            });
        });
    });
});
