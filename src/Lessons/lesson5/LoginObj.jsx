import { useState } from "react"

export const LoginObj = ({ signin }) => {

    const [user, setUser] = useState({})

    // // js
    // // object & arrays
    // const p = { name: 'Sara', age: 20 }
    // p.name = 'Rachel'
    // // דריסה של ערך מפתח השם

    // p.city = 'Jerusalem'
    // // נוסף מפתח עיר שמכיל את הערך ירושלים

    // // p = { name: 'Miriam', age: 24 }
    // // error: Assignment to constant variable - הצבה למשתנה קבוע

    // const p1 = p
    // p1.age = 12
    // // p.age = 12
    // // שני מצביעים לאותו מקום בזיכרון

    // const p2 = {
    //     name: p.name,
    //     age: p.age,
    //     city: p.city,
    //     // המפתח טלפון לא יווצר באובייקט החדש כיון שאינו קיים באובייקט המקורי
    //     // מפתח שמכיל ערך שאינו מוגדר - לא קיים!
    //     phone: p.phone,
    //     address: 'xxx'
    // }
    // // יצירת מצביע למקום חדש
    // p2.city = 'haifa'
    // // המצביע המקורי לא משתנה

    // // יצירת אובייקט חדש והעתקת הנתונים מאובייקט קיים -
    // // כאשר המפתחות באובייקט הקיים אינם ידועים

    // let p3 = {}
    // // forin שימוש בלולאת
    // // for (const key in p) {
    // //     p3[key] = p[key]
    // // }

    // // שפיכה
    // const p4 = { ...p, hobby: 'dance', age: 18 }

    // const arr = [1, 2, 3, 4, 5]
    // const arr2 = [...arr, 6]

    const send = () => {
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
        <label htmlFor="UN">user name:</label><br></br>
        <input id="UN" placeholder="input your email"
            onBlur={(e) => { setUser({ ...user, email: e.target.value }); console.log(user) }}>
        </input ><br></br><br></br>
        <label htmlFor="PW">password:</label><br></br>
        <input id="PW" placeholder="input your password"
            onBlur={(e) => { setUser({ ...user, password: e.target.value }); console.log(user) }}>
        </input><br></br><br></br>
        <button onClick={send}>send</button>
    </>
}