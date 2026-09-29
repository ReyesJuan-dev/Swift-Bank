import FeatureCard from "./FeatureCard";

export default function Features() {
  const featuresList = [
    {
      title: "Smart saving Goals",
      text: "Users create goals like “Vacation,” “Emergency Fund,” or “New Car,” and the bank automatically recommends how much to save each week/month based on their income and spending.",
      featured: false,
    },
    {
      title: "Instant Money Insight",
      text: "A clean dashboard shows cash flow, upcoming bills, spending trends, and how much money is realistically “safe to spend” before the next paycheck.",
      featured: false,
    },
    {
      title: "Subscription & Bill Watch",
      text: "Automatically identifies recurring charges, shows how much subscriptions cost per month/year, and alerts users when a bill increases or an unusual recurring charge appears.",
      featured: false,
    },
    {
      title: "AI spending Catergorizer",
      text: "AI automatically organizes monthly transactions into categories such as Food, Transportation, Shopping, Entertainment, Bills, and Subscriptions. Users can ask questions like “Where did most of my money go this month?” or “How much did I spend eating out compared with last month?”",
      featured: true,
    },
  ];

  return (
    <section id="features" className="overflow-hidden py-10">
      <div className="feature-track flex gap-6 w-max">
        <div className="flex gap-6 pr-6">
          {featuresList.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              text={feature.text}
              featured={feature.featured}
            />
          ))}
        </div>

        <div className="flex gap-6 pr-6" aria-hidden="true">
          {featuresList.map((feature) => (
            <FeatureCard
              key={`${feature.title}-duplicate`}
              title={feature.title}
              text={feature.text}
              featured={feature.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
