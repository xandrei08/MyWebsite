let form = document.querySelector("#contactForm");

form.addEventListener("submit", (e) => {
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;
  let company = document.querySelector("#company").value;
  let date = document.querySelector("#date").value;
  let time = document.querySelector("#time").value;

  window.open(
    `mailto:xandreix93@gmail.com?subject=Booked Interview&body=Hello Andrei, <br/>
    I am ${firstName} ${lastName} from ${company}, <br/
    I would like to inform that you have been booked to an interview at ${date},${time}.<br/>
    Looking forward to meet you. <br/>


    Regards, <br/>
    ${firstName}`
  );
  e.preventDefault();
});
