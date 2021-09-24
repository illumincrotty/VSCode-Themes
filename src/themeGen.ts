import JSON5 from 'json5';
import fs from 'node:fs';
import path from 'node:path';
import shiki from 'shiki';
import { getSVGRenderer } from 'shiki-renderer-svg';
const current = path.parse(import.meta.url);

const wip = path.join(
	process.cwd(),
	'..',
	'themes',
	'living-twilight-color-theme.json'
);
console.log(wip);

const main = async () => {
	const highlighter = await shiki.getHighlighter({
		// C:\Users\bcrot\Code\cliThemes\vscode-theme-deep-twilight\themes\living-twilight-color-theme.json
		theme: JSON5.parse(fs.readFileSync(wip).toString()),
	});

	const svgRenderer = await getSVGRenderer({
		bg: highlighter.getBackgroundColor(),
		fontFamily: {
			name: 'Fira Code',
			cssURL: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap',
		},
		fontSize: 14,
	});

	const generateThemeSVG = (inputPath: string) => {
		const _code = fs
			.readFileSync(inputPath, 'utf-8')
			.replaceAll('\t', '    ');

		const [directory, file, extension] = [
			path.dirname(inputPath),
			path.basename(inputPath),
			path.extname(inputPath).slice(1),
		];

		// console.log(directory, file);

		const tokens = highlighter.codeToThemedTokens(_code, extension);

		const html = shiki.renderToHtml(tokens, {
			bg: highlighter.getBackgroundColor(),
		});

		const svg = svgRenderer.renderToSVG(tokens);

		fs.writeFileSync(
			path.join(
				'assets/code pictures',
				`${file.slice(
					file[0] === '.' ? 1 : 0,
					file.length - (extension.length + 1)
				)}.svg`
			),
			svg
		);
		// fs.writeFileSync(
		// 	path.join(
		// 		'assets/html',
		// 		`${file.slice(
		// 			file[0] === '.' ? 1 : 0,
		// 			file.length - extension.length
		// 		)}.html`
		// 	),
		// 	`<h2>${file}</h2>` + html
		// );

		return `<section class ="${extension}"><h2>${file}</h2>\n${html}</section>`;
	};

	const source = 'assets/samples';
	const html = [
		'<link rel="stylesheet" href="../styles/index.css" />',
		'<h1>Code Samples</h1>',
	];
	for (const file of fs.readdirSync(source)) {
		html.push(generateThemeSVG(path.join(source, file)));
	}

	fs.writeFileSync(
		path.join('assets/html', `index.html`),
		`<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Code Samples</title>
				<link rel="stylesheet" href="../styles/index.css" />
			</head>
			<body>${html.join('\n')}</body>
		</html>`
	);

	// void generateThemeSVG('assets/samples/.prettierrc.json');

	return Promise.resolve();
};

void main();
