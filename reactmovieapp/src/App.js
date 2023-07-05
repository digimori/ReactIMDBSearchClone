import './App.css';

const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last name: {props.lastName}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {

  return (
    <div className="App">
      {/* The curly braces are not necessity for this part unless putting logic in such as 2 + 2 */}
      <Person name={'John'} lastName={'Doe'} age={'42'}/> 
      <Person name={'Mark'} lastName={'March'} age={'53'}/> 
    </div>
  );
}

export default App;
