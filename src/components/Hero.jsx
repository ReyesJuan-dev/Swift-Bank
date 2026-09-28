export default function Hero() {
    return (
    <section className="flex min-h-[520px] items-center justify-between px-10 py-16">
      
      {/* Left side */}
      <div className="max-w-xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#02066F]">
          Simple. Secure. Modern.
        </p>

        <h1 className="text-5xl font-bold leading-tight text-gray-900">
          Banking built around your life.
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Manage your money, track your spending, and move funds securely
          from one simple dashboard.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-lg bg-[#02066F] px-6 py-3 font-semibold hover:bg-blue-800 text-[#D4AF37]">
            Open Account
          </button>

          <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-800 hover:bg-gray-100">
            Sign In
          </button>
        </div>
      </div>

      {/* Right side */}
      <div className="w-[380px] rounded-2xl bg-white p-7 shadow-xl">
        <p className="text-sm text-gray-500">Available Balance</p>

        <h2 className="mt-2 text-4xl font-bold text-gray-900">
          $8,420.52
        </h2>

        <div className="mt-8">
          <p className="text-sm font-semibold text-gray-700">
            Recent Activity
          </p>

          <div className="mt-4 space-y-4">
            <div className="flex justify-between">
              <span>Payroll</span>
              <span className="font-semibold text-green-600">
                +$2,450.00
              </span>
            </div>

            <div className="flex justify-between">
              <span>Groceries</span>
              <span className="font-semibold text-gray-800">
                -$84.32
              </span>
            </div>

            <div className="flex justify-between">
              <span>Streaming</span>
              <span className="font-semibold text-gray-800">
                -$15.49
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}