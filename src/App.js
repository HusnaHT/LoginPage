import logo from './logo.svg';
import './App.css';

function App() {
  function handleclick(){
    alert(1)
  }
    return (
      <div className="text-center m-5-auto">
         
          <form action="/home">
          <h2>ACCOUNT</h2>
              <p>
                  <label>Email</label><br/>
                  <input type="text" name="email" required />
              </p>
              <p>
                  <label>Password</label>
                  <br/>
                  <input type="password" name="password" required />
              </p>
              <p>
                  <button id="sub_btn" type="submit">Login</button>
              </p>
              <href to="/forget-password"><label className="right-label">Forget password?</label></href>
          </form>
       
      </div>
  )
    

};

export default App;
