function Header() {
  return (
    <nav>
      <div className="flex justify-center items-center text-sm relative">
        <div className="fixed top-5 z-[9999]">
          <div className="border border-gray-500 rounded-full flex p-[1px] justify-center backdrop-blur-lg">
            <a href="#" className="px-4 py-1 text-neutral-100">Home</a>
            <a href="#" className="px-4 py-1 text-neutral-100">Projects</a>
            <a href="#" className="px-4 py-1 text-neutral-100">About</a>
            <a href="#" className="px-4 py-1 bg-neutral-100 rounded-full">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;
