
export const numberToCurrency = (value?: number | bigint) => {

    const valueNumber = (value?.toString().includes(",")) ? value?.toString().replace(",", ".") : value?.toString();

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return formatter.format(parseFloat(valueNumber || "0"));
}