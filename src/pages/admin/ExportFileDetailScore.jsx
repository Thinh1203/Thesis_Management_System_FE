import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { exportFileDetailScore } from "../../api/adminApi/thesis.js";
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const ExportFileDetailScore = () => {
    const [dataReport, setDataReport] = useState(null);
    const location = useLocation();
    const id = location.state;

    const printRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });


    useEffect(() => {
        const fetchApi = async () => {
            const res = await exportFileDetailScore(id);
            setDataReport(res);
        };
        fetchApi();
    }, []);
    useEffect(() => {
        if (dataReport) {
            handlePrint();
        }
    }, [dataReport]);
    return (
        <div className="mt-8" ref={printRef}>
            <div className="grid grid-cols-8">
                <div className="col-span-3 text-center">
                    <h5 className="text-lg">
                        BỘ GIÁO DỤC VÀO ĐÀO TẠO
                    </h5>
                    <h4 className="font-bold text-lg">
                        ĐẠI HỌC CẦN THƠ
                    </h4>
                    <h5 className="text-base">
                        MÃ HỘI ĐỒNG HD{dataReport && dataReport.council.id}
                    </h5>
                </div>
                <div className="col-span-5 text-center">
                    <h3 className="font-semibold text-2xl text-red-700">
                        CHI TIẾT ĐIỂM KHÓA LUẬN TỐT NGHIỆP
                    </h3>
                    <h4 className="font-semibold text-lg">
                        TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG
                    </h4>
                    <h5>
                        NIÊN KHÓA {dataReport && dataReport.council.shoolYear.year} HỌC KỲ - {dataReport && dataReport.council.shoolYear.semester}
                    </h5>
                </div>
            </div>
            <div className="mt-14 w-full">
                <table className="m-auto border-2 border-slate-500 w-10/12">
                    <thead>
                        <tr>
                            <th rowSpan="2" className="px-2 border-2 border-slate-500">Mssv</th>
                            <th rowSpan="2" className="px-2 border-2 border-slate-500">Họ và tên</th>
                            <th rowSpan="2" className="px-2 border-2 border-slate-500">Tên tiếng Việt đề tài</th>
                            <th rowSpan="2" className="px-2 border-2 border-slate-500">Tên tiếng Anh đề tài</th>
                            <th colSpan="3" className="px-2 border-2 border-slate-500">Điểm thành viên hội đồng chấm</th>
                            <th rowSpan="2" className="px-2 border-2 border-slate-500">Tổng điểm</th>
                        </tr>
                        <tr>
                            <th className="px-2 border-2 border-slate-500">Chủ tịch</th>
                            <th className="px-2 border-2 border-slate-500">Thư ký</th>
                            <th className="px-2 border-2 border-slate-500">Giáo viên phản biện</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-2 border-2 border-slate-500 text-center">
                                {dataReport && dataReport.student.account}
                            </td>
                            <td className="px-2 border-2 border-slate-500 text-center">
                                {dataReport && dataReport.student.fullName}
                            </td>
                            <td className="px-2 border-2 border-slate-500 ">
                                {dataReport && dataReport.topic.VietnameseName}
                            </td>
                            <td className="px-2 border-2 border-slate-500 ">
                                {dataReport && dataReport.topic.EnglishName}
                            </td>
                            <td className="px-2 border-2 border-slate-500 text-center">
                                {dataReport && dataReport.council.councildetails[0].score}
                            </td>
                            <td className="px-2 border-2 border-slate-500 text-center">
                                {dataReport && dataReport.council.councildetails[1].score}
                            </td>
                            <td className="px-2 border-2 border-slate-500 text-center">
                                {dataReport && dataReport.council.councildetails[2].score}
                            </td>
                            <td className="px-2 border-2 border-slate-500 text-center">
                                {dataReport && dataReport.score}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="grid grid-cols-6 w-10/12 mx-auto mt-8">
                <div className="col-span-2">

                </div>
                <div className="col-span-4 text-right grid grid-rows-2 ">
                    <div className="mx-10">
                        Cần Thơ, ngày ______ tháng ______ năm ______
                    </div>
                    <div className="mx-20">
                        Trưởng khoa ký và ghi rõ họ tên
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ExportFileDetailScore;