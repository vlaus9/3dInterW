import { useAppDispatch, useAppSelector } from './store/hooks'
import { cashTextContent, changeText, clearInput, delElem } from './store/slices/inputSlice'
import { ExelImporter } from './components/exelImport'
import './App.css'


function App() {

  const { isClear, cashText, textShow } = useAppSelector((state) => state.textSlice)
  const dispatch = useAppDispatch()

  return (
    <>
      <input placeholder='Введите текст' value={isClear ? '' : cashText} onChange={(e) => dispatch(cashTextContent(e.target.value))}>
      </input>
      <button onClick={() => dispatch(changeText())}>Внести изменения</button>
      <button onClick={() => dispatch(clearInput())}>Очистка</button>
      {textShow ? textShow.map((item) => {
        return <h1 key={item.id}>{item.content} <button onClick={() => dispatch(delElem(item.id))}>Х</button></h1>
      }) : null }

      <ExelImporter />
    </>
  )
}

export default App
