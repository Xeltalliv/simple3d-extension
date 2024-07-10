const hash = location.hash ? location.hash.substring(1).split(",") : [];
const myUrl = new URL(location.href);
myUrl.hash = "";
const main = document.getElementById("content");
main.textContent = "";
for(const category of links) {
	const content = document.createElement("a");
	content.id = category.dir;
	content.classList.add("content");
	if (hash.includes(category.dir)) content.classList.add("content-focus");
	const header = document.createElement("h2");
	header.style.margin = "0";
	header.textContent = category.name;
	content.append(header);
	const footer = document.createElement("br");
	main.append(content, footer);
	for(const link of category.links) {
		const a = document.createElement("a");
		a.href = `https://turbowarp.org/editor?project_url=${myUrl.href}projects/${category.dir}/${link.file}.sb3`;
		a.textContent = link.title;
		a.target = "_blank";
		a.rel = "noopener noreferrer";
		a.id = `${category.dir}/${link.file}`;
		if (hash.includes(`${category.dir}/${link.file}`)) a.classList.add("a-focus");
		const br = document.createElement("br");
		content.append(a, br);
	}
	if (category.links.length == 0) {
		const span = document.createElement("span");
		span.textContent = "No examples in this section";
		const br = document.createElement("br");
		content.append(span, br);
	}
}