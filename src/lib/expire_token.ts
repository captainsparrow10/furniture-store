export function generateExpireToken() {
	const currentDate = new Date()
	currentDate.setMinutes(currentDate.getMinutes() + 5)
	const expiresAt = currentDate.getTime()

	return expiresAt.toString()
}
