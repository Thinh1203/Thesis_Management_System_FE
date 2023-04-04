import DropDown from "../../components/DropDown";
import TeacherLeftDashboard from "../../components/TeacherLeftDashboard";
import React from "react";
const CouncilDetailPage = () => {
    const council1 = [
        {
            "id": 1,
            "code": "HD001",
            "timeStart": "7:30",
            "timeEnd": "11:30",
            "startDate": "25/04/2023",
            "position": {
                "chutich": "Nguyễn văn A",
                "thuky": "Nguyễn Thị B",
                "phanbien": "Huỳnh Thị C"
            },
            "detai": {
                "maDetai": "DT001",
                "tentv": "Website thương mại điện tử kinh doanh quần áo ",
                "tenta": "Hệ thống bảo vệ luan van tot nghie",
                "name": "Nguyễn thị tường vy",
                "gvhd": "Lâm Nhựt Khang"
            },
            "year": {
                "nam": "2023-2024",
                "hocky": "1"
            }
        },
        {
            "id": 1,
            "code": "HD001",
            "timeStart": "7:30",
            "timeEnd": "11:30",
            "startDate": "25/04/2023",
            "position": {
                "chutich": "Nguyễn văn D",
                "thuky": "Nguyễn Thị E",
                "phanbien": "Huỳnh Thị F"
            },
            "detai": {
                "maDetai": "DT002",
                "tentv": "website",
                "tenta": "website",
                "name": "Nguyễn thị tường vy",
                "gvhd": "Lâm Nhựt Khang"
            },
            "year": {
                "nam": "2023-2024",
                "hocky": "1"
            }
        },
        {
            "id": 1,
            "code": "HD001",
            "timeStart": "7:30",
            "timeEnd": "11:30",
            "startDate": "25/04/2023",
            "position": {
                "chutich": "Nguyễn văn A",
                "thuky": "Nguyễn Thị B",
                "phanbien": "Huỳnh Thị C"
            },
            "detai": {
                "maDetai": "DT001",
                "tentv": "Hệ thống bảo vệ",
                "tenta": "Hệ thống bảo vệ",
                "name": "Nguyễn thị tường vy",
                "gvhd": "Lâm Nhựt Khang"
            },
            "year": {
                "nam": "2023-2024",
                "hocky": "1"
            }
        },

    ]
    let i = 0;
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
                            <h4 className="mx-4 font-bold text-gray-700 text-lg">Hội đồng</h4>
                            <span className="flex"><p className="ml-4 mr-2 font-medium text-md">Trang chủ &#62;</p> <p className="text-md text-blue-800 font-semibold">Chi tiết hội đồng</p></span>
                        </div>
                        <div className="rounded-xl h-full shadow-lg shadow-slate-400 py-4 mx-4">
                            <div className="mx-5">
                                <h2 className="text-red-700 text-2xl font-semibold">Hội đồng HD001</h2>
                            </div>
                            <div>
                                <table className="w-5/6 m-auto my-5">
                                    <thead className=" border-2 border-slate-400">
                                        <tr>
                                            <th>Thời gian bắt đầu</th>
                                            <th>Thời gian kết thúc</th>
                                            <th>Ngày diễn ra</th>
                                            <th>Chủ tịch</th>
                                            <th>Thư ký</th>
                                            <th>Phản biện</th>
                                        </tr>
                                    </thead>
                                    <tbody className=" border-2 border-slate-400">
                                        <tr className="text-center">
                                            <td>7:30</td>
                                            <td>11:30</td>
                                            <td>24/04/2023</td>
                                            <td>Nguyễn văn A</td>
                                            <td>Huỳnh Thị C</td>
                                            <td>Nguyễn văn D</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex justify-center my-2">
                                <input className="py-2 w-1/3 border-2 border-slate-400 rounded-md outline-none " type="text" placeholder=" Mã đề tài, tên đề tài, sinh viên thực hiện ..."/>
                            </div>
                            <div className="px-4">
                                <div className="grid grid-cols-11 border-b-2 border-black text-center font-semibold">
                                    <div>Mã đề tài</div>
                                    <div className="col-span-2">Tên tiếng Việt</div>
                                    <div className="col-span-2">Tên tiếng Anh</div>
                                    <div className="col-span-2">Sinh viên thực hiện</div>
                                    <div className="col-span-2">Giảng viên hướng dẫn</div>
                                    <div>Niên khóa</div>
                                    <div>Học kỳ</div>
                                </div>

                                <div className="grid grid-cols-11">
                                    {
                                        council1.map(e => (
                                            <React.Fragment key={e.id}>
                                                <div className="text-center">{e.code}</div>
                                                <div className="col-span-2 px-2">{e.detai.tentv}</div>
                                                <div className="col-span-2 mx-2">{e.detai.tenta}</div>
                                                <div className="col-span-2 text-center">{e.detai.name}</div>
                                                <div className="col-span-2 text-center">{e.detai.gvhd}</div>
                                                <div className="text-center">{e.year.nam}</div>
                                                <div className="text-center">{e.year.hocky}</div>
                                            </React.Fragment>
                                        ))
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CouncilDetailPage;