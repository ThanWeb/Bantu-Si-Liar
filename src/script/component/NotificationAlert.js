import React from 'react'
import { FcCancel, FcApproval } from 'react-icons/fc'
import PropTypes from 'prop-types'

const NotificationAlert = ({ status, text }) => {
    return (
        <div className='notification-alert'>
            {
                status ? <FcCancel/> : <FcApproval/>
            }
            <p>{text}</p>
        </div>
    )
}

NotificationAlert.propTypes = {
    status: PropTypes.bool,
    text: PropTypes.string
}

export default NotificationAlert
