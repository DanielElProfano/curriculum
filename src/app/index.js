import { onLoadPersonalInfo } from './scripts/personalInfo';
import { onLoadExperience, toggleExperience,experienceFunction } from './scripts/experience';
import { onLoadStudies } from './scripts/studies.js';
import { onLoadSkills } from './scripts/skills.js';
import './styles/styles.scss';

var addListeners = () =>{
    document.getElementById("btn_hide_experience").addEventListener("click", toggleExperience);
    document.getElementById("experienceDescription0").addEventListener("click", experienceFunction);
}

window.onload = () => {
    onLoadPersonalInfo();
    onLoadExperience();
    onLoadStudies();
    addListeners();
    onLoadSkills();
    experienceFunction();
};