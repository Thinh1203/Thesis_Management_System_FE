import DropDown from "../../components/DropDown";
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
import CouncilPage from "./CouncilPage";
const TeacherPage = () => {
    return (
        <div className="flex">
            <TeacherLeftDashboard />
            <div className="w-screen h-screen bg-slate-200">
                <div className=" flex justify-end mx-10 my-5">
                    <DropDown />
                </div>
                <div className="my-20">
                    <CouncilPage />
                </div>
            </div>
        </div>
    );
}

export default TeacherPage;