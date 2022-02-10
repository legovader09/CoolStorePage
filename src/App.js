import React, { useState, useEffect } from 'react';
import Product from './Product';

const App = (props) => {
  const [data, setData] = useState(null);
  console.log(data);

  useEffect(() => {
    fetch( props.endpoint )
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, [])

  return (
    <>
      <header>
        <h1 className="h2">Cool Store Page</h1>
        <p className="text-primary">Using the Fake Store API and Bootstrap</p>
      </header>
      <main className="container">
        <div className="row">
          {data && data.map(item => (
            <Product
              key={item.id.toString()}
              content={item}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;