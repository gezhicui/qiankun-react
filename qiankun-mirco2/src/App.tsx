import React, { Suspense, useEffect } from 'react';
//@ts-ignore
const Button = React.lazy(() => import('mirco1/button'));
const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      react子应用mirco2
      <Suspense fallback={'loading...'}>
        <Button></Button>
      </Suspense>
    </div>
  );
};

export default App;
