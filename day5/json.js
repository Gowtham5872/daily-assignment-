let resume={
    "name": "Gowtham",
    "contact_info": {
    "email": "gowtham@email.com",
    "phone": "+1234567890",
    "address": "123 Healthcare Street, City, State, ZIP"
    },
    "summary": "Experienced Full Stack Developer with a focus on healthcare technology. Proficient in designing and implementing software solutions to improve patient care and streamline healthcare processes.",
    "education": [
    {
    "degree": "Bachelor of Science in Computer Science",
    "institution": "University XYZ",
    "location": "City, State",
    "graduation_date": "May 20XX"
    }
    ],
    "experience": [
    {
    "position": "Full Stack Developer",
    "company": "HealthTech Solutions Inc.",
    "location": "City, State",
    "start_date": "June 20XX",
    "end_date": "Present",
    "responsibilities": [
    "Developed and maintained healthcare software applications.",
    "Designed and implemented database structures for healthcare data management.",
    "Collaborated with healthcare professionals to understand and address specific industry needs.",
    "Ensured compliance with healthcare regulations and standards."
    ]
    },
    {
    "position": "Software Engineer Intern",
    "company": "Medical Systems Innovations",
    "location": "City, State",
    "start_date": "May 20XX",
    "end_date": "August 20XX",
    "responsibilities": [
    "Assisted in the development of healthcare software solutions.",
    "Participated in testing and quality assurance processes.",
    "Gained familiarity with healthcare industry standards and practices."
    ]
    }
    ],
    "skills": [
    "Programming languages: Java, JavaScript, Python",
    "Frameworks: Spring Boot, React, Angular",
    "Database technologies: SQL, MongoDB",
    "Healthcare standards: HL7, DICOM",
    "Agile development methodologies"
    ]
    } 
    for (let key in resume) {
        console.log(key + ": " + resume[key]);
    }
    for (let entry of Object.entries(resume)) {
        console.log(entry[0] + ": " + entry[1]);
    }
    Object.entries(resume).forEach(([key, value]) => {
        console.log(key + ": " + value);
    });
    let keys = Object.keys(resume);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        console.log(key + ": " + resume[key]);
    }