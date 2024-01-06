export const BaseURL = () => {
	if (process.env.PROJECT_URL) {
		return process.env.PROJECT_URL
	}
	return 'http://localhost:3000'
}
