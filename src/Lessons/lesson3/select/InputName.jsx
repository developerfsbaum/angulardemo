export const InputName = ({ setName }) => {
    return <>
        <label>הכנס שם משתמש:</label>
        <input placeholder="הכנס שם משתמש" onBlur={(e) => setName(e.target.value)}></input>
    </>
}