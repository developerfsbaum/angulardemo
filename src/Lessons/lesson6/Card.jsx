import './style.css'

export const Card = ({ cardDetails }) => {

    const { addressed, blessing, semiText, addressee, textColor, borderColor, type } = cardDetails

    return <>
        <div className={`card ${type}`} style={{ color: textColor, borderColor }}>
            <p className="addressed">{addressed}</p>
            <p className="mainText">{blessing}</p>
            <p className="semiText">{semiText}</p>
            <p className="addressee">{addressee}</p>
        </div>
    </>
}