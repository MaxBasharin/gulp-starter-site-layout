import del from "del"; // версия 6.1.1, так как другие имеют ошибку иморта

export const reset = () => {
	return del(app.path.clean);
}