import pic from './Images/קיץ.jpg'

export const Image = () => {
    return <>
        <h1>חופשה נעימה... 😉</h1>
        {/* אין אפשרות להציג תמונה לפי ניתוב */}
        {/* אא"כ התמונה שמורה בתיקיית הקבצים הסטטיים של הפרויקט */}
        {/* <img src={'./Images/קיץ.jpg'} alt='חופשה נעימה' style={{ width: '30vw', height: 'auto' }}></img> */}
        {/* יש לייבא את הקובץ - ניתן לקרוא לו בכל שם שנרצה */}
        <img src={pic} alt='חופשה נעימה' style={{ width: '30vw', height: 'auto' }}></img>

    </>
}