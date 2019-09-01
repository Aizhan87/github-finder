import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'

const Alert = () => {
    const alertContex = useContext(AlertContext)
    const { alert } = alertContex

    return (
        alert != null && (<div className={`alert alert-${alert.type}`}>
            <i className='fas fa-info-circle' /> {alert.message}
        </div>)
    )
}

export default Alert
