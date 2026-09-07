export const SelectCity = ({ cities, setCity }) => {
    return <>
        <label>בחר עיר:</label>
        <select onChange={e => setCity(e.target.value)}>
            <option disabled selected>בחר עיר</option>
            {cities && cities.map((c, i) => <option key={i}>{c}</option>)}
        </select>
    </>
}