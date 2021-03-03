import ProfilePic from '../images/ProfilePic.jpg';
import SoftRetic from '../images/SoftRetic.png';
import CodingExpo from '../images/CodingExpo.png';
import { faLinkedin, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from "@fortawesome/free-regular-svg-icons";
import ResumePDF from './Amir_Resume.pdf';

export const Person = {
    name: 'Arsh Sahzad',
    profilePic : ProfilePic,
    resumePDF : ResumePDF
};

export const AboutMeData = {
    intro: 'I\'m Full Stack Web Developer and a Tech Enthusiast who loves everything which involves code.',
    desc : 'I enjoy taking up complex problems and converting to an usable format. My major domains are Web Development and Cloud Computing.',
    outro: 'When I\'m not coding, you will find me watching an episode of The Office or exploring for new tech & technologies.'
};

export const Experiences = [
    {
        position : 'Web Developer ~ Part Time',
        organization : 'CodingExpo Technology Private Limited',
        startDate : 'January 2020',
        endDate : 'October 2020',
        description : 'Responsible for designing, coding and modifying web apps according to client’s needs & fixes bugs in existing projects.',
        organizationPicture : CodingExpo
    },
    {
        position : 'Web Developer ~ Internship',
        organization : 'CodingExpo Technology Private Limited',
        startDate : 'October 2019',
        endDate : 'December 2019',
        description : 'Worked on a LMS platform & responsible for front-end part, database management & payment gateway integration to web app.',
        organizationPicture : CodingExpo
    },
    {
        position : 'Web Designer ~ Internship',
        organization : 'SoftRetic Private Limited',
        startDate : 'February 2019',
        endDate : 'April 2019',
        description : 'Designed website, mobile application UI and UX, logo, cover photo, banners using figma, sketch, photoshop and illustrator.',
        organizationPicture : SoftRetic
    }
];

export const EducationList = [
    {
        instituteName : 'Greater Noida Institute of Technology',
        degree : 'B.Tech – Information Technology (IT) ',
        year : ' 2017-2021',
        id : 1
    },
    {
        instituteName : 'Mira Mateshwari M.S.S School',
        degree : 'Senior Secondary ',
        year : ' 2014-2016',
        id : 2
    },
    {
        instituteName : 'DAV Centenary Public School',
        degree : 'Secondary School ',
        year : ' 2004-2014',
        id : 3
    }
];

export const Projects = [
    {
        projectName : 'Windfolio',
        description : 'It is a portfolio web application based on theme of Windows 10. It replicates the feature of the Windows 10 and it uses technology such as node.js and react.js.',
        technologyStack : ['HTML','CSS','JavaScript','Node.js','React.js'],
        link : 'https://arsh.link/windfolio'
    },
    {
        projectName : 'GitWatcher',
        description : 'A github profile analyze tool to get the information of github user like total public repos, forks. It fetches data from github using axios library for http requests.',
        technologyStack : ['React.js','Node.js','Axios','Github API'],
        link : 'https://arsh.link/gitwatcher'
    },
    {
        projectName : 'RelaxSound',
        description : 'Sound healing therapy uses aspects of nature\'s sounds to improve physical and emotional health. It is based next.js and prerecorded sounds of nature.',
        technologyStack : ['HTML','CSS','JavaScript','Next.js','Dockerfile'],
        link : 'https://arsh.link/relaxsound'
    }, 
    {
        projectName : 'FamilyDB',
        description : 'An app based on MERN stack. It Fetches data of individual family member like documents, bank details, files by CRUD method.',
        technologyStack : ['HTML','CSS','JavaScript','Node.js','React.js'],
        link : 'https://arsh.link/familydb'
    },
]

export const SkillSet = [
    {
        name : 'Language Proficiency',
        values : [
            'HTML',
            'CSS',
            'JavaScript',
            'React.JS',
            'Vue.JS',
            'Python',
            'SQL',
            'YAML',
            'JSON',
        ]
    },
    {
        name : 'Tools Proficiency',
        values : [
            'Node.js',
            'Git',
            'Github',
            'Docker',
            'Kubernetes',
            'PyCharm',
            'WebStrom',
            'Linux OS',
            'Cloud Computing',
        ]
    },
    {
        name : 'Database Proficiency',
        values : [
            'MySQL',
            'PostgreSQL',
            'MongoDB',
            'FaunaDB',
            'Firestore',
        ]
    }
]

export const ContactPoints = [
    {
        field : 'email',
        fieldName : 'Email',
        value : 'hello@arsh.dev',
        link : 'mailto:hello@arsh.dev',
        icon : faEnvelope
    },
    {
        field : 'linkedIn',
        fieldName : 'LinkedIn',
        value : 'in/arshsahzad',
        link : 'https://arsh.link/linkedin',
        icon : faLinkedin
    },
    {
        field : 'github',
        fieldName: 'GitHub',
        value : 'arshsahzad',
        link : 'https://arsh.link/github',
        icon : faGithub
    },
    {
        field : 'twitter',
        fieldName: 'Twitter',
        value : 'arshsahzad',
        link : 'https://arsh.link/twitter',
        icon : faTwitter
    }

]

export const LocationDetails = [
    {
        placeName: 'Current Location : New Delhi, India', 
        latitude : 28.7041, 
        longitude : 77.1025, 
        dx : -30, 
        dy: -90 
    },
    {
        placeName: 'Hometown : Siwan, India', 
        latitude : 26.2243, 
        longitude : 84.3600, 
        dx : -30, 
        dy: -90 
    }
]