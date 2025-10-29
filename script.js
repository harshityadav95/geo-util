document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp;
    tg.ready();

    // Set theme
    const themeParams = tg.themeParams;
    document.body.style.backgroundColor = themeParams.bg_color || '#f0f2f5';
    document.body.style.color = themeParams.text_color || '#1c1e21';

    tg.onEvent('themeChanged', () => {
        document.body.style.backgroundColor = tg.themeParams.bg_color || '#f0f2f5';
        document.body.style.color = tg.themeParams.text_color || '#1c1e21';
    });

    // Device Orientation
    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", (event) => {
            document.getElementById("alpha").textContent = event.alpha ? event.alpha.toFixed(2) : "N/A";
            document.getElementById("beta").textContent = event.beta ? event.beta.toFixed(2) : "N/A";
            document.getElementById("gamma").textContent = event.gamma ? event.gamma.toFixed(2) : "N/A";
        });
    } else {
        tg.showAlert("Device orientation is not supported by your browser.");
    }

    // Device Motion
    if (window.DeviceMotionEvent) {
        window.addEventListener("devicemotion", (event) => {
            if (event.accelerationIncludingGravity) {
                document.getElementById("accel-x").textContent = event.accelerationIncludingGravity.x ? event.accelerationIncludingGravity.x.toFixed(2) : "N/A";
                document.getElementById("accel-y").textContent = event.accelerationIncludingGravity.y ? event.accelerationIncludingGravity.y.toFixed(2) : "N/A";
                document.getElementById("accel-z").textContent = event.accelerationIncludingGravity.z ? event.accelerationIncludingGravity.z.toFixed(2) : "N/A";
            }
        });
    } else {
        tg.showAlert("Device motion is not supported by your browser.");
    }
});
