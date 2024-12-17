
const Form = document.getElementById('form') as HTMLFormElement;
const resume_display =document.getElementById('generate-resume') as HTMLDivElement
const shareable_link = document.getElementById('Shareable-link') as HTMLDivElement
const shareable_path = document.getElementById('shareable-path') as HTMLAnchorElement
const download = document.getElementById('pdf') as HTMLButtonElement


Form.addEventListener('submit' , (event: Event) =>{
    event.preventDefault();
    
    const username =(document.getElementById('username') as HTMLInputElement).value
    const name =(document.getElementById('name') as HTMLInputElement).value
    const email =(document.getElementById('email') as HTMLInputElement).value
    const phone =(document.getElementById('phone') as HTMLInputElement).value
    const degree =(document.getElementById('degree') as HTMLInputElement).value
    const university =(document.getElementById('university') as HTMLInputElement).value
    const year =(document.getElementById('years') as HTMLInputElement).value
    const company =(document.getElementById('company') as HTMLInputElement).value
    const position =(document.getElementById('position') as HTMLInputElement).value
    const response =(document.getElementById('respons') as HTMLInputElement).value
    const skills =(document.getElementById('skills') as HTMLInputElement).value 



    const resume_data ={
      name,
      email,
      phone,
      degree,
      university,
      year,
      company,
      position,
      response,
      skills,
    };

    localStorage.setItem(username , JSON.stringify(resume_data));

    const resume = `
    <h2><b> Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
    <hr>

    <h3>Education</h3>
    <p><b>Degree:</b><span contenteditable="true">${degree}</span></p>
    <p><b>University:</b><span contenteditable="true">${university}</span></p>
    <p><b>Year:</b><span contenteditable="true">${year}</span></p>
    <hr>

     <h3>Experience</h3>
    <p><b>Company:</b><span contenteditable="true">${company}</span></p>
    <p><b>Position:</b><span contenteditable="true">${position}</span></p>
    <p><b>Respnsibility:</b><span contenteditable="true">${response}</span></p>
    <hr>

     <h3>Skills</h3>
      <p><b>Skills:</b><span contenteditable="true">${skills}</span></p>
       `;

    
        resume_display.innerHTML = resume;
      
        const shareable_url = `${window.location.origin}?username=${encodeURIComponent(username)}`
        shareable_link.style.display = "block";
        shareable_path.href = window.location.href + `#${username}`;
        shareable_path.textContent = `view ${username}'s Resume`;
    
    
});  

download.addEventListener('click' ,() =>{
  window.print();
});

window.addEventListener('DOMContentLoaded', () =>{
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('username');

  if(username){
    const savedResumeData = localStorage.getItem(username);
     

    if(savedResumeData){
      const resume_data =JSON.parse(savedResumeData);
    
      (document.getElementById('username') as HTMLInputElement).value = username;
      (document.getElementById('name') as HTMLInputElement).value = resume_data.name;
      (document.getElementById('email') as HTMLInputElement).value = resume_data.email;
      (document.getElementById('phone') as HTMLInputElement).value = resume_data.phone;
      (document.getElementById('degree') as HTMLInputElement).value = resume_data.degree;
      (document.getElementById('university') as HTMLInputElement).value = resume_data.university;
      (document.getElementById('years') as HTMLInputElement).value = resume_data.years;
      (document.getElementById('company') as HTMLInputElement).value = resume_data.company;
      (document.getElementById('position') as HTMLInputElement).value = resume_data.position;
      (document.getElementById('respons') as HTMLInputElement).value = resume_data.respons;
      (document.getElementById('skills') as HTMLInputElement).value = resume_data.skills;

    }
  }
}) 