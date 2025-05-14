"use client";

import type React from "react";
import { Search } from "lucide-react";

import { ThemeProvider } from "@/components/theme-provider";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Inter, Nunito_Sans, Work_Sans } from "next/font/google";
import "../../globals.css";

// Primary font: Inter - A modern sans-serif with excellent readability

// Primary font: Inter - A modern sans-serif with excellent readability
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Alternative 1: Nunito Sans - A well-balanced sans-serif with geometric touches
export const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

// Alternative 2: Work Sans - A minimalist sans-serif with similar proportions to Avenir
export const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${nunitoSans.variable} ${workSans.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-[206px] bg-[#222222] text-white flex flex-col shrink-0">
              {/* Logo */}
              <div className="p-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#2ca01c] flex items-center justify-center mr-2">
                  <span className="text-white font-bold">qb</span>
                </div>
                <div className="text-white">
                  <div className="text-[10px] uppercase tracking-wide font-medium">
                    INTUIT
                  </div>
                  <div className="text-sm font-bold -mt-0.5">quickbooks</div>
                </div>
              </div>

              {/* New Button */}
              <div className="px-4 py-2">
                <button className="w-full py-1.5 px-4 border border-white/80 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium flex items-center">
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
                      className="mr-2"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    New
                  </span>
                </button>
              </div>

              {/* Bookmarks Section */}
              <div className="mt-2">
                <div className="px-4 py-1 flex items-center text-white">
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
                    className="mr-2"
                  >
                    <path d="m19 9-7 7-7-7"></path>
                  </svg>
                  <span className="text-sm font-medium uppercase">
                    Bookmarks
                  </span>
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
                    className="ml-auto"
                  >
                    <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z"></path>
                  </svg>
                </div>

                <div className="px-4 py-1">
                  <a
                    href="#"
                    className="block text-gray-300 hover:text-white py-1 text-[14px]"
                  >
                    Bank transactions
                  </a>
                </div>

                <div className="px-4 py-1 flex items-center text-gray-300 hover:text-white">
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
                    className="mr-2"
                  >
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                    <polyline points="17 21 17 13 7 13 7 21"></polyline>
                    <polyline points="7 3 7 8 15 8"></polyline>
                  </svg>
                  <span className="text-[14px]">Bookmark this page</span>
                </div>
              </div>

              {/* Menu Header */}
              <div className="px-4 py-1 mt-3 flex items-center text-white">
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
                  className="mr-2"
                >
                  <path d="m19 9-7 7-7-7"></path>
                </svg>
                <span className="text-sm font-medium uppercase">Menu</span>
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
                  className="ml-auto"
                >
                  <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z"></path>
                </svg>
              </div>

              {/* Menu Items */}
              <nav className="mt-1">
                {/* Active item with green left border */}
                <div className="relative group">
                  {/* Green left border that extends to the edge */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2ca01c]"></div>
                  <div className="flex items-center py-1.5 pl-4 pr-3">
                    <span className="text-[14px] text-white">Dashboards</span>
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
                      className="ml-auto text-gray-400"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>

                <div className="flex items-center py-1.5 pl-4 pr-3 hover:bg-[#333333]">
                  <span className="text-[14px] text-gray-300">
                    Transactions
                  </span>
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
                    className="ml-auto text-gray-400"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>

                <div className="flex items-center py-1.5 pl-4 pr-3 hover:bg-[#333333]">
                  <span className="text-[14px] text-gray-300">Sales</span>
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
                    className="ml-auto text-gray-400"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>

                <div className="flex items-center py-1.5 pl-4 pr-3 hover:bg-[#333333]">
                  <span className="text-[14px] text-gray-300">Expenses</span>
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
                    className="ml-auto text-gray-400"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>

                <div className="flex items-center py-1.5 pl-4 pr-3 hover:bg-[#333333]">
                  <span className="text-[14px] text-gray-300">
                    Customers & leads
                  </span>
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
                    className="ml-auto text-gray-400"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>

                <div className="flex items-center py-1.5 pl-4 pr-3 hover:bg-[#333333]">
                  <span className="text-[14px] text-gray-300">Reports</span>
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
                    className="ml-auto text-gray-400"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>

                <div className="flex items-center py-1.5 pl-4 pr-3 hover:bg-[#333333]">
                  <span className="text-[14px] text-gray-300">Payroll</span>
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
                    className="ml-auto text-gray-400"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>

                <div className="flex items-center py-1.5 pl-4 pr-3 hover:bg-[#333333]">
                  <span className="text-[14px] text-gray-300">Taxes</span>
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
                    className="ml-auto text-gray-400"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>

                <div className="flex items-center py-1.5 pl-4 pr-3 hover:bg-[#333333]">
                  <span className="text-[14px] text-gray-300">
                    My accountant
                  </span>
                </div>

                <div className="flex items-center py-1.5 pl-4 pr-3 hover:bg-[#333333]">
                  <span className="text-[14px] text-gray-300">Apps</span>
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
                    className="ml-auto text-gray-400"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </nav>

              {/* Setup Progress */}
              <div className="mt-auto">
                <div className="bg-[#333333] px-4 py-3">
                  <div className="flex items-center text-[14px] text-white mb-2">
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
                      className="mr-2"
                    >
                      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                      <path d="M10 2c1 .5 2 2 2 5"></path>
                    </svg>
                    <span>Set up Quickbooks 0/5</span>
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
                      className="ml-auto text-gray-400"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>

                  <div className="bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#2ca01c] h-full w-[20%] rounded-full"></div>
                  </div>
                </div>

                <div className="px-4 py-3 flex items-center text-[14px] text-gray-300">
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
                    className="mr-2 text-gray-400"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <span>Menu settings</span>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
              {/* Top Navigation Bar */}
              <header className="bg-white border-b border-gray-200">
                <div className="flex items-center h-14 px-4">
                  <div className="flex items-center mr-4">
                    <span className="text-gray-600 text-sm">Company</span>
                  </div>
                  <div className="relative flex-1 max-w-2xl mx-auto">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search for transactions, contacts, reports, help and more"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                  <div className="flex items-center gap-4 ml-auto">
                    <button className="text-gray-600">
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
                        <path d="M12 2a3 3 0 0 0-3 3v1a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
                        <path d="M19 10v1a7 7 0 0 1-14 0v-1"></path>
                        <line x1="12" x2="12" y1="19" y2="22"></line>
                      </svg>
                    </button>
                    <button className="text-gray-600">
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
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </button>
                    <button className="text-gray-600">
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
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="3"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="3" x2="21" y1="9" y2="9"></line>
                        <line x1="9" x2="9" y1="21" y2="9"></line>
                      </svg>
                    </button>
                    <button className="text-gray-600">
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
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">
                      J
                    </div>
                  </div>
                </div>
              </header>

              {/* Company Info and Logo */}
              <div className="bg-white px-6 py-3 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center rounded-md">
                      <span className="text-gray-500 text-xs">LOGO</span>
                    </div>
                    <h1 className="text-gray-800 text-lg font-normal">
                      Company
                    </h1>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <main className="flex-1 bg-white">
                <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
