import { useState } from "react";

// increase - להגדיל
export const Inc = () => {

    // קוד לוגי
    // let num = 0

    // הגדרת מערך
    // איבר הראשון - המשתנה
    // האיבר השני - פונקציה שאחראית של שינוי ערך המשתנה ורנדור מחדש של הקומפוננטות שהושפעו מהשינוי
    // בתוך הסוגריים נציב ערך התחלתי - לא חובה
    // undefined אם לא נשלח ערך התחלתי - מוגדר 
    const [num, setNum] = useState(0)
    const [plus, setPlus] = useState(1);

    function increase() {
        // num++;
        setNum(num + plus)
        console.log(num);
    }

    // const changePlus = (e) => {
    //     setPlus(+e.target.value)
    // }

    // תצוגה
    return <>
        <h1>{num}</h1>
        {/* camelCase - מילה שניה באות גדולה */}
        {/* onclick => onClick */}
        {/* font-size => fontSize */}
        {/* class => className */}
        {/* for => `htmlFor`re ` */}

        {/* זימון פונקציה - ללא סוגריים עגולות */}
        {/* הקומפוננטה עוברת רנדור */}
        {/* כל פונקציה שמזומנת עם סוגריים עגולות - תזומן בכל רנדור של הקומפוננטה */}
        <button onClick={increase}>increase</button>

        {/* איך אפשר לשלוח פרמטרים לפונקציה - הרי לא מזמנים פונקציה עם סוגריים? */}
        {/* איך אפשר לשלוף את הערך של תיבת הטקסט? */}

        {/* פתרונות לשאלה ראשונה */}
        {/* 1. נעטוף את זימון הפונקציה בפונקציית חץ */}
        {/* <input placeholder='input number' onBlur={(e) => changePlus(5)}></input> */}
        {/* 2. אם נזמן את הפונקציה ללא סוגריים */}
        {/* ובהגדרת הפונקציה היא פרמטר */}
        {/* הפרמטר שישלח יהיה האירוע */}
        {/* <input placeholder='input number' onBlur={changePlus}></input> */}


        {/* פתרון לשאלה שניה */}
        {/* אם הפונקציה החיצונית מקבלת פרמטר - הפרמטר יכיל את הנתונים של האירוע */}

        {/* כל ערך שנשלף מתיבת טקסט מחרוזתי */}
        {/* <input placeholder='input number' onBlur={(e) => changePlus(+e.target.value)}></input> */}
        <input placeholder='input number' onBlur={(e) => setPlus(+e.target.value)}></input>

        {/* <input id="bla" type="text"></input>
        <label htmlFor="bla">bla bla bla</label> */}
    </>
}

// // useState
// function useState(value) {
//     let variable = value

//     const func = (newValue) => {
//         variable = newValue
//         // השוואה של הדום לוירטואל דום
//         // בדיקה היכן היה שינוי
//         // ורנדור מחדש רק של הקומפוננטות שושפעו מהשינוי
//     }

//     return [variable, func]
// }

// const arr = useState('hello')

// console.log(arr[0]);

// arr[1]('Bye')

// const [word, setWord] = useState('hello')

// console.log(word);

// setWord('Bye')

// console.log(word);
