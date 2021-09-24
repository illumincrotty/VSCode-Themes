import { toPng } from 'https://cdn.skypack.dev/html-to-image';
// import * as def from 'https://cdn.skypack.dev/dom-to-image';

window.requestIdleCallback(() => {
	document.querySelectorAll('section');
	const sections = [...document.querySelectorAll('section')];
	let count = 0;
	for (const section of sections) {
		void toPng(section, {
			backgroundColor: '#1b1b1d',
			// bgcolor: document.body.style.background,
			// eslint-disable-next-line promise/prefer-await-to-then
		}).then(function (dataUrl) {
			const link = document.createElement('a'),
				kid = section.firstElementChild;

			if (kid) {
				console.log(kid.textContent);
				console.log(dataUrl);
				const name = kid.textContent ?? `nameError${count++}`;
				link.download = `${name}.png`;
				link.href = dataUrl;
				// link.click();

				// kid?.appendChild(link);
			}

			// new Blob([dataUrl]);
			// Data  dataUrl
			// HTMLAnchorElement. (dataUrl, 'my-node.png');
		});

		document;
	}
});
