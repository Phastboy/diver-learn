export const handleClick = () => {
    if (window.navigator.vibrate) {
        window.navigator.vibrate(50);
    };
};

export const handleSuccess = () => {
    if (window.navigator.vibrate) {
        window.navigator.vibrate([50, 50, 50]);
    };
};

export const handleFailure = () => {
    if (window.navigator.vibrate) {
        window.navigator.vibrate([ 200, 100, 200, 100, 200]);
    };
};
