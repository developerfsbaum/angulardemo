export const LoginForm = ({ signin }) => {

    const send = (e) => {

        // submit - כברירת מחדל שולח את הטופס לניתוב אחר
        // אם לא מוצא ניתוב שולח לסימן שאלה וטוען את הדף מחדש
        // בשביל לבטל את ברירת המחדל נכתוב את הפקודה הבאה
        e.preventDefault();

        console.log(e);

        // אירוע סבמיט מוצמד לטופס ולכן
        // e.target = form
        // הטופס אוסף את כל תיבות הטקס שלו לתוך מערך
        // כך יש גישה ישירה לשדות הטופס

        let user = {
            email: e.target[0].value,
            password: e.target[1].value
        }
        let result = signin(user)
        if (!result) {
            alert('user is not defined!')
        }
        else {
            alert(`welcome to ${result.username}!`)
            // alert('welcome to ' + result.username + '!')
        }
    }

    return <>
        <form onSubmit={send}>
            <label htmlFor="UN">user name:</label><br></br>
            <input id="UN" placeholder="input your email" defaultValue={'nachami'}></input><br></br><br></br>
            <label htmlFor="PW">password:</label><br></br>
            <input id="PW" placeholder="input your password"></input><br></br><br></br>
            <input type="submit"></input>
        </form>
    </>
}