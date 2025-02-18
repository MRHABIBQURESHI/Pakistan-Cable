// import React from 'react'
import { FiTrendingUp } from 'react-icons/fi'
import ChartComponent from '../../../Components/Survey/ChartComponent'
import SurveyTable from './SurveyTable'
import { useNavigate } from 'react-router-dom'

function SurveyMainPage() {
const navigate = useNavigate()
    // Navigate to Add Survey Page Func
    const handleClickAddSurvey = () => {navigate('/add-survey')}

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-6 h-auto overflow-hidden">
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-black font-semibold text-lg mb-4">Survey Overview</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-[#008444] p-4 rounded-lg flex-1 min-w-[140px]">
              <div className="flex justify-center gap-2">
                <div className="text-white font-bold text-2xl">120</div>
                <div className="text-white text-sm mt-1">Survey Created</div>
              </div>
            </div>
            <div className="bg-[#FF8548] p-4 rounded-lg flex-1 min-w-[140px]">
              <div className="flex justify-center gap-2">
                <div className="text-white font-bold text-2xl">70</div>
                <div className="text-white text-sm mt-1">Survey Response</div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center p-4 border border-gray-400 mt-6 rounded">
            <h2 className="text-2xl font-bold text-[#008444]">48,890</h2>
            <h2 className="text-md mt-3 text-[9px]">QUESTION VIEW</h2>
            <div className="flex items-center border border-[#008444] px-3 py-1 rounded-lg bg-green-100">
              <FiTrendingUp className="text-green-500 w-4 h-4" />
              <h4 className="text-[#008444] text-sm mx-1 whitespace-nowrap">+ 12%</h4>
              <h4 className="text-black text-sm whitespace-nowrap">vC Last Year</h4>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-black font-semibold text-lg">Views</h2>
          <div className="p-4 w-full overflow-auto">
            <ChartComponent />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="flex justify-between items-center px-4 mt-5 mb-4">
        <h2 className="text-2xl font-bold">Survey List</h2>
        <button
        onClick={handleClickAddSurvey} 
        className="p-2 bg-orange-600 rounded text-white px-6 active:scale-110 transition transform duration-150 ease-in-out">
          Add
        </button>
      </div>

      {/* Survey Table */}
      <div className="overflow-auto px-4">
        <SurveyTable />
        
      </div>
    </>
  )
}

export default SurveyMainPage
