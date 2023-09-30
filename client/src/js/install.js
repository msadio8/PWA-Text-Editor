const butInstall = document.getElementById("buttonInstall");
let deferredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  deferredPrompt = event;

  butInstall.classList.remove("hidden");
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
    const promptEvent = deferredPrompt;
    if (!promptEvent) {
       return;
    }

    promptEvent.prompt();

    deferredPrompt = null;

    butInstall.classList.add("hidden");
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  deferredPrompt = null;
});
