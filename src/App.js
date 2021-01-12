import { Provider } from 'react-redux';
import Store from './Store';
import CourseList from './components/CourseList';

const App = () => {

  return (
    <>
      <Provider store={Store}>
        <CourseList />
      </Provider>
    </>
  );
}


export default App;
