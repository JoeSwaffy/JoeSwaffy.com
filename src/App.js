import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
function App() {
  return (
    <MantineProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
