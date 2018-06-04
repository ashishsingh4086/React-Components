
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainApp from "./reactPlay/app.js"
import DemoServices from "./demo.js"

export default class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component= {MainApp} />
            <Route path="/demo" component={DemoServices} />
          </Switch>
        </BrowserRouter>
    )
  }
}

