import { useState } from "react"
import { Card } from "./Card"
import { Form } from "./Form"

export const Main = () => {

    const [cardDetails, setCardDetails] = useState({})

    const types = [
        { name: 'birthday', text: 'יומולדת' },
        { name: 'wedding', text: 'חתונה' },
        { name: 'barMitzva', text: 'בר מצוה' },
        { name: 'engagement', text: 'אירוסין' },
        { name: 'shanaTova', text: 'שנה טובה' }
    ]

    return <>
        <Form setCardDetails={setCardDetails} cardDetails={cardDetails} types={types}></Form>
        <Card cardDetails={cardDetails}></Card>
    </>
}