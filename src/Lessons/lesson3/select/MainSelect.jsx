import { useState } from "react"
import { Details } from "./Details"
import { InputName } from "./InputName"
import { SelectCity } from "./SelectCity"
import { SelectCountry } from "./SelectCountry"
import { Select } from "./Select"

export const MainSelect = () => {

    const [name, setName] = useState("אנונימי")
    const [selectedCountry, setSelectedCountry] = useState()
    const [selectedCity, setSelectedCity] = useState()

    // dictionary - מילון
    // key&value אובייקט שמורכב מ
    // key יכול להיות מסוגים שונים
    const world = {
        ישראל: ['ירושלים', 'חיפה', 'עכו', 'תל אביב', 'באר שבע'],
        צרפת: ['פריז', 'ניס', 'בורדו', 'ורסאי', 'שטרסבורג'],
        רוסיה: ['מוסקבה', 'אודסה', 'לנינגרד'],
    }

    // Object.keys - יוצרת מערך ממפתחות המילון / האובייקט
    const countries = Object.keys(world)

    const cities = world[selectedCountry]

    // const p = { name: 'Sara', age: 19 }
    // p.name // Sara
    // p['name'] // Sara
    // let key = 'name'
    // p[key] // Sara
    // for (const key in p) {
    //     console.log(key + ": " + p[key]);
    // }

    // 5 == '5'
    // 5 !== '5'

    // לא ניתן להכניס שם שאורכו קצר מ 2 תווים
    const changeName = (value) => {
        if (value.length >= 2) {
            setName(value)
        }
    }

    return <>
        {/* תיבת טקסט - הזנת שם משתמש */}
        {name === 'אנונימי' && <InputName setName={changeName}></InputName>}
        {/* בחירת ארץ מתוך רשימה */}
        <Select></Select>
        {/* {name !== 'אנונימי' && !selectedCity && <SelectCountry countries={countries} setCountry={setSelectedCountry}></SelectCountry>} */}
        {/* בחירת עיר מתוך רשימה */}
        <Select></Select>
        {/* {selectedCountry && !selectedCity && <SelectCity cities={cities} setCity={setSelectedCity}></SelectCity>} */}
        {/* הצגת פרטים */}
        {selectedCity && <Details name={name} city={selectedCity} country={selectedCountry}></Details>}
    </>
}