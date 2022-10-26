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
gulp.task('default', copy);
