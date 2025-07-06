"use client";

export default function Footer() {
    return (
        <footer
            className="text-white py-4 bg-[url('/img/bg/footer_bg.png')] bg-cover bg-center"
        >
            <div className=""> {/* optionnel : overlay color semi-transparent */}
                <div className="container mx-auto text-center">
                    <div className="mt-2 flex justify-center items-center mb-2">
                        <div className="mx-2 flex items-center">
                            <p>WEBSITE</p>
                            <a 
                                href="https://pelle-servan.fr/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-[#1F1F1F] hover:text-white mx-2"
                            >
                                Pellé Servan
                            </a>
                        </div>
                    </div>
                    <p>&copy; 2025 SYN PRODUCTION. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
