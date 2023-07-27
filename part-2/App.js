const App = () => (
    <div>
    <Tweet name="Jim" username="JIMMMMM" date ={new Date().toDateString()} message="I like Wisconsin Cheese" />
    <Tweet name="Timothy" username="YaBoyTim" date ={new Date().toDateString()} message="#Hashtag" />
    <Tweet name="Barbra" username="BarbieGirl2000" date ={new Date().toDateString()} message="I just saw the new Barbie movie!!!!" />
    </div>
)

ReactDOM.render(<App/>, document.querySelector("#root"))