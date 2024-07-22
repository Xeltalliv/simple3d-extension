const main = document.getElementById("content");
main.textContent = "";
for(const extension of extensions) {
	const frame = document.createElement("div");
	const img = document.createElement("img");
	const imgA = document.createElement("a");
	const title = document.createElement("h2");
	const titleA = document.createElement("a");
	const description = document.createElement("p");
	frame.classList.add("extension-frame");
	imgA.classList.add("extension-image-a");
	img.classList.add("extension-image");
	description.textContent = extension.description;
	description.classList.add("extension-description");
	title.classList.add("extension-title");

	const url = extension.link;
	imgA.href = url;
	titleA.href = url;
	imgA.target = "_blank";
	titleA.target = "_blank";
	imgA.rel = "noopener noreferrer";
	titleA.rel = "noopener noreferrer";
	img.src = `thumbs/${extension.thumb}.png`
	title.textContent = extension.title;
	titleA.append(title);
	imgA.append(img);
	frame.append(imgA, titleA, description);
	main.append(frame);
}

