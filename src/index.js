import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <>
      <div className='card'>
        <Avatar />
        <dvi className ='data'>
          <Intro/>
          <SkillList/>
        </dvi>
      </div>
    </>
  );
  }

  function SkillList () {
    return (
      <div className="skill-list">
        <Skill skill = "การพูด" emoji = "💪" color = "green" />
        <Skill skill = "การเล่นเกม" emoji = "🦾" color = "yellow" />
        <Skill skill = "กีฬา" emoji = "🦾" color = "white" /> 
        <Skill skill = "ร้องเพลง" emoji = "🤏" color = "blue" />
      </div>
    );
  }

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>65114340116 นายจิรายุ แจ่มใส</h1>
      <p>
        นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์ 
        มหาวิทยาลัยอุบลราชธานี
      </p>
    </div>
  );
}

function Avatar() {
  return <img className='avatar' src="photo.jpg" alt='My Avatar' />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


