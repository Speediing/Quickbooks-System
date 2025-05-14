export default function Dashboard() {
  return (
    <div className="px-6">
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex">
          <a
            href="#"
            className="px-4 py-3 border-b-2 border-[#2ca01c] text-[#2ca01c] font-medium"
          >
            Home
          </a>
          <a href="#" className="px-4 py-3 text-gray-600 hover:text-gray-800">
            Cash flow
          </a>
          <a href="#" className="px-4 py-3 text-gray-600 hover:text-gray-800">
            Planner
          </a>
        </div>
      </div>

      {/* Customize & Privacy */}
      <div className="flex justify-end items-center mb-6">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <span className="text-gray-600 text-sm">Customize</span>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <span className="text-gray-600 text-sm">Privacy</span>
          <div className="w-10 h-5 bg-gray-200 rounded-full relative">
            <div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tasks Section */}
        <div className="border border-gray-200 shadow-sm rounded-md">
          <div className="pb-2 pt-4 px-4 border-b border-gray-100">
            <h3 className="text-xs font-medium text-gray-700 uppercase">
              Tasks
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center py-8 px-4">
            <div className="w-16 h-16 mb-4 bg-green-50 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 border-2 border-green-500 rounded-md flex items-center justify-center relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2ca01c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 11l3 3L22 4"></path>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-base font-medium text-gray-800 mb-1">
              No tasks yet!
            </h3>
            <p className="text-sm text-gray-500 text-center">
              Check back soon to stay on top of your to dos.
            </p>
          </div>
        </div>

        {/* Shortcuts Section */}
        <div className="border border-gray-200 shadow-sm rounded-md">
          <div className="pb-2 pt-4 px-4 flex justify-between items-center border-b border-gray-100">
            <h3 className="text-xs font-medium text-gray-700 uppercase">
              Shortcuts
            </h3>
            <button className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z"></path>
              </svg>
            </button>
          </div>
          <div className="px-4 pb-4">
            <div className="grid grid-cols-5 gap-4 py-4">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2ca01c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <span className="text-xs text-center text-gray-600">
                  Run payroll
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2ca01c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
                <span className="text-xs text-center text-gray-600">
                  Create pay-enabled invoice
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2ca01c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <path d="M14 2v6h6"></path>
                    <line x1="16" x2="8" y1="13" y2="13"></line>
                    <line x1="16" x2="8" y1="17" y2="17"></line>
                    <line x1="10" x2="8" y1="9" y2="9"></line>
                  </svg>
                </div>
                <span className="text-xs text-center text-gray-600">
                  Create invoice
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2ca01c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
                <span className="text-xs text-center text-gray-600">
                  Record expense
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2ca01c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <span className="text-xs text-center text-gray-600">
                  Add bank deposit
                </span>
              </div>
            </div>

            <div className="flex justify-center mt-2">
              <button className="text-sm text-blue-600 font-medium">
                Show all
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {/* Bank Accounts */}
        <div className="border border-gray-200 shadow-sm rounded-md">
          <div className="pb-2 pt-4 px-4 border-b border-gray-100">
            <h3 className="text-xs font-medium text-gray-700 uppercase">
              Bank Accounts
            </h3>
          </div>
          <div className="px-4 pb-4">
            <h3 className="text-sm font-medium mb-3 mt-3">
              Link your banks to see your balances in one place
            </h3>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                    <span className="text-blue-800 text-xs font-bold">RBC</span>
                  </div>
                  <span className="text-sm">RBC Bank (CAN)</span>
                </div>
                <button className="text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v8"></path>
                    <path d="M8 12h8"></path>
                  </svg>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center mr-3">
                    <span className="text-green-800 text-xs font-bold">TD</span>
                  </div>
                  <span className="text-sm">TD Canada Trust (EasyWeb)</span>
                </div>
                <button className="text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v8"></path>
                    <path d="M8 12h8"></path>
                  </svg>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-100 rounded-md flex items-center justify-center mr-3">
                    <span className="text-red-800 text-xs font-bold">S</span>
                  </div>
                  <span className="text-sm">Scotiabank (Canada)</span>
                </div>
                <button className="text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v8"></path>
                    <path d="M8 12h8"></path>
                  </svg>
                </button>
              </div>
            </div>

            <button className="w-full mt-4 py-2 border border-gray-300 rounded-md text-sm">
              Find your bank
            </button>
          </div>
        </div>

        {/* Profit & Loss */}
        <div className="border border-gray-200 shadow-sm rounded-md">
          <div className="pb-2 pt-4 px-4 border-b border-gray-100">
            <h3 className="text-xs font-medium text-gray-700 uppercase">
              Profit & Loss
            </h3>
          </div>
          <div className="px-4 pb-4">
            <h3 className="text-sm font-medium mb-3 mt-3">
              See what you make & spend across all your accounts
            </h3>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">$0</span>
                <span className="text-xs text-gray-500">Label</span>
              </div>
              <div className="h-6 bg-gray-100 rounded-sm"></div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">$0</span>
                <span className="text-xs text-gray-500">Label</span>
              </div>
              <div className="h-6 bg-gray-100 rounded-sm"></div>
            </div>

            <button className="w-full mt-4 py-2 border border-gray-300 rounded-md text-sm">
              Bring in transactions automatically
            </button>
          </div>
        </div>

        {/* Expenses */}
        <div className="border border-gray-200 shadow-sm rounded-md">
          <div className="pb-2 pt-4 px-4 border-b border-gray-100">
            <h3 className="text-xs font-medium text-gray-700 uppercase">
              Expenses
            </h3>
          </div>
          <div className="px-4 pb-4">
            <h3 className="text-sm font-medium mb-3 mt-3">
              See where your money is going
            </h3>

            <div className="flex justify-center py-4">
              <div className="w-32 h-32 rounded-full border-8 border-gray-100 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-t-8 border-l-8 border-gray-200"></div>
              </div>
            </div>

            <button className="w-full mt-4 py-2 border border-gray-300 rounded-md text-sm">
              Bring in transactions automatically
            </button>
          </div>
        </div>

        {/* Invoices */}
        <div className="border border-gray-200 shadow-sm rounded-md">
          <div className="pb-2 pt-4 px-4 border-b border-gray-100">
            <h3 className="text-xs font-medium text-gray-700 uppercase">
              Invoices
            </h3>
          </div>
          <div className="px-4 pb-4">
            <div className="space-y-4 mt-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">$0 Unpaid</span>
                  <span className="text-xs text-gray-500">Last 365 days</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="h-2 bg-orange-400 rounded-sm w-0"></div>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-sm w-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-gray-500">Overdue</span>
                  <span className="text-xs text-gray-500">Not due yet</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">$0 Paid</span>
                  <span className="text-xs text-gray-500">Last 30 days</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="h-2 bg-green-500 rounded-sm w-0"></div>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-green-500 rounded-sm w-0"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-gray-500">Not deposited</span>
                  <span className="text-xs text-gray-500">Deposited</span>
                </div>
              </div>

              <button className="w-full text-blue-600 text-sm font-medium text-left">
                Create an invoice
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cash Flow Trend */}
      <div className="border border-gray-200 shadow-sm rounded-md mt-6">
        <div className="pb-2 pt-4 px-4 border-b border-gray-100">
          <div className="flex items-center">
            <h3 className="text-xs font-medium text-gray-700 uppercase mr-2">
              Cash Flow Trend
            </h3>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
              SAMPLE
            </span>
          </div>
        </div>
        <div className="px-4 pb-4">
          <h3 className="text-sm font-medium mb-3 mt-3">
            Track how your money is doing
          </h3>

          <div className="flex justify-end items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <span>Money in</span>
              <div className="w-3 h-3 rounded-full border border-gray-300"></div>
            </div>
            <div className="flex items-center gap-1">
              <span>Money out</span>
              <div className="w-3 h-3 rounded-full border border-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
