var hobbies=[
    {
    habilidad: 'Musica', 
    descripción: 'Lofi Hiphop para programar es lo mejor. También me gusta el heavy y el progressive.',
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
var onLoadHobbies = () =>{
    
    var hobbieSection = document.getElementById('hobbies');

    hobbies.forEach((hobbie,index) => {
        var myArray = Object.keys(hobbie);
        var ul=document.createElement('ul');
        
        ul.setAttribute('id','hobbie-ul_'+index);
    
        // console.log(ul);
        hobbieSection.appendChild(ul);
        var hobbieProp = document.getElementById('hobbie-ul_'+index);

        myArray.forEach((element)=>{
            var property = element;
            // console.log(property);
            var li=document.createElement('li');
           
            li.setAttribute('class','hobbie__li');
            li.innerHTML = hobbie.[element];
            hobbieProp.appendChild(li);

         });
    });

}


export { onLoadHobbies };