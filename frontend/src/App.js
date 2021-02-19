import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {LoginPage} from "./pages/Login"
import {SingInPage} from "./pages/SingIn"

import {Theme} from "./Theme/Theme.provider";
import State from "./providers/State";
import Authentication from "./providers/Authentication";
import {Layout} from "./Layout";
import {Private} from "./components/Private";
import {Inicio} from "./pages/Inicio";
import {Carrito} from "./pages/Carrito";
import {Pedidos} from "./pages/Pedidos";





function App() {
  return (
    <BrowserRouter>
      <State>
        <Authentication>
          <Theme>
            <Layout>
              <Switch>
                <Route exact path="/login">
                  <LoginPage/>
                </Route>
                <Route exact path="/registrar">
                  <SingInPage/>
                </Route>
                <Private exact path="/">
                  <Inicio/> 
                </Private>
                <Private exact path="/carrito">
                  <Carrito/> 
                </Private>
                <Private exact path="/pedidos">
                  <Pedidos/>
                </Private>


              </Switch>
            </Layout>
          </Theme>
        </Authentication>
      </State>
    </BrowserRouter>
  );
}

export default App;
