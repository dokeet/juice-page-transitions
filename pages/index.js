import Head from 'next/head'
import Link from "next/link"
import styles from '../styles/Home.module.css'
import products from "../utils/data"
import { motion } from "framer-motion"

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Juice company</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="grid grid-cols-2 h-screen w-screen">
				<section className="flex justify-center flex-col px-12 space-y-12">
					<h1 className="text-9xl">The best beverage</h1>

					<ul className="space-y-8">
						<li className="text-6xl">Our story</li>
						<li className="text-6xl">Get in touch</li>
						<li className="text-6xl">Partners</li>
					</ul>

				</section>
				<section className="grid grid-cols-3">

					{products.map(product => <Card name={product.name} image={product.image} alt={product.alt} bgColor={product.bgColor} />)}
				</section>
			</main>
		</div>
	)
}
const Card = ({ name, image, bgColor }) => {
	return (
		<Link href={`product/${name}`}>
			<motion.article className={`${bgColor}`} layoutId={`article_${name}`}>
				<div className={`${bgColor} h-full w-full flex items-center justify-center`}>
					<motion.img className="image-card h-4/6" src={image} alt={name} layoutId={name}/>
				</div>
			</motion.article>
		</Link>
	)
}

