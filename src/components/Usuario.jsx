import React from 'react'

function Usuario(props) {
  return (
    <div>
        <h1>
            Nome de Usuário: {props.username}
            </h1>
    </div>
  )
}

export default Usuario