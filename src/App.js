import Profile from './Profile/Profile.js'
import './Profile/Profile.css'

function App() {
  const alertName = (myname) => {
    alert(`Hello I am ${myname}`);
  };
  let profile = {
    Name: 'OMAR SERGHINI',
    img:'https://iconape.com/wp-content/png_logo_vector/youre-welcome-logo.png',
    bio: `My name is OMAR SERGHINI and I am a full-stack Web
     Application Developer and Software Developer, currently living in Morocco. 
     I have a  diploma in international business from the specialized institute of applied technology.
     My primary focus and inspiration for my studies is Web Development .`,
    profession: 'Full-Stack web developer',
  }

  let desc='For all your business requirements send me an E-mail to : serghini.omar00@gmail.com'
  return (
    <>
      <Profile profile={profile} alertName={alertName} desc={desc} >
        <p className='copyright'> Copyright by OMAR SERGHINI © 2021</p>
      </Profile>
    </>
  );
}

export default App;