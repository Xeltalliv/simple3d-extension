const main = document.getElementById("content");
for(const category of links) {
	const header = document.createElement("h2");
	header.textContent = category.name;
	main.append(header);
	for(const link of category.links) {
		const a = document.createElement("a");
		a.href = `https://turbowarp.org/editor?project_url=${location.href}projects/${category.dir}/${link.file}.sb3`;
		a.textContent = link.title;
		a.target = "_blank";
		a.rel = "noopener noreferrer";
		const br = document.createElement("br");
		main.append(a, br);
	}
	if (category.links.length == 0) {
		const span = document.createElement("span");
		span.textContent = "No examples in this section";
		const br = document.createElement("br");
		main.append(span, br);
	}
}