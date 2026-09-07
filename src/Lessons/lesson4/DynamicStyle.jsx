export const Dynamic = ({ num }) => {


    const style = num > 50 ? {
        color: 'hotpink',
        fontSize: `${num}px`,
        border: 'solid 2px purple'
    } : {
        color: 'orange',
        fontSize: '25px',
        border: 'double 4px salmon'
    }

    // const choosecolor = () => {
    //     if (num > 70)
    //         return 'red'
    //     if (num > 40)
    //         return 'yellow'
    //     return 'orange'
    // }

    return <>
        {/* <p style={{ fontSize: `${num}px`, color: num > 50 ? 'green' : 'blue' }}>{num}</p> */}
        {/* <p style={{ fontSize: `${num}px`, color: choosecolor() }}>{num}</p> */}
        {/* <p style={style}>{num}</p> */}
        {/* <p className={num > 50 ? 'big' : 'small'}>{num}</p> */}
        <p className={`basic ${num > 50 ? 'big' : 'small'}`}>{num}</p>
    </>
}