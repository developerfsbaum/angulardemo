// קומפוננטה היא פונקציה ולכן יכולה לקבל פרמטרים
// אבל קומפוננטה יכולה לקבל רק פרמטר אחד
// export const Student = (props) => {
export const Student = ({ name, age, grade }) => {
    // props - properties
    // console.log(props);


    // לוגיקה - JS
    // const name = props.name
    // const age = props.age
    // const grade = props.grade

    // אלמנטים - xml - תצוגה
    return <>
        {/* עטוף במסולסליים JS כל קוד */}
        <p>name: {name}</p>
        {/* אם הגיל קטן מ 9 - אוטוטו... */}
        {/* אם גדול - הידד אני יכול לחצות את הכביש לבד */}
        <p>age: {age}</p>
        {age >= 9 ? <p>הידד! אני יכול לחצות את הכביש לבד 🚦🛞🚘😂</p> : <p>כשתגדל תבין...</p>}
        {/* אם הציון אינו קיים - נציג הודעה טעון בחינה */}
        {/* {grade && <p>grade: {grade}</p>} */}
        {grade && <p>grade: {grade}</p> || <p>טעון בחינה</p>}
        <p>~~~~~~~~~~~~~~~~~~~~</p>
    </>
}

// // js
// // חילוץ ערכי המפתחות מאובייקט
// const p = { name: 'Sara', age: 20, city: 'Jerusalem' }

// // הגדרת אובייקט שמכיל משתנים בשמות זהים לשמות המפתחות
// // הערכים ישלפו בהתאמה
// // סדר המשתנים אינו משמעותי
// // השמות כן
// const { name, city, age } = p
// console.log(name)

// // חילוץ איברי מערך
// // לפי מיקום
// const arr = ['aaa', 'bbb', 'ccc']
// const [a1, a3, a2] = arr