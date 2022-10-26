import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // содержит путь с папкой результа
const srcFolder = `./src`; // содержит путь с папкой исходника

export const path = {
	build: {
		files: `${buildFolder}/files/`,
	},
	src: {
		files: `${srcFolder}/files/**/*.*`, // проверяет файлы в любых вложенных папках папки files (все файлы и папки)
	},
	watch: {
		files: `${srcFolder}/files/**/*.*`, 
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}