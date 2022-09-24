import React from 'react';
import ArticleBirthay from '../Components/ejercicio1/ArticleBirthay/ArticleBirthay.jsx'
import SectionBirthday from '../Components/ejercicio1/SectionBirthday/SectionBirthday.jsx';

import './Reto1.css'


function Reto1() {
    const a = <ArticleBirthay
      src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
      alt="Bertie Yates"
      name="Bertie Yates"
      years="29"
      key="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
    />
    const b = <ArticleBirthay
      src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"
      alt="Hester Hoga"
      name="Hester Hoga"
      years="59"
      key="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"
    />;
    const c = <ArticleBirthay
      src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
      alt="Larry Little"
      name="Larry Little"
      years="36"
      key="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
    />
    const d = <ArticleBirthay
      src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
      alt="Sean Walsh"
      name="Sean Walsh"
      years="22"
      key="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
    />
    const e = <ArticleBirthay
      src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
      alt="Lola Gardner"
      name="Lola Gardner"
      years="25"
      key="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
    />
    const articles_array = [a, b, c, d, e];

    return (
      <div className='app'>
        <SectionBirthday title={articles_array.length + " birthdays today"} childrens={articles_array} />
      </div>
    );
}
export default Reto1;