import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-zinc-950 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Now available for everyone
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight">
              Build faster with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                modern tools
              </span>
            </h1>
            <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0">
              Streamline your workflow with our powerful platform. Ship products
              faster, collaborate seamlessly, and scale with confidence.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-zinc-900 dark:bg-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
              >
                Get started free
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-zinc-500 dark:text-zinc-500">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Free 14-day trial
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                No credit card required
              </div>
            </div>
          </div>

          {/* Right side - Graphic */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>

              {/* Main graphic card */}
              <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8">
                {/* Mock dashboard */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                      <div>
                        <div className="h-4 w-24 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
                        <div className="h-3 w-16 bg-zinc-100 dark:bg-zinc-800 rounded mt-1"></div>
                      </div>
                    </div>
                    <div className="h-8 w-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <span className="text-green-600 dark:text-green-400 text-xs font-medium">Active</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-4">
                        <div className="h-3 w-12 bg-zinc-200 dark:bg-zinc-700 rounded mb-2"></div>
                        <div className="h-6 w-16 bg-zinc-300 dark:bg-zinc-600 rounded"></div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-4">
                    <div className="flex items-end justify-between h-32">
                      {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                        <div
                          key={i}
                          className="w-6 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t"
                          style={{ height: `${h}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-3 border border-zinc-200 dark:border-zinc-700">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">Growth</div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-white">+24%</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-3 border border-zinc-200 dark:border-zinc-700">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white dark:border-zinc-800"></div>
                    ))}
                  </div>
                  <span className="text-xs text-zinc-600 dark:text-zinc-400">+2.5k users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
