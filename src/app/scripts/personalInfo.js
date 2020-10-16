var personalInfo = {
  name: "Daniel González",
  mail: "Danielo@mail.com",
  phone: "555 555 555",
  age: "43",
  addres: "Fuenlabrada, Madrid",
};

var onLoadPersonalInfo = () => {
  
  var myName = document.getElementById("personal_info_name");
  myName.innerHTML = personalInfo.name;

  var myMail = document.getElementById("personal_info_mail");
  myMail.innerHTML = personalInfo.mail;

  var myPhone = document.getElementById("personal_info_phone");
  myPhone.innerHTML = personalInfo.phone;

  // var myAge = document.getElementById("personal_info_age");
  // myAge.innerHTML = personalInfo.age;
 

  var myAddres = document.getElementById("personal_info_address");
  myAddres.innerHTML = personalInfo.addres;

}

export { onLoadPersonalInfo };


