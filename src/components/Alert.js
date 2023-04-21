import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div className={`alert position-absolute w-100 alert-${props.alert.type}`} role="alert">
                        {props.alert.msg}
                       </div>
      

    )
}
