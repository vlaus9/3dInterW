import { useAppDispatch, useAppSelector } from './store/hooks'
import { cashTextContent, changeText, clearInput } from './store/slices/inputSlice'
import './App.css'


function App() {

  const { isClear, initialText, cashText, textShow } = useAppSelector((state) => state.textSlice)
  const dispatch = useAppDispatch()

  return (
    <>
      <input placeholder='Введите текст' value={isClear ? '' : cashText} onChange={(e) => dispatch(cashTextContent(e.target.value))}>
      </input>
      <button onClick={() => dispatch(changeText())}>Внести изменения</button>
      <button onClick={() => dispatch(clearInput())}>Очистка</button>
      <h1>{textShow === '' ? initialText : textShow}</h1>
    </>
  )
}

export default App
