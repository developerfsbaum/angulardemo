import { Comp, Comp2 } from "./Comp"
import { List } from "./List"
import { Person } from "./Person"
import { Student } from "./Student"

export const Main = () => {
    return <>
        {/* <Comp></Comp> */}
        {/* <Comp2></Comp2> */}
        {/* <Person></Person> */}
        {/* שליחת פרמטרים לקומפוננטה */}
        {/* קומפונטטה היא תגית */}
        {/* attributes - מאפיין של תגית */}
        {/* של קומפוננטה - רק מחרוזתיים attributes */}
        {/* כל ערך אחר נעטוף במסולסליים */}
        {/* <Student name='Sara' age={12} grade={90}></Student> */}
        {/* <Student name='Rivka' age={3}></Student> */}
        {/* <Student name='Yehudit' age={20} grade={100}></Student> */}
        {/* <Student name='Yael' age={5} grade={95}></Student> */}
        {/* <Student name='Rachel' age={16} grade={98}></Student> */}
        <List></List>
    </>
}