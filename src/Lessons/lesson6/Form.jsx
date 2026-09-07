export const Form = ({ setCardDetails, cardDetails, types }) => {

    // const send = (e) => {

    //     e.preventDefault();
    //     const details = {
    //         addressed: e.target[0].value,
    //         blessing: e.target[1].value,
    //         semiText: e.target[2].value,
    //         addressee: e.target[3].value
    //     }
    //     setCardDetails(details)
    // }

    return <>
        {/* <form onSubmit={send}>
            <label htmlFor="AD">פניה:</label><br></br>
            <input id="AD" placeholder="הכנס פניה"></input><br></br><br></br>
            <label htmlFor="MT">ברכה:</label><br></br>
            <input id="MT" placeholder="הכנס ברכה"></input><br></br><br></br>
            <label htmlFor="ST">טקסט נוסף:</label><br></br>
            <input id="ST" placeholder="הכנס טקסט נוסף - לא חובה"></input><br></br><br></br>
            <label htmlFor="AE">מוען:</label><br></br>
            <input id="AE" placeholder="הכנס מוען"></input><br></br><br></br>
            <input type="submit"></input>
        </form> */}

        <label htmlFor="T">סוג כרטיס:</label><br></br>
        <select onChange={(e) => setCardDetails({ ...cardDetails, type: e.target.value })}>
            {types.map((x, i) => <option key={i} value={x.name}>{x.text}</option>)}
        </select>
        <br></br><br></br>
        <label htmlFor="AD">פניה:</label><br></br>
        <input id="AD" placeholder="הכנס פניה"
            onChange={(e) => setCardDetails({ ...cardDetails, addressed: e.target.value })}>
        </input><br></br><br></br>
        <label htmlFor="MT">ברכה:</label><br></br>
        <input id="MT" placeholder="הכנס ברכה"
            onChange={(e) => setCardDetails({ ...cardDetails, blessing: e.target.value })}>
        </input><br></br><br></br>
        <label htmlFor="ST">טקסט נוסף:</label><br></br>
        <input id="ST" placeholder="הכנס טקסט נוסף - לא חובה"
            onChange={(e) => setCardDetails({ ...cardDetails, semiText: e.target.value })}>
        </input><br></br><br></br>
        <label htmlFor="AE">מוען:</label><br></br>
        <input id="AE" placeholder="הכנס מוען"
            onChange={(e) => setCardDetails({ ...cardDetails, addressee: e.target.value })}>
        </input><br></br><br></br>
        <label htmlFor="TC">צבע אותיות:</label><br></br>
        <input id="TC" type="color"
            onChange={(e) => setCardDetails({ ...cardDetails, textColor: e.target.value })}>
        </input><br></br><br></br>
        <label htmlFor="BC">צבע מסגרת:</label><br></br>
        <input id="BC" type="color"
            onChange={(e) => setCardDetails({ ...cardDetails, borderColor: e.target.value })}>
        </input><br></br><br></br>
    </>
}