function copyEmail() {
	const email = "me@williammmmm.xyz";
	navigator.clipboard
		.writeText(email)
		.then(() => {
			const imageElement = document.getElementById("email-image");
			const originalSrc = imageElement.src;
			const originalInnerHTML = imageElement.innerHTML;
			imageElement.innerHTML = `<svg class="icon-svg" viewBox="1 1 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
			setTimeout(() => {
				imageElement.innerHTML = originalInnerHTML;
				imageElement.src = originalSrc;
			}, 2000);
		})
		.catch((err) => {
			alert(err);
		});
}

function copyDiscord() {
	const username = "me@williammmmm.xyz";
	navigator.clipboard
		.writeText(username)
		.then(() => {
			const imageElement = document.getElementById("discord-image");
			const originalSrc = imageElement.src;
			const originalInnerHTML = imageElement.innerHTML;
			imageElement.innerHTML = `<svg class="icon-svg" viewBox="1 1 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
			setTimeout(() => {
				imageElement.innerHTML = originalInnerHTML;
				imageElement.src = originalSrc;
			}, 2000);
		})
		.catch((err) => {
			alert(err);
		});
}
