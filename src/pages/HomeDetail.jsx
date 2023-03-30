import React from "react";
import Header from "../components/Header";
const HomeDetai = () => {
    const council = [
        {
            "id": 1,
            "code": "CNTT01",
            "timeStart": "7:30",
            "timeEnd": "11:30",
            "startDay": "24/03/2023",
            "chairperson": "Phạm Thế Phi",
            "secretary": "Võ Xuân Diễm",
            "reviewer": " Thái Minh Tuấn"
        }
    ];
    return (
        <div>
            <Header />
            <div className="w-1/4 h-12 shadow-xl p-3 shadow-slate-500/50 m-auto mt-5 text-center">
                <h1 className="text-red-500 font-semibold text-2xl">CHI TIẾT HỘI ĐỒNG</h1>
            </div>
            <div className="w-1/3 h-80 mx-auto mt-5 shadow-xl shadow-slate-400 border-2 rounded-lg grid grid-cols-2">
                <div className="font-semibold ml-24  my-10">
                    <div className="my-2">Mã hội đồng:</div>
                    <div className="my-2">Giờ bắt đầu:</div>
                    <div className="my-2">Giờ kết thúc:</div>
                    <div className="my-2">Ngày diễn ra:</div>
                    <div className="my-2">Chủ tịch:</div>
                    <div className="my-2">Thư ký:</div>
                    <div className="my-2">Người phản biện:</div>
                </div>
                <div className="font-normal my-10 mx-6">
                    {council.map((e, index) => (
                        <React.Fragment key={e.id}>
                            <div className="my-2">{e.code}</div>
                            <div className="my-2">{e.timeStart}</div>
                            <div className="my-2">{e.timeEnd}</div>
                            <div className="my-2">{e.startDay}</div>
                            <div className="my-2">{e.chairperson}</div>
                            <div className="my-2">{e.secretary}</div>
                            <div className="my-2">{e.reviewer}</div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomeDetai;