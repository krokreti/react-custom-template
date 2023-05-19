import * as XLSX from "xlsx"

interface DataItem {
    [key: string]: any;
}

export const generateSpreadsheet = (data: DataItem[]) => {
    // Create workbook and worksheet
    const columns = Object.keys(data[0]);
    const dataArray: any[][] = [columns, ...data.map(obj => Object.values(obj))];
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(dataArray);

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');

    XLSX.writeFileXLSX(workbook, "planilha.xlsx");
};

