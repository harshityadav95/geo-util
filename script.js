document.addEventListener("DOMContentLoaded", () => {
    // Geolocation
    if ("geolocation" in navigator) {
        navigator.geolocation.watchPosition(
            (position) => {
                document.getElementById("latitude").textContent = position.coords.latitude.toFixed(4);
                document.getElementById("longitude").textContent = position.coords.longitude.toFixed(4);
                document.getElementById("altitude").textContent = position.coords.altitude ? position.coords.altitude.toFixed(2) : "N/A";
                document.getElementById("accuracy").textContent = position.coords.accuracy.toFixed(2);
                document.getElementById("speed").textContent = position.coords.speed ? position.coords.speed.toFixed(2) : "N/A";
            },
            (error) => {
                console.error("Geolocation error:", error);
                alert("Could not retrieve geolocation data.");
            }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
    }

    // Device Orientation
    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", (event) => {
            document.getElementById("alpha").textContent = event.alpha ? event.alpha.toFixed(2) : "N/A";
            document.getElementById("beta").textContent = event.beta ? event.beta.toFixed(2) : "N/A";
            document.getElementById("gamma").textContent = event.gamma ? event.gamma.toFixed(2) : "N/A";
        });
    } else {
        alert("Device orientation is not supported by your browser.");
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
        alert("Device motion is not supported by your browser.");
    }
});
