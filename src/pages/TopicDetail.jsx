import Header from "../components/Header";
const TopicDetail = () => {
    return (
        <div>
            <Header />
            <div className="grid m-auto mt-2 border-indigo-600 w-1/2 h-96">
                <div className="grid grid-rows-2 h-28">
                    <div className="mx-auto w-1/2 h-12 shadow-xl p-3 shadow-slate-500/50 text-center">
                        <h1 className="text-2xl text-red-500 font-semibold">CHI TIẾT ĐỀ TÀI</h1>
                    </div>
                    <div className="ml-10 grid grid-cols-2 my-5 border-2 w-5/6 h-80 rounded-md shadow-xl shadow-slate-400">
                        <div className="mx-auto font-semibold my-6">
                            <div className="my-2">Mã đề tài:</div>
                            <div className="my-2">Tên đề tài:</div>
                            <div className="my-2">Tên tiếng anh:</div>
                            <div className="my-2">Giảng viên hướng dẫn:</div>
                            <div className="my-2">Sinh viên thực hiện:</div>
                            <div className="my-2">Thời gian bắt đầu:</div>
                            <div className="my-2">Thời gian kết thúc:</div>
                            <div className="my-2">Mã hội đồng:</div>
                        </div>
                        <div className="font-normal my-6">
                            <div className="my-2">CNTT2023-DT01</div>
                            <div className="my-2">Hệ thống thi trắc nghiệm</div>
                            <div className="my-2">English test management system</div>
                            <div className="my-2">Lâm Nhựt Khang</div>
                            <div className="my-2">Quách Huy Thịnh</div>
                            <div className="my-2">12/01/2023</div>
                            <div className="my-2">28/04/2023</div>
                            <div className="my-2">HD001</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopicDetail;