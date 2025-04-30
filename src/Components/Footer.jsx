import React from 'react'

const Footer = () => {
    return (
        <div>


            <footer className="bg-[#232536] text-white py-10 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Logo & About */}
                    <div>
                        <h1 className="text-2xl font-bold mb-3">CarMania</h1>
                        <p className="text-gray-400 text-sm">
                            Your one-stop destination for car reviews, tips, and modification ideas.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                            <li><a href="#" className="hover:text-white">Reviews</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact / Social */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3">Connect with us</h2>
                        <p className="text-gray-400 text-sm mb-3">Email: support@carmania.com</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-blue-500">Facebook</a>
                            <a href="#" className="hover:text-blue-400">Twitter</a>
                            <a href="#" className="hover:text-pink-500">Instagram</a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} CarMania. All rights reserved.
                </div>
            </footer>

        </div>
    )
}

export default Footer
