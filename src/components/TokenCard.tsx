import React from 'react'
import {IToken} from '../interface/interfaces'
import '../styles/TokenCard.css'
import {intToRGB, hashCode, invertColor} from '../helpers/ColorManipulation'

export default function TokenCard(props: any) {
    const tokenData:IToken = props.tokenData;
    const tokenColor:string = intToRGB(hashCode(tokenData._id));
    const tokenTextColor:string = invertColor(tokenColor);
    const tokenCreatedAt:Date = new Date(tokenData.createdAt);
    const tokenDateTime:string = `${tokenCreatedAt.getDate()}.${tokenCreatedAt.getMonth()}.${tokenCreatedAt.getFullYear()} - ${tokenCreatedAt.getHours()}:${tokenCreatedAt.getMinutes()}`
    return (
        <div className="tokenCard" style={{backgroundColor: `#${tokenColor}`}}>
            <div className="tokenCard_text" style={{color: `#${tokenTextColor}`}}>
                <div>
                    {tokenData.name}
                </div>
                <div style = {{fontSize: 'small'}}>
                    {tokenDateTime}
                </div>
            </div>
        </div>
    )
}