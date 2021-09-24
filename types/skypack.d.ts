declare module 'https://*';

// Second, list out all your dependencies. For every URL, you must map it to its local module.
declare module 'https://cdn.skypack.dev/html-to-image' {
	export * from 'html-to-image';
}
declare module 'https://cdn.skypack.dev/dom-to-image' {
	export * from 'dom-to-image';
}

declare module 'https://cdn.skypack.dev/downloadjs' {
	export * from 'downloadjs';
}
