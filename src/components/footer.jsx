function Footer() {
    return <footer>
        <div className="footer-copyright">
            © {new Date().getFullYear()} LFoPi
        </div>
        <a className="footer-link" href="https://github.com/L4P/ReactSPA" target="_blank"> Repository </a>
    </footer>
}
export { Footer };