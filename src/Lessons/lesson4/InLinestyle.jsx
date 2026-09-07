import './style.css'

export const InLine = () => {

    const divStyle = {
        color: 'red',
        fontSize: '50px',
        border: '5px black solid',
        backgroundColor: 'wheat',
        width: '40vw',
        height: 'auto',
        padding: '2rem'
    }

    return <>
        {/* attribute - תכונה של תגית */}
        {/* הערכים האפשריים - מחרוזת או כל סוג אחר עטוף בצומדיים */}
        {/* הוא אובייקט ולכן נעטוף בזוג צומדיים נוסף style */}
        <div style={
            {
                color: 'red',
                fontSize: '50px',
                border: '5px black solid',
                backgroundColor: 'wheat',
                width: '40vw',
                height: 'auto',
                padding: '2rem'
            }
        }
        >
            <p> ותשובה ותפילה וצדקה</p>
            <br></br><br></br>
            📖⚖️💰
            <br></br><br></br><br></br>
            <p>מעבירין את רוע הגזרה</p>
        </div >

        <div style={divStyle}>
            <p> ותשובה ותפילה וצדקה</p>
            <br></br><br></br>
            📖⚖️💰
            <br></br><br></br><br></br>
            <p>מעבירין את רוע הגזרה</p>
        </div >

        {/* class - HTML => classname - react */}
        <div className="div">
            <p> ותשובה ותפילה וצדקה</p>
            <br></br><br></br>
            📖⚖️💰
            <br></br><br></br><br></br>
            <p>מעבירין את רוע הגזרה</p>
        </div >
    </>
}