export function FooterA(){
    const añoActual = new Date().getFullYear();
    return (
        <div className="content_footer-a">
            <footer>
                <p>Dysam &copy;{añoActual}</p>
            </footer>
        </div>
    )
}