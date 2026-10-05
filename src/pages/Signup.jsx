import { useEffect, useState } from "react";

export default function Signup() {
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowForm(true);
        }, 150);

        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="min-h-screen bg-[#02066F] flex items-end justify-center overflow-hidden">
            <div
                className={`
                w-full
                bg-white
                rounded-t-3xl
                px-6
                py-10
                md:px-12
                md:py-14
                transition-all
                duration-700
                ease-out
                ${showForm
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                    }
                `}
            >

                <div className="max-w-md mx-auto">
                    <p className="text-sm font-semibold text-blue-700 mb-2">
                        Swift Bank
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
                        Open your account
                    </h1>

                    <p className="text-neutral-600 mb-9">
                        Create your fictional Swift Bank Account to Continue.
                    </p>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text neutral-700 mb-2">
                                First name
                            </label>

                            <input
                                type="text"
                                className="w-full border border-neural-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Juan"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text neutral-700 mb-2">
                                Last name
                            </label>

                            <input
                                type="text"
                                className="w-full border border-neutral-300 rounded-xl px-4 py3 outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Reyes"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                className="w-full border border-neutral-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="you@example.com"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-700 text-white font-semibold py-3 rounded-xl hover:bg-blue-800 transition-colors"
                        >
                            Continue
                        </button>
                    </form>
                    <p className="text-xs text-neutral-500 mt-6">
                        Swift Bank is a fictional bank created for a web development project. No real banking services are provided.
                    </p>
                </div>
            </div>
        </main>
    )
}