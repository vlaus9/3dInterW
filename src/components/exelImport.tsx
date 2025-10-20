
import { useRef, useCallback } from 'react';
import { useAppDispatch } from '../store/hooks';
import { isLoading, setExelData, setError, type IExelRow } from '../store/slices/exelSlice';
import * as XLSX from 'xlsx';


export const ExelImporter: React.FC = () => {
    const dispatch = useAppDispatch();

    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    const file = event.target.files?.[0];
    
    if (!file) {return}

    const fileName = file.name.toLowerCase()
    const filterFileName = fileName.endsWith('.xlsx') || fileName.endsWith('.xls') || fileName.endsWith('.csv');

    if (!filterFileName) {
        dispatch(setError('Выберите файл формата .xlsx, .xls или .csv'))
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        return
    }
    dispatch(isLoading())

    const reader = new FileReader();

    reader.onload = (e) => {

        try {

            const data = e.target?.result;

            if (!data) 
            {
                dispatch(setError("Не получилось загрузить"))
                return
            }

            const workBook = XLSX.read(data, { type: 'binary'});
            const firstSheetName = workBook.SheetNames[0];
            const workSheet = workBook.Sheets[firstSheetName];

            const jsonData = XLSX.utils.sheet_to_json(workSheet);

            if (jsonData.length === 0) {
                dispatch(setError("Таблица пустая"))
                return
            }

            const headers = Object.keys(jsonData[0] as string[])

            dispatch(setExelData({
                data: jsonData as IExelRow[],
                headers: headers,
                fileName: file.name
            }))
        }
        
        catch (error) {
            dispatch(setError("Ошибка при обработке файла")) 
        }}

    reader.onerror = () => {
        dispatch(setError("Ошибка чтения файла"))
    }

    reader.readAsArrayBuffer(file)

    };

    return (
        <>
            <div className={'p-[20px] rounded-md border-[white] text-center mb-[20px]'}>
                <h1>📊 Загрузи Excel файл</h1>
                <input 
                type='file' 
                ref={fileInputRef} 
                onChange={handleFileUpload} 
                className='m-y-[10px]'>
                </input>
            </div>
        </>
    )
}

    