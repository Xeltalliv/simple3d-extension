const main = document.getElementById("content");
main.textContent = "";
for(const project of projects) {
	const frame = document.createElement("div");
	const img = document.createElement("img");
	const imgA = document.createElement("a");
	const title = document.createElement("h2");
	const titleA = document.createElement("a");
	const description = document.createElement("p");
	frame.classList.add("project-frame");
	imgA.classList.add("project-image-a");
	img.classList.add("project-image");
	description.textContent = project.description;
	description.classList.add("project-description");
	title.classList.add("project-title");

	const url = `https://turbowarp.org/?project_url=${location.href}projects/${project.file}.sb3`;
	imgA.href = url;
	titleA.href = url;
	imgA.target = "_blank";
	titleA.target = "_blank";
	imgA.rel = "noopener noreferrer";
	titleA.rel = "noopener noreferrer";
	img.src = `thumbs/${project.file}.png`
	title.textContent = project.title;
	titleA.append(title);
	imgA.append(img);
	frame.append(imgA, titleA, description);
	main.append(frame);
}

