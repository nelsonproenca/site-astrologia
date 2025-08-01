import { CheckIcon } from "lucide-react";
import { Links } from "./links";

interface Tier {
	name: string;
	id: string;
	href: string;
	priceMonthly: string;
	description: string;
	features: string[];
	featured: boolean;
}

const tiers: Tier[] = [
	{
		name: "Avançado",
		id: "tier-advanced",
		href: "#",
		priceMonthly: "$229",
		description:
			"The perfect plan if you're just getting started with our product.",
		features: [
			"25 products",
			"Up to 10,000 subscribers",
			"Advanced analytics",
			"24-hour support response time",
			"",
			"",
		],
		featured: false,
	},
	{
		name: "Basico",
		id: "tier-basic",
		href: "#",
		priceMonthly: "$99",
		description: "Dedicated support and infrastructure for your company.",
		features: [
			"Unlimited products",
			"Unlimited subscribers",
			"Advanced analytics",
			"Dedicated support representative",
			"Marketing automations",
			"Custom integrations",
		],
		featured: true,
	},
	{
		name: "Intermediario",
		id: "tier-medium",
		href: "#",
		priceMonthly: "$199",
		description: "Dedicated support and infrastructure for your company.",
		features: [
			"50 products",
			"Up to 100,000 subscribers",
			"Advanced analytics",
			"24-hour support response time",
			"Marketing automations",
			"Custom integrations",
		],
		featured: false,
	},
];

function classNames(...classes: (string | false | null | undefined)[]): string {
	return classes.filter(Boolean).join(" ");
}

export function Planos() {
	return (
		<div>
			<Links />
			<div className="mx-auto max-w-4xl text-center">
				<p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-500 sm:text-6xl">
					Planos
				</p>
			</div>
			<p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
				Escolha o seu plano para contratar nossos serviços de astrologia.
			</p>
			<div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-5 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
				{tiers.map((tier) => (
					<div
						key={tier.id}
						className={classNames(
							tier.featured
								? "relative bg-gray-700 shadow-2xl rounded-t-3xl"
								: "bg-white/60 sm:mx-8 lg:mx-0",
							"rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10",
						)}
					>
						<h3
							id={tier.id}
							className={classNames(
								tier.featured ? "text-indigo-400" : "text-indigo-600",
								"text-base/7 font-semibold",
							)}
						>
							{tier.name}
						</h3>
						<p className="mt-4 flex items-baseline gap-x-2">
							<span
								className={classNames(
									tier.featured ? "text-white" : "text-gray-900",
									"text-5xl font-semibold tracking-tight",
								)}
							>
								{tier.priceMonthly}
							</span>
							<span
								className={classNames(
									tier.featured ? "text-gray-400" : "text-gray-500",
									"text-base",
								)}
							>
								/month
							</span>
						</p>
						<p
							className={classNames(
								tier.featured ? "text-gray-300" : "text-gray-600",
								"mt-6 text-base/7",
							)}
						>
							{tier.description}
						</p>
						<ul
							role="list"
							className={classNames(
								tier.featured ? "text-gray-300" : "text-gray-600",
								"mt-8 space-y-3 text-sm/6 sm:mt-10",
							)}
						>
							{tier.features.map((feature) => (
								<li key={feature} className="flex gap-x-3">
									{feature ? (
										<CheckIcon
											aria-hidden="true"
											className={classNames(
												tier.featured ? "text-indigo-400" : "text-indigo-600",
												"h-6 w-5 flex-none",
											)}
										/>
									) : (
										<p>&nbsp;</p>
									)}
									{feature}
								</li>
							))}
						</ul>
						<a
							href={tier.href}
							aria-describedby={tier.id}
							className={classNames(
								tier.featured
									? "bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500"
									: "text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600",
								"mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10",
							)}
						>
							Get started today
						</a>
					</div>
				))}
			</div>
		</div>
	);
}
