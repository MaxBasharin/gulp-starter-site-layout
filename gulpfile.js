// основные модули
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
// перевод значений в глобальную переменную
global.app = {
	path: path,
	gulp: gulp
}

// Иморт задачи
import { copy } from "./gulp/tasks/copy.js";
import { reset } from './gulp/tasks/reset.js';

// наблюдптель за изменениями в файлах
function watcher() {
	gulp.watch(path.watch.files, copy)
}

// построение сценариев
const dev = gulp.series(reset, copy, watcher);

// выполнение сценария по умолчанию
gulp.task('default', dev);
