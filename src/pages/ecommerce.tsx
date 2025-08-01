import { useState } from "react";
import { Links } from "./links";
import { ShoppingCart } from "./shopping-cart";

const products = [
	{
		id: 1,
		name: "Basic Tee",
		imageSrc:
			"https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
		imageAlt: "Front of men's Basic Tee in black.",
		price: "$35",
		color: "Black",
	},
	{
		id: 2,
		name: "Basic Tee",
		imageSrc:
			"https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
		imageAlt: "Front of men's Basic Tee in white.",
		price: "$35",
		color: "Aspen White",
	},
	{
		id: 3,
		name: "Basic Tee",
		imageSrc:
			"https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
		imageAlt: "Front of men's Basic Tee in dark gray.",
		price: "$35",
		color: "Charcoal",
	},
	{
		id: 4,
		name: "Artwork Tee",
		imageSrc:
			"https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
		imageAlt:
			"Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
		price: "$35",
		color: "Iso Dots",
	},
	{
		id: 11,
		name: "Basic Tee",
		imageSrc:
			"https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
		imageAlt: "Front of men's Basic Tee in black.",
		price: "$35",
		color: "Black",
	},
	{
		id: 12,
		name: "Basic Tee",
		imageSrc:
			"https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
		imageAlt: "Front of men's Basic Tee in white.",
		price: "$35",
		color: "Aspen White",
	},
	{
		id: 13,
		name: "Basic Tee",
		imageSrc:
			"https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
		imageAlt: "Front of men's Basic Tee in dark gray.",
		price: "$35",
		color: "Charcoal",
	},
	{
		id: 14,
		name: "Artwork Tee",
		imageSrc:
			"https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
		imageAlt:
			"Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
		price: "$35",
		color: "Iso Dots",
	},
];

export function Ecommerce() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Links />
			<ShoppingCart isOpen={open} />
			<div className="mx-auto max-w-4xl text-center">
				<p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-500 sm:text-6xl">
					E-commerce
				</p>
			</div>

			<div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
				<h2 className="text-2xl font-bold tracking-tight text-gray-400 text-center">
					Lojas de Equipamentos para celulares.
				</h2>
				<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{products.map((product) => (
						<div key={product.id} className="group relative">
							<img
								alt={product.imageAlt}
								src={product.imageSrc}
								className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
							/>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-gray-500">
										<button
											className="link"
											onClick={() => {
												setOpen(true);
											}}
										>
											<span aria-hidden="true" className="absolute inset-0" />
											{product.name}
										</button>
									</h3>
									<p className="mt-1 text-sm text-gray-500">{product.color}</p>
								</div>
								<p className="text-sm font-medium text-gray-500">
									{product.price}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
