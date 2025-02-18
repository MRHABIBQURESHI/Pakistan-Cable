import React, { useState } from "react";
import { Card, Input, Checkbox, Radio, Pagination, Button } from "antd";
import { Link } from "react-router-dom";
const SurveyIndividual = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("summary");
  return (
    <div className="min-h-screen p-6">
<h2 className="font-semibold mb-4 text-[24px] text-[#18120F]
">5 responses</h2>
      <div className="flex  ">
<div className=" mx-auto my-4">
        <Link to="/survey-management/response">
          <Button className="!text-[#4F9E91] !text-[14px] !text-Inter !font-medium !bg-white " type={activeTab === "summary" ? "primary" : "default"} onClick={() => {
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
      <Card className="">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="">
            <p className="text-[14px] font-semibold text-[#6B6B6B] font-Manrope">SURVEY NAME</p>
            <Input placeholder="Survey Name" />
          </div>
          <div>
            <p className="text-[14px] font-semibold text-[#6B6B6B] font-Manrope">SURVEY DESCRIPTION</p>
            <Input placeholder="Description (optional)" />
          </div>
          <div>
            <p className="text-[14px] font-semibold text-[#6B6B6B] font-Manrope">CUSTOMER NAME</p>
            <Input placeholder="Kamran" />
          </div>
          <div>
            <p className="text-[14px] font-semibold text-[#6B6B6B] font-Manrope">INDIVIDUAL FILLER EMAIL</p>
            <Input placeholder="mail@companyname.com" />
          </div>
          <div>
            <p className="text-[14px] font-semibold text-[#6B6B6B] font-Manrope">CUSTOMER LOCATION</p>
            <Input placeholder="Lahore" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Pagination
            simple
            defaultCurrent={1}
            total={5}
            onChange={(page) => setCurrentPage(page)}
          />
          <p className="text-red-500 text-sm">RESPONSES CANNOT BE EDITED</p>
          <Button danger type="text">:wastebasket:</Button>
        </div>
      </Card>
      <div className="grid grid-cols-2 gap-4">
      <Card title="1- Your Question here" extra={<span className="text-gray-500">Description (optional)</span>}>
    <Radio.Group defaultValue="Option 1">
      <div className="grid grid-cols-1 gap-4">
        <Radio value="Option 1">Option 1</Radio>
        <Radio value="Option 2">Option 2</Radio>
        <Radio value="Option 3">Option 3</Radio>
      </div>
    </Radio.Group>
  </Card>
        <Card title="2- Your Question here" extra={<span className="text-gray-500">Description (optional)</span>}>
          <Checkbox.Group defaultValue={["Option 1"]} className="flex flex-col">
            <Checkbox value="Option 1">Option 1</Checkbox>
            <Checkbox value="Option 2">Option 2</Checkbox>
          </Checkbox.Group>
        </Card>
        <Card title="3- Your Question here" extra={<span className="text-gray-500 ">Description (optional)</span>}>
          <div className="flex space-x-2 ">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                className="w-10 h-10 flex items-center justify-center border rounded-lg text-lg"
              >😑
                {/* {num === 1|| num === 2|| num === 3 ? ":neutral_face:" : ":rage:"} */}
              </button>
            ))}
          </div>
        </Card>
        <Card title="4- Your Question here" extra={<span className="text-gray-500">Description (optional)</span>}>
          <p className="text-gray-500">no answer</p>
        </Card>
      </div>
    </div>
  );
};
export default SurveyIndividual;