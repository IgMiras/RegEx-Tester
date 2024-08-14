import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [regex, setRegex] = useState('^$')

  const handleChangeInput1 = (e) => {
    setText1(e.target.value)
  }

  const handleChangeInput2 = (e) => {
    setText2(e.target.value)
  }

  const handleChangeRegex = (e) => {
    const value = e.target.value

    // Remove the fixed characters (^ and $) if they are already present
    let newValue = value.replace(/^\^/, '').replace(/\$$/, '')

    // Set the new regex value with ^ and $ fixed at the start and end
    setRegex(`^${newValue}$`)
  }

  const getInputStyle = (text) => {
    try {
      const regExp = new RegExp(regex)
      return regExp.test(text) ? { backgroundColor: 'lightgreen' } : { backgroundColor: 'lightcoral' }
    } catch (e) {
      // If the regex is invalid, default to red background
      return { backgroundColor: 'lightcoral' }
    }
  }

  return (
    <div>
      <h1>RegEx tester by IgMiras & GMenezess</h1>
      <h2>RegEx Rule</h2>
      <input 
        type="text" 
        style={{width: 600, height: 30}} 
        onChange={handleChangeRegex} 
        value={regex}
      />
      <h2>Input 1</h2>
      <input 
        type="text" 
        style={{...getInputStyle(text1), width: 600, height: 30}} 
        onChange={handleChangeInput1} 
        value={text1}
      />
      <h2>Input 2</h2>
      <input 
        type="text" 
        style={{...getInputStyle(text2), width: 600, height: 30}} 
        onChange={handleChangeInput2} 
        value={text2}
      />
    </div>
  )
}

export default App
