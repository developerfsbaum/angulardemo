
// קומפוננטה היא פונקציה
// ופונקציה יכולה להחזיר רק אלמנט אחד
// איך נחזיר יותר מאלמנט אחד
// פתרונות
// 1. מערך
// 2. עוטף div
// 3. react.Fragment - <></>

// import react from "react"

// import { Fragment } from "react"


export const Person = () => {
    // // שגיאה
    // return (
    //     <h3>name: Sara</h3>
    //     <h4>age: 19</h4>
    // )

    // מערך - לא הטמלי... - לא נראה יפה
    // return [
    //     <h3>name: Sara</h3>,
    //     <h4>age: 19</h4>
    // ]

    // עוטף div
    // return <div>
    //     <h3>name: Sara</h3>
    //     <h4>age: 19</h4>
    // </div>

    // react.Fragment - תגית ריקה של ריאקט
    // return <react.Fragment>
    //     <h3>name: Sara</h3>
    //     <h4>age: 19</h4>
    // </react.Fragment>

    // return <Fragment>
    //     <h3>name: Sara</h3>
    //     <h4>age: 19</h4>
    // </Fragment>

    return (
        <>
            <h3>name: Sara</h3>
            <h4>age: 19</h4>
        </>
    )
}