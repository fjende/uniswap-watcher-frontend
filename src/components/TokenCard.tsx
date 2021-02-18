import React from 'react'
import {IToken} from '../interface/interfaces'
import '../styles/TokenCard.css'

export default function TokenCard(props: any) {
    const tokenData:IToken = props.tokenData
    return (
        <div className="tokenCard">
            <div className="tokenCard_text">
                {tokenData.name}
            </div>
        </div>
    )
}
