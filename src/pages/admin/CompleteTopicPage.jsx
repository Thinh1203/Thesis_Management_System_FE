import DropDown from "../../components/DropDown";
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
const CompleteTopicPage = () => {
    return (
        <div>
            <div className="flex">
                <TeacherLeftDashboard />
                <div className="w-screen h-screen bg-slate-200">
                    <div className=" flex justify-end mx-10 my-5">
                        <DropDown />
                    </div>
                    <div className="mt-20">
                        <div className="border-2 rounded-xl mx-5 my-5 shadow-lg shadow-slate-400 py-4">
                            <h4 className="mx-4 font-bold text-gray-700 text-lg">Đề tài</h4>
                            <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p>  <p className="text-md text-blue-800 font-semibold">Đã hoàn thành</p></span>
                        </div>
                        <div className="rounded-xl h-full shadow-lg shadow-slate-400 py-4 mx-4">
                            <div >
                                <input className="w-1/3 border-2 p-1 mx-4 mt-2 rounded-lg outline-none border-slate-400" type="text" placeholder="Mã đề tài, tên đề tài ..." />
                            </div>
                            <div className="grid grid-cols-3">
                                <div className="ml-4 mt-2">
                                    <h3 className="text-blue-700 text-lg font-semibold">Danh sách khóa luận đã hoàn thành</h3>
                                </div>
                            </div>
                            <div class="table-auto w-full border-t-2 border-b-2 grid grid-cols-10 border-y-slate-300 rounded-sm mt-2  text-center font-semibold">
                                <div className="border-r-2 border-slate-300 py-1">Mã đề tài</div>
                                <div className="border-r-2 col-span-2 border-slate-300 py-1">Tên đề tài</div>
                                <div className="col-span-2 border-r-2 border-slate-300 py-1">Tên tiếng Anh</div>
                                <div className="py-1 border-r-2 border-slate-300">Sinh viên thực hiện</div>
                                <div className="py-1 border-r-2 border-slate-300">Giảng viên hướng dẫn</div>
                                <div className="py-1 border-r-2 border-slate-300">File báo cáo</div>
                                <div className="py-1 border-r-2 border-slate-300">Niên khóa</div>
                                <div className="py-1 border-r-2 border-slate-300">Điểm</div>
                            </div>
                            <div class="table-auto w-full border-b-2 grid grid-cols-10 border-y-slate-300 rounded-sm  font-normal">
                                <div className="border-r-2 ml-2 border-slate-300 py-1">CT550N14</div>
                                <div className="border-r-2 ml-2 col-span-2 border-slate-300 py-1">Website thương mại điện tử kinh doanh thú cưng</div>
                                <div className="col-span-2 ml-2 border-r-2 border-slate-300 py-1">E-commerce website for pet business</div>
                                <div className="py-1 ml-2 border-r-2 border-slate-300">Trương Trường Thịnh</div>
                                <div className="py-1 ml-2 border-r-2 border-slate-300">Lâm Nhựt Khang</div>
                                <div className="py-1 ml-2 border-r-2 border-slate-300">file</div>
                                <div className="py-1 ml-2 border-r-2 border-slate-300"><p>2021-2022</p> <p>Học kỳ 1</p></div>
                                <div className="py-1 ml-2 border-r-2 border-slate-300 text-center">9</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompleteTopicPage;