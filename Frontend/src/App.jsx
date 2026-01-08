import { SignInButton, SignOutButton, SignedIn, SignedOut } from '@clerk/clerk-react'
import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <SignedOut> <SignInButton mode="modal"/></SignedOut>
      <SignedIn>
        <SignOutButton/>
      </SignedIn>
    </div>
  )
}

export default App