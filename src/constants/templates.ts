export const templates = [
    { 
        id: "blank", 
        label: "Blank Document", 
        imageUrl: "/blank-document.svg", 
        initialContent: `` 
    },
    { 
        id: "software-proposal", 
        label: "Software Proposal", 
        imageUrl: "/software-proposal.svg", 
        initialContent: `
            <h1>Software Proposal</h1>
            <h2>Project Title: [Enter Title]</h2>
            <h3>Prepared by: [Your Name]</h3>
            <h3>Date: [Date]</h3>
            <h2>Overview</h2>
            <p>[Provide a brief description of the project]</p>
            <h2>Objectives</h2>
            <ul>
                <li>[Objective 1]</li>
                <li>[Objective 2]</li>
                <li>[Objective 3]</li>
            </ul>
        `
    },
    { 
        id: "project-proposal", 
        label: "Project Proposal", 
        imageUrl: "/project-proposal.svg", 
        initialContent: `
            <h1>Project Proposal</h1>
            <h2>Project Name: [Enter Project Name]</h2>
            <h3>Author: [Your Name]</h3>
            <h3>Date: [Date]</h3>
            <h2>Introduction</h2>
            <p>[Describe the purpose of the project]</p>
            <h2>Scope</h2>
            <p>[Define the scope of the project]</p>
            <h2>Deliverables</h2>
            <ul>
                <li>[Deliverable 1]</li>
                <li>[Deliverable 2]</li>
                <li>[Deliverable 3]</li>
            </ul>
        `
    },
    { 
        id: "business-letter", 
        label: "Business Letter", 
        imageUrl: "/business-letter.svg", 
        initialContent: `
            <p>[Your Name]</p>
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Your Email]</p>
            <p>[Date]</p>
            <p>[Recipient's Name]</p>
            <p>[Recipient's Position]</p>
            <p>[Company Name]</p>
            <p>[Company Address]</p>
            <p>Dear [Recipient's Name],</p>
            <p>[Start your letter here]</p>
            <p>Sincerely,</p>
            <p>[Your Name]</p>
        `
    },
    { 
        id: "resume", 
        label: "Resume", 
        imageUrl: "/resume.svg", 
        initialContent: `
            <h1>[Your Name]</h1>
            <h2>Contact Information</h2>
            <p>Email: [Your Email]</p>
            <p>Phone: [Your Phone]</p>
            <h2>Summary</h2>
            <p>[Brief summary about your experience and skills]</p>
            <h2>Work Experience</h2>
            <h3>[Job Title] - [Company Name]</h3>
            <p>[Description of responsibilities and achievements]</p>
            <h2>Education</h2>
            <h3>[Degree] - [University Name]</h3>
            <p>[Years Attended]</p>
            <h2>Skills</h2>
            <ul>
                <li>[Skill 1]</li>
                <li>[Skill 2]</li>
                <li>[Skill 3]</li>
            </ul>
        `
    },
    { 
        id: "cover-letter", 
        label: "Cover Letter", 
        imageUrl: "/cover-letter.svg", 
        initialContent: `
            <p>[Your Name]</p>
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Your Email]</p>
            <p>[Date]</p>
            <p>[Recipient's Name]</p>
            <p>[Recipient's Position]</p>
            <p>[Company Name]</p>
            <p>[Company Address]</p>
            <p>Dear [Recipient's Name],</p>
            <p>I am excited to apply for the [Job Title] position at [Company Name].</p>
            <p>[Brief introduction and reason for applying]</p>
            <p>[Highlight relevant experience and skills]</p>
            <p>Thank you for your time and consideration.</p>
            <p>Sincerely,</p>
            <p>[Your Name]</p>
        `
    },
    { 
        id: "letter", 
        label: "Letter", 
        imageUrl: "/letter.svg", 
        initialContent: `
            <p>[Your Name]</p>
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Your Email]</p>
            <p>[Date]</p>
            <p>[Recipient's Name]</p>
            <p>[Recipient's Address]</p>
            <p>Dear [Recipient's Name],</p>
            <p>[Write your letter here]</p>
            <p>Sincerely,</p>
            <p>[Your Name]</p>
        `
    }
];
