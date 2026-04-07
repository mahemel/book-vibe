import React from "react";

const Errorpage = () => {
    return (
        <div class="min-h-screen flex items-center justify-center px-4">
            <div class="text-center space-y-6">
                <h1 class="text-8xl font-extrabold text-primary">404</h1>

                <h2 class="text-2xl md:text-3xl font-semibold">
                    Oops! Page not found
                </h2>
                <p class="text-base-content/70 max-w-md mx-auto">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                <div class="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="/" class="btn btn-primary">
                        🏠 Go Home
                    </a>
                    <button onclick="history.back()" class="btn btn-outline">
                        🔙 Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Errorpage;
