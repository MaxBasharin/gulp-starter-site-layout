import replace from "gulp-replace"; // поиск и замена
import plumber from "gulp-plumber"; // обработка ошибок
import notify from "gulp-notify"; // сообщения (подсказка)
import browsersync from "browser-sync"; // Ллокальный сервер
import newer from "gulp-newer"; // проверка обновлений

export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browsersync: browsersync,
	newer: newer
}

