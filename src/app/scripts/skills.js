var skills=[
    {
    habilidad: 'FRONT END', 
    descripción: 'HTML, SCSS, JS, Angular, React, Node.',
    },
    {
    habilidad: 'BACK END', 
    descripción: 'PHP, MySQL.',
    },
    // {
    // habilidad: 'Adaptación',
    // descripcion: 'siempre me he adapatado o todo fácilmente, sólo hay que tener la mente abierta'
    // }
];
var onLoadSkills = () =>{
    
    var skillSection = document.getElementById('skills-programacion');

    skills.forEach((skill,index) => {
        var myArray = Object.keys(skill);
        var ul=document.createElement('ul');
        
        ul.setAttribute('id','skill-ul_'+index);
        ul.setAttribute('class','personal-info__lista');
        // console.log(ul);
        skillSection.appendChild(ul);
        var skillProp = document.getElementById('skill-ul_'+index);

        myArray.forEach((element)=>{
            var property = element;
            // console.log(property);
            if(property === 'habilidad'){
                var li=document.createElement('li');
                li.setAttribute('class','personal-info__lista personal-info__lista--title');
                li.innerHTML = skill.[element];
                skillProp.appendChild(li);


            }
            else{
            var li=document.createElement('li');
            li.setAttribute('class','personal-info__lista--skill');
            li.innerHTML = skill.[element];
            skillProp.appendChild(li);
            }




        });





        

    });

}


export { onLoadSkills };