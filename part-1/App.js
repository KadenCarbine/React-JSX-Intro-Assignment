const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Kaden" />
    </div>
)
ReactDOM.render(<App/>, document.querySelector("#root"))