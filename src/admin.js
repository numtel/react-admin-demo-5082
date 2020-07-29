import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';

const data = [
  { id: 1, title: 'test1' },
  { id: 2, title: 'test2' },
  { id: 3, title: 'test3' },
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

export default function AdminScreen() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="testers" list={ListGuesser} edit={EditGuesser} />
    </Admin>
  );
}
