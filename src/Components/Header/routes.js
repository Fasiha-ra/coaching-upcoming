import profile from '../../assets/header/profile.png';
import home from '../../assets/header/home.png';
import session from '../../assets/header/session.png';
import calendar from '../../assets/header/calendar.png';
import financial from '../../assets/header/financial.png';
import support from '../../assets/header/support.png';
import notification from '../../assets/header/notification.png';
const navLinks= [
    {
        title:'Home',
        icon:home ,
        link:'/dashboard',
    },
    {
        title:'Sessions',
        icon:session ,
        link:'/session',
    },
    {
        title:'Calendar',
        icon:calendar ,
        link:'/calendar',
    },
    {
        title:'Financial Overview',
        icon:financial,
        link:'/financialOverview',
    },
    {
        title:'Support',
        icon:support,
        link:'/support',
    },  
    {
        title:'Notification',
        icon:notification,
        link:'/notification',
    },
    {
        title:'Profile',
        icon:profile,
        link:'/profile',
    },
]
export default navLinks;