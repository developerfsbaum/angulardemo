import { useState } from "react"

export const Login = ({ signin }) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const send = () => {
        let user = { email, password }
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
        <input id="UN" placeholder="input your email" onBlur={(e) => setEmail(e.target.value)}></input><br></br><br></br>
        <label htmlFor="PW">password:</label><br></br>
        <input id="PW" placeholder="input your password" onBlur={(e) => setPassword(e.target.value)}></input><br></br><br></br>
        <button onClick={send}>send</button>
    </>
}