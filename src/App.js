import CustomHookExample1 from './components/CustomHookExample1';
import UseCallbackExample from './components/UseCallbackExample';
import UseMemoExample from './components/UseMemoExample';
import UseRefExample1 from './components/UseRefExample1';
import UseRefExample2 from './components/UseRefExample2';
import UseRefExample3 from './components/UseRefExample3';

function App() {
  return (
    <div className='container mt-5'>
      <UseRefExample1 />
      <UseRefExample2 />
      <UseRefExample3 />
      {/* <UseMemoExample /> */}
      <UseCallbackExample />
      <CustomHookExample1 />
    </div>
  );
}

export default App;
