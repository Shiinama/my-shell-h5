import { useEffect, useRef } from 'react'
import TelegramLoginButton from 'react-telegram-login'

import './App.css'

function App() {
  const handleTelegramResponse = response => {
    console.log(response)
  }
  return (
    <>
      <button
        onClick={() => {
          window.ReactNativeWebView.postMessage('1231231321')
          console.log(111)
        }}
      >
        213123
      </button>
      <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="Aishell_bot" />,
    </>
  )
}

export default App
