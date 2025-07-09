import React, { useState, useEffect } from 'react';
import Home from './Components/Sidemenu/Home.jsx';
import SidemenuList from './Components/Sidemenu/SidemenuList.jsx';
import EducationGeca from './Components/Contents/Education/EducationGeca.jsx';
import EducationGes from './Components/Contents/Education/EducationGes.jsx';
import ExpFreelance from './Components/Contents/Exp/ExpFreelance.jsx';
import ExpFenxify from './Components/Contents/Exp/ExpFenxify.jsx';
import SkillCC from './Components/Contents/Skills/SkillCC.jsx';
import SkillHTML5 from './Components/Contents/Skills/SkillHTML5.jsx';
import SkillCSS from './Components/Contents/Skills/SkillCSS.jsx';
import SkillJavascript from './Components/Contents/Skills/SkillJavascript.jsx';
import SkillPython from './Components/Contents/Skills/SkillPython.jsx';
import SkillOOP from './Components/Contents/Skills/SkillOOP.jsx';
import SkillBootstrap from './Components/Contents/Skills/SkillBootstrap.jsx';
import SkillReactJS from './Components/Contents/Skills/SkillReactJS.jsx';
import SkillNodeJS from './Components/Contents/Skills/SkillNodeJS.jsx';
import SkillMongoDB from './Components/Contents/Skills/SkillMongoDB.jsx';
import SkillRESTAPIs from './Components/Contents/Skills/SkillRESTAPIs.jsx';
import SkillExpressJS from './Components/Contents/Skills/SkillExpressJS.jsx';
import SkillAPIs from './Components/Contents/Skills/SkillAPIs.jsx';
import SkillTailwind from './Components/Contents/Skills/SkillTailwind.jsx';
import SkillGit from './Components/Contents/Skills/SkillGit.jsx';
import SkillMySQL from './Components/Contents/Skills/SkillMySQL.jsx';
import SkillPostman from './Components/Contents/Skills/SkillPostman.jsx';
import SkillDevTools from './Components/Contents/Skills/SkillDevTools.jsx';
import ProjectPricePredictor from './Components/Contents/Projs/ProjectPricePredictor.jsx';
import ProjectBetterLC from './Components/Contents/Projs/ProjectBetterLC.jsx';
import ProjectTradingViewAPI from './Components/Contents/Projs/ProjectTradingViewAPI.jsx';
import ProjectNewzy from './Components/Contents/Projs/ProjectNewzy.jsx';
import ProjectPortfolio from './Components/Contents/Projs/ProjectPortfolio.jsx';

const experiences = [
  {
    label: 'Freelance Developer - Freelance | Self Employed',
    content: <ExpFreelance />
  },
  {
    label: 'SDE Intern - Fenxify',
    content: <ExpFenxify />
  }
];

const education = [
  {
    label: 'B.Tech. Computer Science - GECA',
    content: <EducationGeca />
  },
  {
    label: 'HSC - Gurukul English School',
    content: <EducationGes />
  },
];

const skills = [
  { label: 'C/C++', content: <SkillCC /> },
  { label: 'HTML5', content: <SkillHTML5 /> },
  { label: 'CSS', content: <SkillCSS /> },
  { label: 'Javascript', content: <SkillJavascript /> },
  { label: 'Python', content: <SkillPython /> },
  { label: 'OOP', content: <SkillOOP /> },
  { label: 'Bootstrap', content: <SkillBootstrap /> },
  { label: 'ReactJS', content: <SkillReactJS /> },
  { label: 'NodeJS', content: <SkillNodeJS /> },
  { label: 'MongoDB', content: <SkillMongoDB /> },
  { label: 'REST APIs', content: <SkillRESTAPIs /> },
  { label: 'ExpressJS', content: <SkillExpressJS /> },
  { label: 'APIs', content: <SkillAPIs /> },
  { label: 'Tailwind', content: <SkillTailwind /> },
  { label: 'Git', content: <SkillGit /> },
  { label: 'MySQL', content: <SkillMySQL /> },
  { label: 'Postman', content: <SkillPostman /> },
  { label: 'DevTools', content: <SkillDevTools /> },
];

const projects = [
  { label: 'Price Predictor', content: <ProjectPricePredictor /> },
  { label: 'BetterLC', content: <ProjectBetterLC /> },
  { label: 'TradingView-API', content: <ProjectTradingViewAPI /> },
  { label: 'Newzy', content: <ProjectNewzy /> },
  { label: 'Portfolio', content: <ProjectPortfolio /> },
];

// Flatten all items with their keys for easy lookup
const allItems = [
  ...education.map((item, idx) => ({ ...item, key: idx + 100 })),
  ...experiences.map((item, idx) => ({ ...item, key: idx })),
  ...projects.map((item, idx) => ({ ...item, key: idx + 300 })),
  ...skills.map((item, idx) => ({ ...item, key: idx + 200 })),
];

const Layout = () => {
  const [activeKey, setActiveKey] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [maxSkillsScroll, setMaxSkillsScroll] = useState(8);
  const activeItem = allItems.find(item => item.key === activeKey);

  // Helper to close menu on mobile when an item is selected
  const handleSelectItem = (key) => {
    setActiveKey(key);
    if (menuOpen) setMenuOpen(false);
  };

  // Dynamically adjust maxItemsBeforeScroll for skills/tools on mobile
  useEffect(() => {
    function updateMaxSkills() {
      if (window.innerWidth <= 900) {
        // Estimate: each item ~56px tall, header ~60px, some margin
        const vh = window.innerHeight;
        const available = vh - 180; // header + other lists
        const max = Math.max(3, Math.floor(available / 56));
        setMaxSkillsScroll(max);
      } else {
        setMaxSkillsScroll(8);
      }
    }
    updateMaxSkills();
    window.addEventListener('resize', updateMaxSkills);
    return () => window.removeEventListener('resize', updateMaxSkills);
  }, []);

  return (
    <>
      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        aria-label="Open menu"
        onClick={() => setMenuOpen(m => !m)}
      >
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
      </button>
      <div className={`sidemenuContainer${menuOpen ? ' open' : ''}`}>
        <Home />
        <SidemenuList
          data={education}
          legend="Education"
          activeKey={activeKey}
          setActiveKey={handleSelectItem}
          getItemKey={(_, idx) => idx + 100}
        />
        <SidemenuList
          data={experiences}
          legend="Experience"
          activeKey={activeKey}
          setActiveKey={handleSelectItem}
          getItemKey={(_, idx) => idx}
        />
        <SidemenuList
          data={projects}
          legend="Projects"
          activeKey={activeKey}
          setActiveKey={handleSelectItem}
          getItemKey={(_, idx) => idx + 300}
          maxItemsBeforeScroll={7}
        />
        <SidemenuList
          data={skills}
          legend="Skills & Tools"
          activeKey={activeKey}
          setActiveKey={handleSelectItem}
          getItemKey={(_, idx) => idx + 200}
          className="scrollableSkillsList"
          flexSkills={true}
        />
      </div>
      <div className="contentContainer">
        <fieldset className="contentBox">
          <legend>Content</legend>
          {activeItem ? activeItem.content : <div>Select an item</div>}
        </fieldset>
      </div>
    </>
  );
};

export default Layout;