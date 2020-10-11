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
export { onLoadStudies };
