export const pesosFormatter = (amount: number) => {
	const formatter = new Intl.NumberFormat('es-ES')
	const formattedTotal = formatter.format(amount)

	return formattedTotal
}
