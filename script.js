// Common Javascript for OCI Setup Handbook Interactive Copy Actions

// Copy to Clipboard Utility
function copyText(btn) {
  const valueWrap = btn.closest('.value-wrap');
  const target = valueWrap.querySelector('.copy-target');
  if (!target) return;

  const textToCopy = target.textContent.trim();

  navigator.clipboard.writeText(textToCopy).then(() => {
    // Update Button styling
    const originalText = btn.textContent;
    btn.textContent = 'Copied!';
    btn.classList.add('copied');

    // Trigger floating toast
    showToast(`Copied to clipboard: "${textToCopy}"`);

    // Reset button after 2 seconds
    setTimeout(() => {
      btn.textContent = originalText;
      btn.classList.remove('copied');
    }, 2000);
  }).catch(err => {
    console.error('Clipboard copy failed: ', err);
  });
}

// Show Floating Toast Notification
function showToast(message) {
  // Remove existing toast if any
  const existingToast = document.querySelector('.toast-alert');
  if (existingToast) {
    existingToast.remove();
  }

  // Create toast element
  const toast = document.createElement('div');
  toast.className = 'toast-alert';
  toast.innerHTML = `
    <span class="toast-icon">✓</span>
    <span class="toast-msg">${message}</span>
  `;

  document.body.appendChild(toast);

  // Trigger browser paint then animate in
  setTimeout(() => {
    toast.classList.add('show');
  }, 50);

  // Animate out and remove
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }, 2500);
}

// Tab switcher for multi-file code views
function switchTab(event, tabId) {
  const container = event.target.closest('.code-navigator');
  if (!container) return;
  
  // Deactivate all tab buttons in this container
  container.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  
  // Deactivate all tab contents in this container
  container.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
  // Activate clicked tab button
  event.target.classList.add('active');
  
  // Activate corresponding tab content
  const targetContent = container.querySelector('#' + tabId);
  if (targetContent) {
    targetContent.classList.add('active');
  }
}

// Download Active File Utility
function downloadActiveFile(btn) {
  const container = btn.closest('.code-navigator');
  if (!container) return;
  
  // Find the active tab content
  const activeContent = container.querySelector('.tab-content.active');
  if (!activeContent) return;
  
  const codeHeader = activeContent.querySelector('.code-header');
  const codeTitle = codeHeader ? codeHeader.querySelector('.code-title').textContent.trim() : 'code.txt';
  const codeElement = activeContent.querySelector('code');
  if (!codeElement) return;
  
  // Get raw code content (stripping tags if colorized spans exist)
  const rawText = codeElement.textContent;
  
  // Create download link
  const blob = new Blob([rawText], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = codeTitle;
  document.body.appendChild(a);
  a.click();
  
  // Cleanup
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  showToast(`Downloading active file: ${codeTitle}`);
}


