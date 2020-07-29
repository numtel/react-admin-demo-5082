import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AdminScreen from './admin';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import * as serviceWorker from './serviceWorker';

const data = [
  { id: 1, title: 'cart1' },
  { id: 2, title: 'cart2' },
  { id: 3, title: 'cart3' },
];

async function dataProvider(action, resource, params) {
  switch(action) {
    case 'GET_LIST':
      return { total: data.length, data };
    case 'GET_ONE':
      return { data: data.find(x => x.id === parseInt(params.id, 10)) };
    default:
      console.log(action, resource, params);
  }
}


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <h1>Welcome Home!</h1>
          <Link to="/admin">Non-working Update/Delete Admin area</Link><br />
          <Link to="/other-admin">(Working-ish) Admin area</Link>
        </Route>
        <Route path="/other-admin">
          <Admin dataProvider={dataProvider}>
            <Resource name="carts" list={ListGuesser} edit={EditGuesser} />
          </Admin>
        </Route>
        <Route path="/admin" component={AdminScreen} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
