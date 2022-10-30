import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // содержит путь с папкой результа
const srcFolder = `./src`; // содержит путь с папкой исходника

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		files: `${buildFolder}/files/`,
	},
	src: {
		js: `${srcFolder}/js/app.js`,
		scss: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/*.html`,
		files: `${srcFolder}/files/**/*.*`, // проверяет файлы в любых вложенных папках папки files (все файлы и папки)
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/**/*.html`,
		files: `${srcFolder}/files/**/*.*`, 
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}