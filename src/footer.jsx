function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16 border-t border-gray-700">
      <div className="flex justify-between items-center px-6 py-4 max-w-full">
        <p className="text-sm">
          © {new Date().getFullYear()} 007. All rights reserved.
        </p>
        <p className="text-sm text-gray-500">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
