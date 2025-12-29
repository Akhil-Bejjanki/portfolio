export default function Footer() {
    return (
        <footer className="w-full py-6 px-4 border-t border-white/10 bg-black text-center text-gray-400 text-sm">
            <p className="flex flex-col md:flex-row justify-center items-center gap-2">
                <span>&copy; {new Date().getFullYear()} Akhil Bejjanki.</span>
                <span className="hidden md:inline text-gray-600">|</span>
                <a href="mailto:akhilbejjanki30@gmail.com" className="hover:text-blue-400 transition-colors">akhilbejjanki30@gmail.com</a>
            </p>
        </footer>
    );
}
