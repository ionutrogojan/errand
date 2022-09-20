const appWindow = window.__TAURI__.window.appWindow;
document
    .querySelector('#titlebar_minimise')
    .addEventListener('click', () => appWindow.minimize());
document
    .querySelector('#titlebar_maximise')
    .addEventListener('click', () => appWindow.toggleMaximize());
document
    .querySelector('#titlebar_close')
    .addEventListener('click', () => appWindow.close());