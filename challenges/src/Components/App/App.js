import "./App.css";
import ArticleBirthay from "../ArticleBirthay/ArticleBirthay";

function App() {
  return (
    <section>
      <ArticleBirthay
        src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
        alt="Bertie Yates"
        name="Bertie Yates"
        years="29"
      />
      <ArticleBirthay
        src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"
        alt="Hester Hoga"
        name="Hester Hoga"
        years="59"
      />
      <ArticleBirthay
        src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
        alt="Larry Little"
        name="Larry Little"
        years="36"
      />
      <ArticleBirthay
        src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
        alt="Sean Walsh"
        name="Sean Walsh"
        years="22"
      />
      <ArticleBirthay
        src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
        alt="Lola Gardner"
        name="Lola Gardner"
        years="25"
      />
    </section>
  );
}

export default App;
