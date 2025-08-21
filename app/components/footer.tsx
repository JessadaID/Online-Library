export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Online Library. All rights reserved.</p>
        <p className="text-sm">Developed by Your Name</p>
      </div>
    </footer>
  );
}