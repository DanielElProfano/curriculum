import { onLoadPersonalInfo } from './scripts/personalInfo';
import { onLoadExperience, toggleExperience,experienceFunction } from './scripts/experience';
import { onLoadStudies } from './scripts/studies.js';
import { onLoadSkills } from './scripts/skills.js';
import { onLoadHobbies } from './scripts/hobbies.js';
import './styles/styles.scss';


var addListeners = () =>{
    document.getElementById("btn_hide_experience").addEventListener("click", toggleExperience);
    var exp0 = document.getElementById('experienceDescription0');
  
    exp0.addEventListener("click", experienceFunction);
    var exp1 = document.getElementById('experienceDescription1');
    exp1.addEventListener("click", experienceFunction);
    var exp2 = document.getElementById('experienceDescription2');
    exp2.addEventListener("click", experienceFunction);
}

window.onload = () => {
    onLoadPersonalInfo();
    onLoadExperience();
    onLoadStudies();
    addListeners();
    onLoadSkills();
    experienceFunction();
    onLoadHobbies();
};