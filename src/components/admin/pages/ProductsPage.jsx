import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

import { AlertTriangle, IndianRupee, Package, TrendingUp } from "lucide-react";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesTrendChart from "../components/products/SalesTrendChart";
import ProductsTable from "../components/products/ProductsTable";
import { useSelector } from "react-redux";

const ProductsPage = () => {
	const stats = useSelector((state) => state.adminData.stats.data);
	const loading = useSelector((state) => state.adminData.stats.loading);

	if (loading) {
		return <p>Loading...</p>
	}

	return (
		<div className='flex-1 overflow-auto relative z-0'>
			<Header title='Products' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Products' icon={Package} value={stats?.totalProducts} color='#6366F1' />
					<StatCard name='Top Selling' icon={TrendingUp} value={stats?.topSellingProducts?.length} color='#10B981' />
					<StatCard name='Low Stock' icon={AlertTriangle} value={stats?.lowStockProducts?.length} color='#F59E0B' />
					<StatCard name='Total Revenue' icon={IndianRupee} value={`₹${stats?.overallTotalSales?.toFixed(2)}`} color='#EF4444' />
				</motion.div>

				<ProductsTable />

				{/* CHARTS */}
				<div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
					<SalesTrendChart />
					<CategoryDistributionChart />
				</div>
			</main>
		</div>
	);
};
export default ProductsPage;
