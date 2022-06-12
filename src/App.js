
import { useSelector } from 'react-redux';
import './App.css';
import LoginForm from './components/LoginForm'
import { ShowLoading } from './components/ShowLoading';
import { UserProfile } from './components/UserProfile';
import Card from './components/UI/Card';



function App() {

  const isLogeding = useSelector((state) => state.ui.isLogeding)
  const isLoading = useSelector((state) => state.ui.isLoading)


  return (
    <div className="App">
      <Card>
        {!isLogeding && <LoginForm />}
        {isLogeding && <UserProfile />}
        {isLoading && <ShowLoading />}
      </Card>

    </div>
  );
}

export default App;
