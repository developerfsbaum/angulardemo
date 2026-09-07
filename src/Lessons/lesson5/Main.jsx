import { Login } from "./Login"
import { LoginForm } from "./LoginForm"
import { LoginObj } from "./LoginObj"

export const Main = () => {

    let users = [
        { username: 'Esty Ben Menachem', email: 'e0556754484@gmail.com', password: 'Eb4484' },
        { username: 'Dini Kaufman', email: 'd0583202608@gmail.com', password: 'Dk2608' },
        { username: 'Esty Finkelstein', email: 'esti83580@gmail.com', password: 'Ef3580' },
        { username: 'Sari Helfer', email: 'sh0556757968@gmail.com', password: 'Sh7968' },
    ]

    // מקבלת משתמש ובודקת האם קיים לפי אימייל וסיסמה
    const userExists = (user) => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === user.email && users[i].password === user.password) {
                return users[i]
            }
        }
        return false
    }

    const addUser = (user) => {
        let result = userExists(user)
        if (!result) {
            users.push(user)
            return true
        }
        else return false
    }

    return <>
        {/* register = sign up = הרשמה */}
        {/* login = sign in = התחברות - כניסה */}
        {/* <Login signin={userExists}></Login> */}
        {/* <LoginObj signin={userExists}></LoginObj> */}
        <LoginForm signin={userExists}></LoginForm>
    </>
}