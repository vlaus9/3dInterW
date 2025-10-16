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


    
    return (
    <>
        
    </>
    )
}