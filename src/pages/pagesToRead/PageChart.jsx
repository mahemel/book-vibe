import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    LabelList,
    CartesianGrid,
} from "recharts";

const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#00c49f"];

const getPath = (x, y, width, height) => `
  M${x},${y + height}
  C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
  Z
`;

const TriangleBar = (props) => {
    const { x, y, width, height, payload } = props;

    if (x == null || y == null || width == null || height == null) return null;

    const fill = payload?.fill || "#8884d8";

    return <path d={getPath(x, y, width, height)} fill={fill} />;
};

const PageChart = ({ storeBook }) => {
    const chartData = storeBook.map((book, index) => ({
        name: book.bookName,
        pages: book.totalPages,
        fill: colors[index % colors.length],
    }));

    return (
        <div style={{ width: "100%" }}>
            <ResponsiveContainer width="100%" height={600}>
                <BarChart data={chartData} margin={{ top: 20 }}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="4 4" />

                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Bar dataKey="pages" shape={<TriangleBar />}>
                        <LabelList dataKey="pages" position="top" />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PageChart;
