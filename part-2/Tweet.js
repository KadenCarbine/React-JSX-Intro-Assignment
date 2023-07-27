const Tweet = (props) => (
    <div className="tweet">
        <div className="name">{props.name}</div>
        <div className="username">{props.username}</div>
        <div className="date">{props.date}</div>
        <p>{props.message}</p>
    </div>
)