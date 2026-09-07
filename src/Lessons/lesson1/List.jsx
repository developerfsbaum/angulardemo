export const List = () => {

    const arr = [
        { name: 'banana', color: 'yellow' },
        { name: 'apple', color: 'pink' },
        { name: 'pear', color: 'green' },
        { name: 'peach', color: 'peach' },
        { name: 'mango', color: 'orange' },
        { name: 'raspberries', color: 'red' },
        { name: 'blueberries', color: 'blue' },
        { name: 'strawberry', color: 'red' },
        { name: 'cherry', color: 'red' },
        { name: 'watermelon', color: 'red' },
        { name: 'melon', color: 'orange' },
        { name: 'orange', color: 'orange' },
        { name: 'grapes', color: 'green' },
        { name: 'plum', color: 'purple' },
        { name: 'lemon', color: 'yellow' },
        { name: 'lichi', color: 'pink' }
    ]

    return <>
        <ul>
            {/* {arr.map(x => <li>{x.name} is {x.color}</li>)} */}
            {arr.map((fruit, index) => <li key={index}>{fruit.name} is {fruit.color}</li>)}
        </ul>
    </>
}