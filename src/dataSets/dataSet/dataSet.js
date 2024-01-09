import ProfilePic from '../images/ProfilePic.jpg';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from "@fortawesome/free-regular-svg-icons";
import ResumePDF from './waquar_cv.pdf';

export const Person = {
    name: 'Waquar Hassan',
    profilePic : ProfilePic,
    resumePDF : ResumePDF
};

export const AboutMeData = {
    intro: 'I\'m a Software Developer and a Tech Enthusiast who loves everything which involves code.',
    desc : 'I enjoy taking up complex problems and converting to an usable format. My major domains are Android Development and Flutter Framework.',
    outro: 'When I\'m not coding, you will find me watching an episode of The Office or exploring for new tech & technologies.'
};

export const Experiences = [
    {
        position : 'Software Developer',
        organization : 'WebReinvent Private Limited',
        startDate : 'August 2023',
        endDate : 'present day',
        description : 'Handling Frontend part of project of UK cliets and intract with them. Also handle internal projects and intergrate backend part also.',
        organizationPicture : '',
    }
];

export const EducationList = [
    {
        instituteName : 'Institute of Management Studies',
        degree : 'Bachelor of Computer Applications',
        year : ' 2019-2022',
        id : 1
    },
    {
        instituteName : 'C.B.I Inter College',
        degree : 'Senior Secondary ',
        year : ' 2017-2019',
        id : 2
    }
];

export const Projects = [
    {
        projectName : 'Neutron',
        description : 'Code converter for Java, C++, and C languages,streamlining code conversion. Praised by usersfor utility, emerging as a vital programming tool.',
        technologyStack : ['HTML','CSS','JavaScript','Node.js'],
        link : 'https://neutron-306905.web.app/#/'
    },
    {
        projectName : 'Windfolio',
        description : 'It is a portfolio web application based on theme of Windows 10. It replicates the feature of the Windows 10 and it uses technology such as node.js and react.js.',
        technologyStack : ['HTML','CSS','JavaScript','Node.js','React.js'],
        link : 'https://windfolio.waquar.com/'
    }
]

export const SkillSet = [
    {
        name : 'Language Proficiency',
        values : [
            'HTML',
            'CSS',
            'JavaScript',
            'Dart',
            'C++',
            'Python',
            'JSON',
        ]
    },
    {
        name : 'Tools Proficiency',
        values : [
            'Git',
            'Github',
            'Jira',
            'Android Studio',
            'OneSignal',
            'DataDog',
            'FireBase',
        ]
    }
]

export const ContactPoints = [
    {
        field : 'email',
        fieldName : 'Email',
        value : 'hello@waquar.com',
        link : 'mailto:hello@waquar.com',
        icon : faEnvelope
    },
    {
        field : 'linkedIn',
        fieldName : 'LinkedIn',
        value : 'in/waquarism',
        link : 'https://www.linkedin.com/in/waquarism/',
        icon : faLinkedin
    },
    {
        field : 'github',
        fieldName: 'GitHub',
        value : 'waquarism',
        link : 'https://github.com/waquarism',
        icon : faGithub
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