import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";//

export const html = () => {
	return app.gulp.src(app.path.src.html)
	.pipe(fileInclude())
	.pipe(app.plugins.replace(/@img\//g, 'img/'))
	.pipe(webpHtmlNosvg()) // вызов плагина
	.pipe(app.gulp.dest(app.path.build.html))
}