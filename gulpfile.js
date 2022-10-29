// основные модули
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js"
// перевод значений в глобальную переменную
global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins
}

// Иморт задачи
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';

// наблюдптель за изменениями в файлах
function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html);

// построение сценариев
const dev = gulp.series(reset, mainTasks, copy, gulp.parallel(watcher, server));

// выполнение сценария по умолчанию
gulp.task('default', dev);
