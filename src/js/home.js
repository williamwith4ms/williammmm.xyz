function copyEmail() {
    const email = 'me@williammmmm.xyz';
    navigator.clipboard.writeText(email).then(() => {
        const imageElement = document.getElementById("email-image");
        const originalSrc = imageElement.src;
        imageElement.src = "https://placehold.co/24x24/black/white";

        setTimeout(() => {
            imageElement.src = originalSrc;
        }, 2000);
    }).catch(err => {
        alert(err);
    });
}

function copyDiscord() {
    const email = 'williamwith4ms';
    navigator.clipboard.writeText(email).then(() => {
        const imageElement = document.getElementById("discord-image");
        const originalSrc = imageElement.src;
        imageElement.src = "https://placehold.co/24x24/black/white";

        setTimeout(() => {
            imageElement.src = originalSrc;
        }, 2000);
    }).catch(err => {
        alert(err);
    });
}