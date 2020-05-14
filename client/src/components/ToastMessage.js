import React from 'react';
import{ Typography } from 'antd';

const ToastMessage = ({ show, message }) => (
    show && (
        <div>
            <Typography>{message}</Typography>
        </div>
    )
)

export default ToastMessage;