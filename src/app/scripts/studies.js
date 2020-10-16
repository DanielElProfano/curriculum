var studies = [{
    curso: 'Bachillerato técnológico',
    especialidad: 'Tecnología',
    year: '1997',
},
{
    curso: 'Modulo de grado superior de electrónica',
    especialidades: 'lenguaje C y ensamblador 8086',
    year:'1999'
},
{
    curso:'Bootcamp en Upgrade-Hub',
    especialidad: 'Desarrollo web Fullstack',
    year:'2020'
}];

var onLoadStudies = () =>{


var studiesSection = document.getElementById('studies');
console.log(studiesSection);
studies.forEach((study,index) => {
    var myArray = Object.keys(study);
    var ul=document.createElement('ul');
    
    ul.setAttribute('id','studies-ul_'+index);
    ul.setAttribute('class','b-main__description' );
   
    // console.log(ul);
    studiesSection.appendChild(ul);
    var studiesProp = document.getElementById('studies-ul_'+index);

    myArray.forEach((element)=>{
        var property = element;
        // console.log(property);
        var li=document.createElement('li');
        li.setAttribute('class','studies__li');
        li.innerHTML = study.[element];
        studiesProp.appendChild(li);
    });


})

}

var toggleStudies = () =>{

      
  var studies = document.getElementById("studies");
  if (studies.style.display === "none") {
    studies.style.display = "block";
    document.getElementById('experience').style.display="none";
  } else {
    studies.style.display = "none";
  }
}
export { onLoadStudies, toggleStudies};
