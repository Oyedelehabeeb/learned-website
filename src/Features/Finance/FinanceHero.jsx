import { NavLink } from "react-router-dom";
import { FaBitcoin, FaChartLine, FaBook } from "react-icons/fa";

function FinanceHero() {
  return (
    <div className="relative bg-gradient-to-r from-customGray to-darkGray text-white py-16 px-8 text-center">
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 drop-shadow-md">
          Master Your Financial Future
        </h1>
        <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md">
          Learn about Cryptocurrency, Trading, and Accounting. Take control of
          your financial destiny.
        </p>

        <div className="flex flex-col justify-center gap-4 mt-8">
          <NavLink
            to="/finance/cryptocurrency-blockchain"
            className="group bg-yellow-400 text-gray-800 px-6 py-4 rounded-lg flex items-center space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaBitcoin className="text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Cryptocurrency & Blockchain</span>
          </NavLink>
          <NavLink
            to="/finance/investing-trading"
            className="group bg-yellow-400 text-gray-800 px-6 py-4 rounded-lg flex items-center space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaChartLine className="text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Investing & Trading</span>
          </NavLink>
          <NavLink
            to="/finance/accounting-bookkeeping"
            className="group bg-yellow-400 text-gray-800 px-6 py-4 rounded-lg flex items-center space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaBook className="text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Accounting & Bookkeeping</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default FinanceHero;
