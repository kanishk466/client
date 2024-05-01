import React from 'react'
import Messenger from './components/Messenger'
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';
const App = () => {

const clientId = '953616243297-plmnohi47vactpomrhctdqvi7re36lud.apps.googleusercontent.com'


  return (
    <GoogleOAuthProvider clientId={clientId}>
     <AccountProvider>
     <Messenger/>
     </AccountProvider>

  
    </GoogleOAuthProvider>
  )
}

export default App
