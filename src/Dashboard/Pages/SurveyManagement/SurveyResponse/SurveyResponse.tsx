import React, { useState } from "react";
import { Card, Button } from "antd";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { Link } from "react-router-dom";
const pieData = [
  { name: "Option 1", value: 60, color: "#44A6E9" },
  { name: "Option 2", value: 20, color: "#E2362F" },
  { name: "Option 3", value: 20, color: "#FEC600" },
];
const barData = [
  { option: "Option 1", count: 3 },
  { option: "Option 2", count: 3 },
];
const ratingData = [
  { rating: "1", count: 1 },
  { rating: "2", count: 1 },
  { rating: "3", count: 0 },
  { rating: "4", count: 1 },
  { rating: "5", count: 1 },
];
const SurveyResponse: React.FC = () => {
  const [activeTab, setActiveTab] = useState("summary");
  return (
    <div className="p-6  min-h-screen">
<h1 className="text-xl font-semibold">Survey Name (5 responses)</h1>
      <div className="flex items-center  my-4">
        <div className="whitespace-nowrap mx-auto">
        <Link to="/survey-management/response">
          <Button className="!text-[#4F9E91] !text-[14px] !text-Inter !font-medium !bg-white" type={activeTab === "summary" ? "primary" : "default"} onClick={() => {
            console.log("right click");
            setActiveTab("summary")} }>
            Summary
          </Button>
          </Link>
          <Link to="/survey-management/individual">
          <Button
      className="!text-[#525866] !text-[14px] !text-Inter !font-medium"
      type={activeTab === "individual" ? "primary" : "default"}
      onClick={() =>{
        console.log("right click");
        setActiveTab("individual")}}
    >
      Individual
    </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="1- Your Question here" className="shadow-md">
          <PieChart width={300} height={250}>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </Card>
        <Card title="2- Your Question here" className="shadow-md">
          <BarChart width={300} height={250} data={barData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="option" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#008444" />
          </BarChart>
        </Card>
        <Card title="3- Your Question here" className="shadow-md">
          <p className="text-center">Average rating (2.60)</p>
          <BarChart width={300} height={250} data={ratingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="rating" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#008444" />
          </BarChart>
        </Card>
        <Card title="4- Hello" className="shadow-md">
          <div className="space-y-2">
            {["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"].map((text, index) => (
              <div key={index} className="p-2 bg-gray-100 rounded">{text}</div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
export default SurveyResponse;