import { FaBitcoin, FaChartLine, FaBook } from "react-icons/fa";
import CategoryExplore from "../../Ui/CategoryExplore";
const financePaths = [
    {
      title: "Cryptocurrency & Blockchain",
      description:
        "Master digital currencies and blockchain technology fundamentals for modern investing",
      icon: FaBitcoin,
      path: "/finance/cryptocurrency-blockchain",
      topics: ["Bitcoin", "Ethereum", "DeFi", "Smart Contracts"],
    },
    {
      title: "Investing & Trading",
      description:
        "Learn investment strategies and trading techniques for successful wealth building and comprehensive portfolio management",
      icon: FaChartLine,
      path: "/finance/investing-trading",
      topics: [
        "Stock Analysis",
        "Portfolio Management",
        "Risk Assessment",
        "Market Research",
      ],
    },
    {
      title: "Accounting & Bookkeeping",
      description:
        "Master financial record-keeping and accounting principles for business success",
      icon: FaBook,
      path: "/finance/accounting-bookkeeping",
      topics: [
        "Financial Statements",
        "Tax Preparation",
        "QuickBooks",
        "Budgeting",
      ],
    },
  ];
export default function FinanceHero() { return <CategoryExplore title="Accounting & finance" description="Build confidence with numbers, financial decisions, and the world of investing." paths={financePaths} />; }
