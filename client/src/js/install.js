const butInstall = document.getElementById("buttonInstall");


// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  
  // Store the triggered events
  window.deferredPrompt = event;

  // Remove the hidden class from the button.
  butInstall.classList.toggle('hidden', false);

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {

  
  const promptEvent = window.deferredPrompt;

  // If there's no stored prompt event, return and do nothing
  if (!promptEvent) {
    return;
  }
    
  // Display the PWA installation prompt to the user
  promptEvent.prompt();

 // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
   
  butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // Clear prompt
  window.deferredPrompt = null;
});
