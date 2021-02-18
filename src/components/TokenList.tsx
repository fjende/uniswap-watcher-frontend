import React from 'react'
import TokenCard from './TokenCard'
import {IToken} from '../interface/interfaces'

export default function TokenList(props:any): JSX.Element {
    return <> { props.allTokensData.tokens.map((token: IToken) => <TokenCard tokenData={token} key={token._id}/>) } </>
}
