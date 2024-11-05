import React from 'react'

export default function Dashboard({onLogout}) {
  return (
    <div>
      <button onClick={onLogout}> LogOut </button>
    </div>
  )
}
