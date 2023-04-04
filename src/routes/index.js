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
import StudentGradeI from "../pages/student/StudentGradeI";
import StudentChangePassword from "../pages/student/StudentChangePassword";
import AdminHomePage from "../pages/admin/AdminHomePage";
import CouncilListPage from "../pages/admin/CouncilListPage";

import TeacherListPage from "../pages/admin/TeacherListPage";
import StudentListPage from "../pages/admin/StudentListPage";
import InstructorListPage from "../pages/admin/InstructorListPage";
import GradeIListPage from "../pages/admin/GradeIListPage";
import CompleteTopicPage from "../pages/admin/CompleteTopicPage";
import ProcessingTopicPage from "../pages/admin/ProcessingTopicPage";
import TopicListPage from "../pages/admin/TopicListPage";
import SchoolYearPage from "../pages/admin/SchoolYearPage";
import CouncilDetailPage from "../pages/admin/CouncilDetailPage";


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
    { path:"/student/DiemI", component: StudentGradeI},
    { path:"/student/ChangePassword", component: StudentChangePassword},
    { path:"/admin/home", component: AdminHomePage},
    { path:"/admin/list/council", component: CouncilListPage},
    { path:"/admin/list/teacher", component: TeacherListPage},
    { path:"/admin/list/student", component: StudentListPage},
    { path:"/admin/list/instructor", component: InstructorListPage},
    { path:"/admin/list/gradeI", component: GradeIListPage},
    { path:"/admin/list/topic", component: TopicListPage},
    { path:"/admin/list/topic/complete", component: CompleteTopicPage},
    { path:"/admin/list/topic/processing", component: ProcessingTopicPage},
    { path:"/admin/year", component: SchoolYearPage},
    { path:"/admin/council/detail", component: CouncilDetailPage},
    { path:"/changePassword", component: ChangePassword},
    { path:"/logout", component: HomePage},
    { path:"/myProfile", component: MyProfile},
    { path:"/updateInformation", component: UpdateInformation},
    { path:"*", component: Notfound }
];

export default routers;