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
       ul.setAttribute('class','b-main__description');
      
       experienceSection.appendChild(ul);
       var experienceList = document.getElementById("experience_ul_"+indexJob);
       myArray.forEach((element,indexArray) => {
      
          var propiedad = element;
          // console.log("La propiedad es: "+propiedad);
          var li = document.createElement('li');
          console.log("------------"+propiedad);
          var span = document.createElement('span');
          span.setAttribute('class','b-main__span icon-circle-down');
          span.setAttribute('id','experienceSpan'+indexJob);
          // span.innerHTML="hola";
          if (propiedad === 'companyName'){
          
             li.setAttribute('class', 'b-main__description b-main__description--bold ');
             li.setAttribute('value',indexJob);
             li.setAttribute('id','experienceDescription'+indexJob);
             li.setAttribute('onClick',"experienceFunction()");
             li.innerHTML = job.[element];
             experienceList.appendChild(li);
             li.appendChild(span);
              // experienceList.appendChild(span);
          }
          else
          {
            
             li.setAttribute('class', 'b-lista__li');
             
           li.innerHTML = job.[element];
           experienceList.appendChild(li);
          }
         
          
          // li.innerHTML = job.[element];
          // experienceList.appendChild(li);
         

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
var experienceFunction = (e) =>{

  var experienceDescription = ['Experience1','Experience2','Experience3'];
  var valorOrigen = e.srcElement.value;
    
          if(document.getElementById('experienceHide_'+valorOrigen) === null)
        {
            var origen = document.getElementById('experienceDescription'+valorOrigen);
            var pItem = document.createElement('p');
            var spanItem = document.getElementById('experienceSpan'+valorOrigen);
            spanItem.setAttribute('class','b-main__span icon-circle-up');
            pItem.setAttribute('class','b-main__oculto');
            pItem.setAttribute('id','experienceHide_'+valorOrigen);
           
            origen.appendChild(pItem);
            var mostrar = document.getElementById('experienceHide_'+valorOrigen);
            mostrar.style.height="100px";
            // var mostrarStyle = window.getComputedStyle(mostrar);
            // var mostrarAltura = mostrarStyle.getPropertyValue('height');
            pItem.innerHTML = experienceDescription[valorOrigen];
          }
          else{
            var spanItem = document.getElementById('experienceSpan'+valorOrigen);
            spanItem.setAttribute('class','b-main__span icon-circle-down');
            var origen = document.getElementById('experienceHide_'+valorOrigen);
            // var mostrar = document.getElementById('experienceHide_'+valorOrigen);
            // // mostrar.style.height = "0px";
            origen.remove();

          }
        
              
            
        

       
      
        
    }
   



export { onLoadExperience, toggleExperience, experienceFunction,};
