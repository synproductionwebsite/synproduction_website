"use client";

export default function Footer() {
  return (
    <footer
      className="relative text-white py-4 bg-[url('/img/bg/footer_bg.png')] bg-cover bg-center"
    >
      {/* Overlay semi-transparent */}
      <div className="absolute inset-0 bg-black/20 shadow-lg"></div>

      {/* Contenu placé au-dessus de l'overlay */}
      <div className="relative container mx-auto text-right py-3 text-l lg:text-2xl">
        <div className=" flex my-2 justify-end">
          <div className="mx-2 flex">
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
        <p className="mr-4">&copy; 2025 SYN PRODUCTION. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
