import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    LabelList,
} from "recharts";

const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#00c49f"];

const PageAreaChart = ({ storeBook }) => {
    const chartData = storeBook.map((book, index) => ({
        name: book.bookName,
        pages: book.totalPages,
        fill: colors[index % colors.length],
    }));

    return (
        <div style={{ width: "100%" }}>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="pages"
                        stroke="#8884d8"
                        fill="#8884d8"
                    >
                        {/* Show page numbers on top of each point */}
                        <LabelList dataKey="pages" position="top" />
                    </Area>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PageAreaChart;
