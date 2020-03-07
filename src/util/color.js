export const intToRGBA = n => {
	let r, g, b, a

	n >>>= 0

	r = (n & 0xff000000) >>> 24
	g = (n & 0xff0000) >>> 16
	b = (n & 0xff00) >>> 8
	a = (n & 0xff) / 255

	return `rgba(${[r, g, b, a].join()})`
}
