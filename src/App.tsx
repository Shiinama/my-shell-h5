import TelegramLoginButton from 'react-telegram-login'

import './App.css'

function App() {
  const handleTelegramResponse = response => {
    window.ReactNativeWebView.postMessage(JSON.stringify(response))
  }
  return (
    <>
      <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="MyShellBotTestBot" />,
    </>
  )
}

export default App
