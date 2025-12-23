export default function Footer() {
    return (
        <footer className="w-full py-6 px-4 border-t border-white/10 bg-black text-center text-gray-400 text-sm">
            <p>
                &copy; {new Date().getFullYear()} Akhil Bejjanki. Built with Next.js &
                Tailwind CSS.
            </p>
        </footer>
    );
}
