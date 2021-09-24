import * as def from 'https://cdn.skypack.dev/dom-to-image';

window.requestIdleCallback(() => {
	document.getElementsByTagName('section');
	const sections = Array.from(document.querySelectorAll('section'));
	let count = 0;
	for (const section of sections) {
		def.DomToImage.toPng(
			// zsdef.toPng
			section,
			{
				bgcolor: document.body.style.background,
			}
		).then(function (dataUrl) {
			const link = document.createElement('a'),
				kid = section.firstElementChild;

			if (kid) {
				console.log(kid.textContent);
				console.log(dataUrl);
				const name = kid?.textContent ?? `nameError${count++}`;
				link.download = `${name}.png`;
				link.href = dataUrl;
				kid?.appendChild(link);
			}

			// link.click();
			// new Blob([dataUrl]);
			// Data  dataUrl
			// HTMLAnchorElement. (dataUrl, 'my-node.png');
		});

		document;
	}
});
