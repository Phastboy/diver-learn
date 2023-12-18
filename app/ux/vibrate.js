export const handleVibrate = () => {
    if (window.navigator.vibrate) {
        window.navigator.vibrate(50);
    };
};
