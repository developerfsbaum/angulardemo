export const SelectCountry = ({ countries, setCountry }) => {
    return <>
        <label>בחר ארץ:</label>
        <select onChange={e => setCountry(e.target.value)}>
            <option disabled selected>בחר ארץ</option>
            {countries.map((c, i) => <option key={i}>{c}</option>)}
        </select>
    </>
}

// foreach - פונקציה שעוברת על מערך אובייקטים ועושה פעולה עבור כל אחד מהאובייקטים
// foreach - void
// map - פונקציה שעוברת על מערך אובייקטים ומחזירה מערך
// עבור כל אחד מהאובייקטים מה יכנס למערך החדש

// const arr = [
//     { name: 'ss', city: 'sss', phone: '3213', toraGrade: 92, mathGrade: 97, englishGrade: 78 },
//     { name: 'ss', city: 'sss', phone: '3213', toraGrade: 92, mathGrade: 97, englishGrade: 78 },
//     { name: 'ss', city: 'sss', phone: '3213', toraGrade: 92, mathGrade: 97, englishGrade: 78 },
//     { name: 'ss', city: 'sss', phone: '3213', toraGrade: 92, mathGrade: 97, englishGrade: 78 },
//     { name: 'ss', city: 'sss', phone: '3213', toraGrade: 92, mathGrade: 97, englishGrade: 78 },
// ]

// const newarr = arr.map((x, i) => {
//     return {
//         id: i,
//         name: x.name,
//         avgGrades: (x.toraGrade + x.mathGrade + x.englishGrade) / 3
//     }
// })