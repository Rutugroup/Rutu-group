import Link from "next/link";

export default function Directors() {
  return (
    <section className="relative w-full py-24 bg-stone-100">
      {" "}
      {/* Changed background to light gray */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Meet Our Directors
        </h2>
        <p className="text-xl text-stone-700 max-w-2xl mx-auto mb-8">
          The visionaries behind Rutu Group&apos;s 45 years of excellence in
          real estate development
        </p>

        <Link
          href="/directors"
          className="inline-flex items-center justify-center px-8 py-3 bg-amber-500 text-white rounded-md text-lg font-medium transition-colors hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-stone-100"
        >
          View Directors
        </Link>
      </div>
    </section>
  );
}
