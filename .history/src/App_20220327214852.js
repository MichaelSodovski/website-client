import './App.css';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout.component/layout.component';

function App() {
    return (
        <div className="App">
            <header className="App-header">

            </header>

            <main className="App-main">
                <Switch>
                    <Route path="/Home">
                        
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
