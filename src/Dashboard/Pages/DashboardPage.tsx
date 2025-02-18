// import React from 'react'
import { FiTrendingUp } from 'react-icons/fi';

function DashboardPage() {
  return (
    <div>
      <section className="grid gap-3 md:grid-cols-4 md:p-1  mx-auto w-full">
        {/* Card 1 */}
        <div className="p-3 bg-white shadow-xl rounded-2xl flex justify-between items-center">
          <dl className="space-y-2">
            <dt className="text-sm font-medium text-black">Today Revenue</dt>
            <dd className="text-2xl font-light text-black">192.1k</dd>
            <dd className="flex items-center space-x-1 text-sm font-medium text-green-500 dark:text-green-400">
              <span>32k increase</span>
              <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 15.25V6.75H8.75" />
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 7L6.75 17.25" />
              </svg>
            </dd>
          </dl>
          <FiTrendingUp className="text-green-500 w-16 h-16" />
        </div>

        {/* Card 2 */}
        <div className="p-3 bg-white shadow-xl rounded-2xl flex justify-between items-center">
          <dl className="space-y-2">
            <dt className="text-sm font-medium text-black">Today Visits</dt>
            <dd className="text-2xl font-light text-black">239</dd>
            <dd className="flex items-center space-x-1 text-sm font-medium text-red-500 dark:text-red-400">
              <span>7% increase</span>
              <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 8.75V17.25H8.75" />
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 17L6.75 6.75" />
              </svg>
            </dd>
          </dl>
          <FiTrendingUp className="text-red-500 w-16 h-16" />
        </div>

        {/* Card 3 */}
        <div className="p-3 bg-white shadow-xl rounded-2xl flex justify-between items-center">
          <dl className="space-y-2">
            <dt className="text-sm font-medium text-black">Today Tranc</dt>
            <dd className="text-2xl font-light text-black">240K</dd>
            <dd className="flex items-center space-x-1 text-sm font-medium text-green-500 dark:text-green-400">
              <span>3% increase</span>
              <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 15.25V6.75H8.75" />
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 7L6.75 17.25" />
              </svg>
            </dd>
          </dl>
          <FiTrendingUp className="text-green-500 w-16 h-16" />
        </div>
        {/* Card 4 */}
        <div className="p-3 bg-white shadow-xl rounded-2xl flex justify-between items-center">
          <dl className="space-y-2">
            <dt className="text-sm font-medium text-black">Total Products</dt>
            <dd className="text-2xl font-light text-black">236</dd>
            <dd className="flex items-center space-x-1 text-sm font-medium text-green-500 dark:text-green-400">
              <span>3% increase</span>
              <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 15.25V6.75H8.75" />
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 7L6.75 17.25" />
              </svg>
            </dd>
          </dl>
          <FiTrendingUp className="text-green-500 w-16 h-16" />
        </div>
      </section>

      {/* <DashboardAnalytics /> */}
    </div>
  )
}

export default DashboardPage
