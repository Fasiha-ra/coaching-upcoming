import edit from "../../assets/profile/edit.png";
import about from "../../assets/profile/about.png";
import logout from "../../assets/profile/logout.png";
import experience from "../../assets/profile/experience.png";
import skill from "../../assets/profile/skill.png";
import certified from "../../assets/profile/certified.png";
import setting from "../../assets/profile/setting.png";
import education from "../../assets/profile/educations.png";
import { useNavigate } from "react-router-dom";

export const data = [
    {
        img: edit,
        title:"Edit Profile",
        link:"/editprofile"
    },
    {
        img: about,
        title:"About",
        link:"/about"
    },
    {
        img: skill,
        title:"Skills",
        link:"/ProfileSkills"
    },
    {
        img: experience,
        title:"Experience",
        link:"/experience"
    },
    {
        img: education,
        title:"Education",
        link:"/education"
    },
    {
        img: certified,
        title:"Certificates",
        link:"/certificates"
    },
    {
        img: setting,
        title:"Settings",
        link:"/setting"
    },
    {
        img: logout,
        title:"Logout",
       action: "logout"
    }
];
