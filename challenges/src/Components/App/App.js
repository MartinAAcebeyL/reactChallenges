import "./App.css";
// import SectionBirthday from "../ejercicio1/SectionBirthday/SectionBirthday";
// import ArticleBirthay from "../ejercicio1/ArticleBirthay/ArticleBirthay";
import logo from '../../static/logo.svg'

function App() {
  // const a = <ArticleBirthay
  //   src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
  //   alt="Bertie Yates"
  //   name="Bertie Yates"
  //   years="29"
  //   key="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
  // />
  // const b = <ArticleBirthay
  //   src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"
  //   alt="Hester Hoga"
  //   name="Hester Hoga"
  //   years="59"
  //   key="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"
  // />;
  // const c = <ArticleBirthay
  //   src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
  //   alt="Larry Little"
  //   name="Larry Little"
  //   years="36"
  //   key="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
  // />
  // const d = <ArticleBirthay
  //   src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
  //   alt="Sean Walsh"
  //   name="Sean Walsh"
  //   years="22"
  //   key="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
  // />
  // const e = <ArticleBirthay
  //   src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
  //   alt="Lola Gardner"
  //   name="Lola Gardner"
  //   years="25"
  //   key="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
  // />
  // const articles_array = [a, b, c, d, e];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
      
  );
}
/*{<SectionBirthday title={ articles_array.length + " birthdays today"} childrens={articles_array}/> }*/
export default App;
