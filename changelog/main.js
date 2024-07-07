const hash = location.hash ? location.hash.substring(1).split(",") : [];
const main = document.getElementById("content");
main.textContent = "";
for(const version of log) {
	const br = document.createElement("br");
	const content = document.createElement("a");
	const title = document.createElement("h2");
	const titleA = document.createElement("a");
	const list = document.createElement("ul");

	content.id = version.version;
	title.textContent = version.version;
	title.style.margin = "0";
	titleA.href = version.pr;
	titleA.target = "_blank";
	content.classList.add("content");
	if (hash.includes(version.version)) content.classList.add("content-focus");

	for (const changeText of version.changes) {
		const changeEl = document.createElement("li");
		changeEl.textContent = changeText;
		list.append(changeEl);
	}
	titleA.append(title);
	content.append(titleA, list);
	main.append(content, br);
}

