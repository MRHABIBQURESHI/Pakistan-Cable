import React from 'react'
import  { Column } from "@ant-design/plots";
const ComplaintAging: React.FC = () => {
    const data = [
        { category: "0-30 Days", type: "Total Tickets", value: 300 },
        { category: "0-30 Days", type: "Resolved Tickets", value: 250 },
        { category: "31-60 Days", type: "Total Tickets", value: 320 },
        { category: "31-60 Days", type: "Resolved Tickets", value: 280 },
        { category: "61-90 Days", type: "Total Tickets", value: 310 },
        { category: "61-90 Days", type: "Resolved Tickets", value: 200 },
        { category: "91-180 Days", type: "Total Tickets", value: 400 },
        { category: "91-180 Days", type: "Resolved Tickets", value: 300 },
        { category: "181-364 Days", type: "Total Tickets", value: 350 },
        { category: "181-364 Days", type: "Resolved Tickets", value: 270 },
        { category: "1-2 Years", type: "Total Tickets", value: 450 },
        { category: "1-2 Years", type: "Resolved Tickets", value: 400 },
        { category: ">2 Years", type: "Total Tickets", value: 500 },
        { category: ">2 Years", type: "Resolved Tickets", value: 420 },
      ];
      const config = {
        data,
        isGroup: true,
        xField: "category",
        yField: "value",
        seriesField: "type",
        color: ["#FFD700", "#228B22"],
        legend: { position: "top" },
        label: {
          content: (item: { value: number }) => `${item.value}`,
        },
      };
      return <Column {...config} className="!h-52 w-[99%]" />;
    };
export default ComplaintAging
