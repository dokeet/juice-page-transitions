import Head from 'next/head'
import data from "../../utils/data"
import { motion } from "framer-motion"
export default function Product({ data }) {
	const variants = {
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1
			}
		},
		hide: {
			y: -15,
			opacity: 0
		},

	}
	return (
		<div>
			<Head>
				<title>Juice company</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<motion.article className={`grid grid-cols-3 ${data.bgColor} h-screen w-screen`} layoutId={`article_${data.name}`}>
				<motion.div className="flex items-center justify-center" variants={variants}
					animate={"show"}
					exit={"hide"}
					initial={"hide"}>
					<motion.img src="/bg-image.jpg" alt="image" className="w-full" variants={variants}
						animate={"show"}
						exit={"hide"}
						initial={"hide"} />

				</motion.div>
				<div className="flex items-center justify-center">
					<motion.img src={data.image} alt="mango" layoutId={data.name} />

				</div>
				<motion.div className="flex justify-center flex-col space-y-8 px-8"
					variants={variants}
					animate={"show"}
					exit={"hide"}
					initial={"hide"}
				>
					<h1 className="text-4xl font-bold">Always the best flavor</h1>
					<img src="/bg-image.jpg" alt="image" className="h-40 object-cover" />
					<p className="w-72 leading-relaxed self-start">{data.description}</p>
				</motion.div>
			</motion.article>
		</div>
	)
}
export async function getStaticPaths() {
	return {
		paths: [],
		fallback: 'blocking'
	}
}
export async function getStaticProps({ params }) {
	const res = data.find(item => item.name === params.flavor)

	return {
		props: {
			data: res
		}
	}
}