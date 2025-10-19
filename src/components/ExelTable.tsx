import { useAppSelector } from '../store/hooks'
import { List } from 'antd'


export const ExelTable: React.FC = () => {
    const { data, headers, fileName, isLoad, error } = useAppSelector((state) =>  state.exel);


    if (isLoad) {
        return (
            <>
                <div>
                    <List />
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
                    <h1>Данные не загружены</h1>
                </div>
            </>
        )
    }

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
                                style={{border: '1px solid black'
                                }}>
                                {header}</th>
                            })}
                        </tr>
                    </thead>


                </table>
            </div>

        </div>
    </>
    )
}