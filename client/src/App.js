import { QueryClient, QueryClientProvider} from "react-query";
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Button } from 'antd'
import TableExample from './pages/TableExample'
import PhoneNumberExample from './pages/PhoneNumberExample'
import './styles/App.css';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WrappedComponent />
    </QueryClientProvider>
  );
}

function WrappedComponent() {

  return (
    <Router>
      <div className="App">
        
        <Button type='link' href="/">Home</Button>
        <Button type='link' href="/tableEx">Table Example</Button>
        <Button type='link' href="/phoneEx">Phone Number Input</Button>
    
        <Switch>
          <Route path="/tableEx">
            <TableExample />
          </Route>
          <Route path="/phoneEx">
            <PhoneNumberExample />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

    </div>
    </Router>
  );
}

function Home() {
  return <h2>Home Route: Hello World</h2>;
}
