export function BounceAnimation(itemClassName) {
    document.querySelector(itemClassName).animate([
        // étapes/keyframes
        { transform: 'scale(1)' },
        { transform: 'scale(1.03)' },
        { transform: 'scale(1)' },
        ], {
        // temporisation
        duration: 300,
        iterations: 1
        });
}