import './App.css';
import Layout from './components/layout.component/layout.component';

function App() {
    return (
        <div className="App">
            <header className="App-header">

            </header>

            <main className="App-main">
                <Switch>
                    <Route path="/Home">
                        <Home title={info[0].title}>

                        </Home>
                    </Route>
                </Switch>
            </main>

            <aside className="App-left-side_menu">

            </aside>

            <aside className="App-right-side_menu">

            </aside>
        </div>
    );
}

export default App;
