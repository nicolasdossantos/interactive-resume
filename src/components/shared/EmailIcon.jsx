import React from 'react'
import {Avatar} from '@material-ui/core'

export default function EmailIcon({size= 50, round=false}) {
    let shape = round ? 'circle' : 'square'
    return (
        <div>
            <Avatar src={'email.jpeg'} variant={shape}  style={{width: `${size}px`, height: `${size}px`, color: 'white'}} />
        </div>
    )
}
