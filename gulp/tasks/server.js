export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}` // базовая папка, которую нужно запустить
        },
        notify: false,
        port: 3000,
    })
}