import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const salesData = [
	{ month: "Jan", sales: 4000 },
	{ month: "Feb", sales: 3000 },
	{ month: "Mar", sales: 5000 },
	{ month: "Apr", sales: 4500 },
	{ month: "May", sales: 6000 },
	{ month: "Jun", sales: 5500 },
];

const SalesTrendChart = () => {
	return (
		<motion.div
			className='bg-white backdrop-blur-md shadow-lg rounded-xl p-6'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className='text-xl  font-medium text-black mb-4'>Sales Trend</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<LineChart data={salesData}>
						{/* <CartesianGrid strokeDasharray='3 3' stroke='#374151' /> */}
						<XAxis dataKey='month' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(255, 255, 255)",
								border: "none",
								boxShadow:"0 10px 60px 0px rgba(0, 0, 0, 0.5)",
								borderRadius:"10px"
							}}
							itemStyle={{ color: "gray" }}
						/>
						<Legend />
						<Line type='monotone' dataKey='sales'
							dot={{ fill: "#DB4444", strokeWidth: 1, r: 0 }} stroke='#DB4444' strokeWidth={2} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default SalesTrendChart;
