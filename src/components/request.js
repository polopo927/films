export const getList = async (url) => {
	const result = await fetch(url)

	if (!result.ok) {
		throw new Error(`Could not fetch ${url}, status: ${result.status}`)
	}
	return await result.json()
}