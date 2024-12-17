var Form = document.getElementById('form');
var resume_display = document.getElementById('generate-resume');
var shareable_link = document.getElementById('Shareable-link');
var shareable_path = document.getElementById('shareable-path');
var download = document.getElementById('pdf');
Form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var university = document.getElementById('university').value;
    var year = document.getElementById('years').value;
    var company = document.getElementById('company').value;
    var position = document.getElementById('position').value;
    var response = document.getElementById('respons').value;
    var skills = document.getElementById('skills').value;
    var resume_data = {
        name: name,
        email: email,
        phone: phone,
        degree: degree,
        university: university,
        year: year,
        company: company,
        position: position,
        response: response,
        skills: skills,
    };
    localStorage.setItem(username, JSON.stringify(resume_data));
    var resume = "\n    <h2><b> Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    <hr>\n\n    <h3>Education</h3>\n    <p><b>Degree:</b><span contenteditable=\"true\">").concat(degree, "</span></p>\n    <p><b>University:</b><span contenteditable=\"true\">").concat(university, "</span></p>\n    <p><b>Year:</b><span contenteditable=\"true\">").concat(year, "</span></p>\n    <hr>\n\n     <h3>Experience</h3>\n    <p><b>Company:</b><span contenteditable=\"true\">").concat(company, "</span></p>\n    <p><b>Position:</b><span contenteditable=\"true\">").concat(position, "</span></p>\n    <p><b>Respnsibility:</b><span contenteditable=\"true\">").concat(response, "</span></p>\n    <hr>\n\n     <h3>Skills</h3>\n      <p><b>Skills:</b><span contenteditable=\"true\">").concat(skills, "</span></p>\n       ");
    resume_display.innerHTML = resume;
    var shareable_url = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareable_link.style.display = "block";
    shareable_path.href = window.location.href + "#".concat(username);
    shareable_path.textContent = "https:// ".concat(username, "'s Resume");
});
download.addEventListener('click', function () {
    window.print();
});
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resume_data = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resume_data.name;
            document.getElementById('email').value = resume_data.email;
            document.getElementById('phone').value = resume_data.phone;
            document.getElementById('degree').value = resume_data.degree;
            document.getElementById('university').value = resume_data.university;
            document.getElementById('years').value = resume_data.years;
            document.getElementById('company').value = resume_data.company;
            document.getElementById('position').value = resume_data.position;
            document.getElementById('respons').value = resume_data.respons;
            document.getElementById('skills').value = resume_data.skills;
        }
    }
});
