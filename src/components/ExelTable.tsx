import { useAppSelector } from '../store/hooks'
import { Spin } from 'antd'


export const ExelTable: React.FC = () => {
    const { data, headers, fileName, isLoad, error } = useAppSelector((state) =>  state.exel);


    if (isLoad) {
        return (
            <>
                <div className={'text-center'}>
                    <Spin size='large' />
                    <h1>Файл загружается...</h1>
                </div>
            </>
        )
    }

    if (error) {
        return (
            <>
                <div>
                    <h1>Сорри, произошла ошибка {error}</h1>
                </div>
            </>
        )
    }

    if (data.length === 0) {
        return (
            <>
                <div>
                    <h1 className={'text-center'}>Данные не загружены</h1>
                </div>
            </>
        )
    }
console.log(data)
    return (
    <>
        <div>

            <div>
                <h3>Файл: {fileName}</h3>
                <h3>Найдено {data.length} строк, {headers.length} колонок </h3>
            </div>
             
            <div className={'border border-cyan-600 rounded-[8px] overflow-x-auto'}>
                <table className={'w-full border-collapse bg-[#6EF079]'}>
                    <thead>
                        <tr className={'bg-[#6EF0D1]'}>
                            {headers.map((header, index) => {
                                return <th
                                key={index}
                                className={'border text-[20px]'}
                                >
                                {header}</th>
                            })}
                        </tr>
                    </thead>
                    
                    <tbody>
                        {data.map((row, index) => {
                            return <tr
                            key={index}
                            // className={index % 2 === 0 ? 'bg-[#30ab8eff]' : 'bg-[#076851ff]'}
                            >
                                {headers.map((header, index) => {
                                    return <td
                                    key={index}
                                    className={'bg-[#33c5a3ff] border text-center'}
                                    >
                                        {row[header]?.toString() || ''}
                                    </td>
                                })}
                            </tr>
                        })}
                    </tbody>


                </table>
            </div>

        </div>
    </>
    )
}
