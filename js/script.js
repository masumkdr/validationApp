// ui element
let inputmenu = document.querySelector(".navbar-nav");
//console.log(inputmenu)



// add event listener
inputmenu.addEventListener('click', (e) => {
    //console.log(e.target);
    if(e.target.hasAttribute('href')) {
        let inputField = e.target.innerHTML;
        //console.log(inputField)
        let inputText = prompt(`Please enter your ${inputField}`);


        //console.log(inputText)

        switch(inputField) {
            case "Name":
              //console.log(inputText);
              let re_name = /^([a-zA-Z ]\.?){2,30}$/;
              let format_name = "Name should be minimum 2 character and maximum 30 character, (.) can be used for Mr. or Mrs."
              //console.log(re.exec(inputText));
              reTest(re_name, inputText, format_name, inputField);
              break;
            case "Email":
              //console.log(inputText);
              let re_email = /^([a-zA-Z0-9]\.?\_?\-?)+[^\.\_\-]@([a-zA-Z0-9]\-?\.?\_?)+[^\.\_\-]\.[a-zA-Z]{2,6}$/;
              let format_email = "Email format : abc@gmail.com, abc-tel@tt-rg.com, abc_44@gmail.com etc"
              reTest(re_email, inputText, format_email, inputField);
              break;
            case "Phone Number":
              //console.log(inputText);
              let re_phone = /^(\+)?(88)?01[0-9]{9}$/;
              let format_phone = "Phone format: +8801xxxxxxxxx, 8801xxxxxxxxx, 01xxxxxxxxx"
              reTest(re_phone, inputText, format_phone, inputField);
              break;
              case "Post Code":
              //console.log(inputText);
              let re_post = /^[0-9]{4}$/;
              let format_post = "Post Code format : 4444, 4423 (4 digit number only)"
              reTest(re_post, inputText, format_post, inputField);
              break;
              case "Password":
              //console.log(inputText);
              let re_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z!#$%&? "]).{8,20}$/;
              let format_pass = "Password must contains 1 uppercase, 1 lowercase, 1 number, 1 special character with minimum 8 digit and maximum 20 digit"
              reTest(re_pass, inputText, format_pass, inputField);
              break;
            default:
              console.log(nothing);
          }
        
    }
})

function reTest(re, input, format, field) {
  let status;
    if(re.test(input)) {
      
       // console.log(`${re} matches ${input}`)
       status = "Its Matched";
    }
    else{
        //console.log(`${re} does not matches ${input}`)
        status = "its does not Matched";
    }

    let div = document.querySelector("#validate");
      div.innerHTML = `
      <ul class="list-group list-group-flush py-5">
      <li class="list-group-item"><b>Field Name :</b> ${field}</li>
      <li class="list-group-item"><b>Inserted value :</b> ${input}</li>
      <li class="list-group-item"><b>Regular Expression :</b> ${re}</li>
      <li class="list-group-item"><b>Expected Format :</b> ${format}</li>
      <li class="list-group-item"><b>Status :</b> ${status}</li>
    </ul>
      `;
}

