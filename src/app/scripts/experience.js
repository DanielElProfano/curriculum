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
       
          if (propiedad === 'companyName'){
             li.setAttribute('class', 'b-main__description b-main__description--bold');
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
var experienceFunction = (e) =>{
  var experienceDescription =['glory globalkjgwegseaasdfkjañljñlñlkhgf','asdflkhaskfhoijlqw','La treasdñljhañsdhñl'];
  
      //   console.log(myArray);
      //   if(myArray == undefined){
  
      //     var myArray=[];}

      
        var valorOrigen = e.srcElement.value;
      //   if (myArray[valorOrigen] === undefined){
      //         myArray[valorOrigen] = 0;
      //   }
   
      // console.log(myArray);
        // for (var i = 0 ; i <= valorOrigen; i++){
         
          if(document.getElementById('experienceHide_'+valorOrigen) === null)
        {
            var origen = document.getElementById('experienceDescription'+valorOrigen);
            var pItem = document.createElement('p');
            pItem.setAttribute('class','b-main__oculto');
            pItem.setAttribute('id','experienceHide_'+valorOrigen);
            pItem.innerHTML = experienceDescription[valorOrigen];
            origen.appendChild(pItem);
          }
          else{
            var origen = document.getElementById('experienceHide_'+valorOrigen);
            origen.remove();

          }
        
              
            
        

       
      
        
    }
   



export { onLoadExperience, toggleExperience, experienceFunction,};
