import Link from "next/link";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started and personal projects.",
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "48-hour support response",
      "1GB storage",
      "Community access",
    ],
    cta: "Get started",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Best for growing teams and professional use.",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "100GB storage",
      "Team collaboration",
      "Custom integrations",
      "API access",
    ],
    cta: "Start free trial",
    href: "/signup?plan=pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs.",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Dedicated support",
      "Custom contracts",
      "SLA guarantee",
      "SSO & SAML",
      "Advanced security",
      "On-premise option",
    ],
    cta: "Contact sales",
    href: "/contact",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-32 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 ${
                tier.highlighted
                  ? "bg-zinc-900 dark:bg-white ring-4 ring-blue-500 scale-105"
                  : "bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3
                  className={`text-lg font-semibold ${
                    tier.highlighted
                      ? "text-white dark:text-zinc-900"
                      : "text-zinc-900 dark:text-white"
                  }`}
                >
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span
                    className={`text-4xl font-bold ${
                      tier.highlighted
                        ? "text-white dark:text-zinc-900"
                        : "text-zinc-900 dark:text-white"
                    }`}
                  >
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span
                      className={
                        tier.highlighted
                          ? "text-zinc-400 dark:text-zinc-500"
                          : "text-zinc-500 dark:text-zinc-400"
                      }
                    >
                      {tier.period}
                    </span>
                  )}
                </div>
                <p
                  className={`mt-2 text-sm ${
                    tier.highlighted
                      ? "text-zinc-400 dark:text-zinc-500"
                      : "text-zinc-600 dark:text-zinc-400"
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${
                        tier.highlighted
                          ? "text-blue-400"
                          : "text-green-500"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      className={`text-sm ${
                        tier.highlighted
                          ? "text-zinc-300 dark:text-zinc-600"
                          : "text-zinc-600 dark:text-zinc-400"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={`mt-8 block w-full py-3 px-4 text-center text-sm font-medium rounded-lg transition-colors ${
                  tier.highlighted
                    ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    : "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
