import HomePage from "../pages/HomePage";
import TopicPage from "../pages/TopicPage";     
import LoginPage from "../pages/LoginPage"; 
import Notfound from "../pages/Notfound";
import HomeDetail from "../pages/HomeDetail";
import TopicDetail from "../pages/TopicDetail";
import TeacherPage from "../pages/teacher/TeacherPage";
import ChangePassword from "../components/ChangePassword";
import MyProfile from "../components/MyProfile";
import UpdateInformation from "../components/UpdateInformation";
import CompleteTopic from "../pages/teacher/CompleteTopic";
import TutorialTopic from "../pages/teacher/TutorialTopic";
import CouncilDetail from "../pages/teacher/CouncilDetail";
import StudentHomePage from "../pages/student/StudentHomePage";
import StudentTopicDetail from "../pages/student/StudentTopicDetail";

const routers = [
    { path:"/", component: HomePage },
    { path:"/topics", component: TopicPage },
    { path:"/login", component: LoginPage },
    { path:"/newsDetail", component: HomeDetail},
    { path:"/topicDetail", component: TopicDetail},
    { path:"/teacher", component: TeacherPage},
    { path:"/teacher/completeTopic", component: CompleteTopic},
    { path:"/teacher/tutorialTopic", component: TutorialTopic},
    { path:"/teacher/detail", component: CouncilDetail},
    { path:"/student/home", component: StudentHomePage},
    { path:"/student/topic/detail", component: StudentTopicDetail},
    { path:"/changePassword", component: ChangePassword},
    { path:"/logout", component: HomePage},
    { path:"/myProfile", component: MyProfile},
    { path:"/updateInformation", component: UpdateInformation},

    { path:"*", component: Notfound }
];

export default routers;