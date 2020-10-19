import React from 'react';
import Layout from './containers/Layout/Layout'
import BurgerBuild from './containers/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuild />
      </Layout>
    </div>
  );
}

export default App;
