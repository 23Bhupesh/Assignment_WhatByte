// components/Sidebar.js
export default function Sidebar() {
    return (
      <div className="w-64 border h-screen p-5 lg:block hidden">
        <ul className="flex flex-col leading-10">
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full">
            <span>📊</span>
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full">
            <span>📝</span>
            <span>Skill Test</span>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full">
            <span>📄</span>
            <span>Internship</span>
          </li>
        </ul>
      </div>
    );
  }
  