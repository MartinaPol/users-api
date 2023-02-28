import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Users Database.</p>
      </header>
      <h1 className="App-h1">For managing the database, please log in:</h1>
      <LogIn />
      <p>Don't have an account? SIGN UP here:</p>
      <SignUp />
      <Footer/>
    </div>
  );
}

function LogIn() {
  return (
    <form className="App-form">
      <h1 className="App-h1">Log-In</h1>
      <label>
        <p>Name: <input type="text" name="login-name" className="App-input"/></p>
        <p>Password: <input type="text" name="login-name" className="App-input" /></p>
      </label>
      <button className="App-button">Submit</button>
    </form>
  )
}

function SignUp() {
  return (
    <form className="App-form">
      <h1 className="App-h1">Sign Up</h1>
      <label>
        <p>Name: <input type="text" name="name" className="App-input"/></p> 
        <p>Age: <input type ="number" name="age" className="App-input"/></p>
        <p>Salary: <input type="number" name="salary" className="App-input" /></p> 
        <p>Password:<input type="password" name="pw" className="App-input" /></p>
        <p><em>Password has to be at least 8 characters long, <br/>
        contain at least 1 Upper case letter, <br/>
        and at least 1 number</em></p> 
        <button className="App-button">Submit</button>
      </label>
    </form>
  )
}

function Footer() {
  return (
    <div className="App-footer">
      Site created by Martina Polakova
    </div>
  )
}

export default App;
