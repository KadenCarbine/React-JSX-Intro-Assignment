const Person = ({name, age, hobbies}) => {
    const voteAge = age >= 18 ? "Please go vote!" : "You must be 18!"
    const maxName = name.length >= 8 ? name.slice(0, 6) : name
    const hobbyList = hobbies.map(item => <li>{item}</li>)
    return <div>
        <p>Learn some information about this person!</p>
        <h3>Age: {age}</h3>
        <h3>Name: {maxName}</h3>
        <ul><h3>Hobbies:</h3> {hobbyList}</ul>
        <h3>Vote: {voteAge}</h3>
    </div>
}