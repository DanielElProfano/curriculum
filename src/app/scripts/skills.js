var skills=[
    {
    habilidad: 'Concentración', 
    descripción: 'Me pongo mis cascos y nada puede conmigo',
    },
    {
    habilidad: 'Trabajo en equipo', 
    descripción: 'Estoy muy acostumbrado a realizar trabajo en equipo tanto online como presencial',
    },
    {
    habilidad: 'Adaptación',
    descripcion: 'siempre me he adapatado o todo fácilmente, sólo hay que tener la mente abierta'
    }
];
var onLoadSkills = () =>{
    
    var skillSection = document.getElementById('skills');

    skills.forEach((skill,index) => {
        var myArray = Object.keys(skill);
        var ul=document.createElement('ul');
        
        ul.setAttribute('id','skill-ul_'+index);
    
        // console.log(ul);
        skillSection.appendChild(ul);
        var skillProp = document.getElementById('skill-ul_'+index);

        myArray.forEach((element)=>{
            var property = element;
            // console.log(property);
            var li=document.createElement('li');
            li.setAttribute('class','skill__li');
            li.innerHTML = skill.[element];
            skillProp.appendChild(li);





        });





        

    });

}


export { onLoadSkills };