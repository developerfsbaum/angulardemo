// כאשר יש קבצים רבים לייבא או מערך מוצרים לדוגמה שלכל אחד יש תמונה
// לא ניתן לייבא את כל הקבצים
// public - לכן נשמור את הקבצים בתיקייה של הקבצים הסטטיים של הפרויקט
// או לחילופין בתייקה של הקבצים הסטטים בצד שרת
// הגישה קלה מאוד
// import autumn from './Images/Autumn23.jpg'
// import spring from './Images/spring.jpg'
// import summer from './Images/summer.jpg'
// import winter from './Images/winter.jpg'

export const Album = ({ width }) => {

    const seasons = [
        { name: 'Autumn', picture: 'Autumn23.jpg', color: 'orange' },
        { name: 'Winter', picture: 'winter.jpg', color: 'blue' },
        { name: 'Spring', picture: 'spring.jpg', color: 'green' },
        { name: 'Summer', picture: 'summer.jpg', color: 'yellow' },
    ]

    return <>
        <div className="album" style={{ width }}>
            {seasons.map((x, i) => <Page key={i} imageInfo={x}></Page>)}
        </div>
    </>
}



export const Page = ({ imageInfo }) => {
    return <>
        <div className="page" style={{ borderColor: imageInfo.color }}>
            {/* <img className="img" src={imageInfo.picture}></img> */}
            {/* public כאשר הקבצים נמצאים בתיקיית ה */}
            {/* ./ ניתן לגשת לקבצים באמצעות */}
            {/* ./ - מגיע לתיקיית הקבצים הסטטיים */}
            <img className="img" src={`./Images/${imageInfo.picture}`}></img>
            <p className="p" style={{ color: imageInfo.color }}>{imageInfo.name}</p>
        </div>
    </>
}