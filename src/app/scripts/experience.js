var experience = [
  {
    nameJob: "Técnico Especialista HP",
    companyName: "Sermicro",
    date: '2000 - 2002'
  },
  {
    nameJob: "Tecnico de Soporte L2",
    
    companyName: "GloryGlobal Solutions",
    date: '2006- Now'
  },
  {
    nameJob: "Tecnico de Soporte L2",
    
    companyName: "GloryGlobal Solutions",
    date: '2006- Now'
  }
];




var numJobs = 0;
experience.forEach((Element) =>{
  numJobs++;
  
});
// console.log("el numero de elementos es" + numJobs);
var onLoadExperience = () => {
  // console.log('onLoadExperience');
  var experienceList = document.getElementById("experience_list");
  var experienceSection = document.getElementById("experience");
  experience.forEach((job, indexJob) => {
    //creamos el ul
    var myArray = Object.keys(experience[indexJob]); //super util Object.Keys
    // console.log(myArray);


       var ul = document.createElement('ul');
       ul.setAttribute('id','experience_ul_'+indexJob);
       ul.setAttribute('class','b-lista');
      
       experienceSection.appendChild(ul);
       var experienceList = document.getElementById("experience_ul_"+indexJob);
       myArray.forEach((element,indexArray) => {
      
          var propiedad = element;
          // console.log("La propiedad es: "+propiedad);
          var li = document.createElement('li');
          console.log("------------"+propiedad);
       
          if (propiedad === 'companyName'){
             li.setAttribute('class', 'b-lista__li--bold');
             li.setAttribute('value',indexJob);
             li.setAttribute('id','experienceDescription'+indexJob);
             li.setAttribute('onClick',"experienceFunction()");

          }
          else
          {
             li.setAttribute('class', 'b-lista__li');
          }
          li.innerHTML = job.[element];
          experienceList.appendChild(li);

       });   
});
}

var toggleExperience = () => {
  console.log('toggleExperience');
  var experience = document.getElementById("experience");
  if (experience.style.display === "none") {
    experience.style.display = "block";
  } else {
    experience.style.display = "none";
  }
}
var experienceFunction = () =>{

    var experienceDescription =['glory globalkjaasdfkjañljñlñlkhgf','asdflkhaskfhoijlqw','La treasdñljhañsdhñl'];
    // console.log(valor);
   //  alert(valor);
    var li = document.createElement('p');
    li.setAttribute('style','position:absolute;left:400px;border:1px solid red;');
    var appendDescription = document.getElementById('experienceDescription1');
    li.innerHTML = experienceDescription[0];
    appendDescription.appendChild(li);

}

export { onLoadExperience, toggleExperience, experienceFunction,};
