import React, { useState } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { AddressCreate } from './AddressCreate/AddressCreate';
import { AddressList } from './AddressList/AddressList';

const initialAddress = [{
    "id": 1,
    "street": "605 E Broadway Ave",
    "city": "Fairfield",
    "zip": "52556"
  }, {
    "id": 2,
    "street": "102 Forest Dr",
    "city": "Fairfield",
    "zip": "52556"
  }, {
    "id": 3,
    "street": "2000 LibertyVille Road",
    "city": "Fairfield",
    "zip": "52556"
  }];

export const Address = (props) => {
  const [data, setData] = useState(initialAddress);

  return (
    <>
      <Header />
      <div className='b-divider'></div>
      <h2>Address</h2>
      <AddressCreate />
      <AddressList data={data} />
      <Footer />
    </>
  )
}

