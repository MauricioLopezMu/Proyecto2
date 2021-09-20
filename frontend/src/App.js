import { BrowserRouter as Router, Route } from 'react-router-dom'
import Vista from './Components/Vista'


function App() {
  return (
    <Router>
    <div className="container p-4">
      <Route path="/" exact component={Vista} />
    </div>
  </Router>
  );
}

export default App;
