# Geo-Device Stats Telegram Mini App

A Telegram Mini App to display your device's orientation and motion data.

## How to Use

1.  Deploy this web application to a public URL.
2.  Create a new Telegram Bot using @BotFather.
3.  Set the web app URL for your bot using the `/setmenubutton` command in @BotFather.
4.  Open the chat with your bot in Telegram and click the menu button to launch the Mini App.

## Data Displayed

### Device Orientation

*   **Alpha:** The direction your device is pointing in degrees (0-360).
*   **Beta:** The front-to-back tilt of your device in degrees (-180-180).
*   **Gamma:** The side-to-side tilt of your device in degrees (-90-90).

### Device Motion

*   **Acceleration X:** The acceleration of your device along the x-axis.
*   **Acceleration Y:** The acceleration of your device along the y-axis.
*   **Acceleration Z:** The acceleration of your device along the z-axis.