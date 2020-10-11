var personalInfo = {
  name: "Daniel González",
  mail: "Danielo@mail.com",
  phone: "555 555 555",
  age: "43",
  addres: "Fuenlabrada, Madrid"
};

var onLoadPersonalInfo = () => {
  console.log('onLoadPersonalInfo');
  var myName = document.getElementById("personal_info_name");
  myName.innerHTML = personalInfo.name;

  var myMail = document.getElementById("personal_info_mail");
  myMail.innerHTML = personalInfo.mail;

  var myPhone = document.getElementById("personal_info_phone");
  myPhone.innerHTML = personalInfo.phone;

  var myPhone = document.getElementById("personal_info_age");
  myPhone.innerHTML = personalInfo.age;

  var myPhone = document.getElementById("personal_info_addres");
  myPhone.innerHTML = personalInfo.addres;
}

export { onLoadPersonalInfo };


