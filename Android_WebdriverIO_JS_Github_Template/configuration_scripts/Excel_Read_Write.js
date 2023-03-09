let XLSX = require('xlsx');
const Excel_Obj = require('exceljs');
let wb = new Excel_Obj.Workbook();
//let workBook = wb.xlsx.readFile('./Retail_FunctionalValidationScripts_DataFiles/Retail_Login_FV_DF.xlsx');

class Excel_Read_Write
{
    
    read_from_excel(FilePath, ws_name)
    {
        let wb_obj = XLSX.readFile(FilePath);
        let ws_obj = wb_obj.Sheets[ws_name];

        //Converting Excel Sheet data into Json to ready the data and return that data to calling function Starts
        return XLSX.utils.sheet_to_json(ws_obj);
        //Converting Excel Sheet data into Json to ready the data and return that data to calling function Ends
    };

    ReadTestDataFile_Fun = async function(TDF_Name, WS_name)
    {
        
        return await wb.xlsx.readFile(TDF_Name).then(async () => 
        {
            const WorkSheet_Obj = wb.getWorksheet(WS_name);
            let ccvalue = WorkSheet_Obj.columnCount;
            console.log('Test*******ColumnCount:'+ ccvalue)
            return ccvalue;
        }); 
    }
    
    getRowCount = async() => 
    {
        const workSheet = (await workBook).getWorksheet('test');
        let noOfRows = workSheet.rowCount
        console.log('No. of rows in theexcel file'+noOfRows);
        return noOfRows
    }

    ReadDataFromExcel = async function (row, columnName) 
    {
        const workSheet = (await workBook).getWorksheet('test');
        let noOfColumns = workSheet.columnCount;
        let cellValue;
        let columnValueFromExcel;
        for (let j = 1; j < noOfColumns; j++) 
        {
            columnValueFromExcel = workSheet.getRow(1).getCell(j).value;
            if (columnValueFromExcel === columnName) 
            {
                cellValue = workSheet.getRow(row).getCell(j).value;
                break;
            }
        }
        return cellValue;
    }

    //This Function is to Get the specified Cell/Column Value Starts
        readCellValueFromExcel(workSheet,rowNum,columnCount,columnName_V)
        {
            let cellValue
            for (let j = 1; j < columnCount; j++) 
            {
                let getColumnName = workSheet.getRow(1).getCell(j).value;
                if (getColumnName.match(columnName_V)) 
                {             
                    cellValue = workSheet.getRow(rowNum).getCell(j).value;
                    break;
                }
            }
            return cellValue;
        }
    //This Function is to Get the specified Cell/Column Value Ends

    //This Function/Method is to Write the data to specified Cell Starts
    writeResultIntoExcel(workSheet,rowNum,columnCount,columnName_V,cellValue)
    {    
        for (let j = 1; j <= columnCount; j++) 
        {
            let getColumnName = workSheet.getRow(1).getCell(j).value;
            if (getColumnName.match(columnName_V)) 
            {        
                workSheet.getRow(rowNum).getCell(j).value = cellValue;
                break;
            }
        }
    }
    //This Function/Method is to Write the data to specified Cell Ends

}
module.exports = new Excel_Read_Write();


