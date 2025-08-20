export async function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
            <a href="/" className="text-white text-lg font-semibold">
                Online Library
            </a>
        </div>
        <div className="flex space-x-4">
            <a href="/" className="text-gray-300 hover:text-white">Home</a>
            <a href="/books" className="text-gray-300 hover:text-white">Books</a>
            <a href="/about" className="text-gray-300 hover:text-white">About</a>
        </div>
      </div>
    </nav>
  );
}