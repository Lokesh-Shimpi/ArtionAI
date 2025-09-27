
export function Footer() {
  return (
    <footer className="border-t border-gray-800 py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center space-x-1 mb-6 md:mb-0">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMgMkwzIDEzTDEyIDEzTDExIDIyTDIxIDExTDEyIDExTDEzIDJaIiBzdHJva2U9IiM2MEE1RkEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPjwvc3ZnPg=="
                alt="ArtionAI Logo"
                className="w-6 h-6 relative z-10"
              />
            </div>
            <span className="text-2xl font-bold text-white">ArtionAI</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a
              href="#features"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#howitworks"
              className="text-gray-400 hover:text-white transition-colors"
            >
              How it works
              </a>
            <a
              href="#faq"
              className="text-gray-400 hover:text-white transition-colors"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 ArtionAI. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
}
