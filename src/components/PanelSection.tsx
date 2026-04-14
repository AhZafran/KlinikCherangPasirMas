import { Heart } from "lucide-react";
import Image from "next/image";

const panels = [
  { name: "MiCARE", image: "/panel/MICARE.webp" },
  { name: "Health Connect", image: "/panel/HC1.webp" },
  { name: "MedNefits", image: "/panel/MEDNEFITS1.webp" },
  { name: "IHP", image: "/panel/IHP.avif" },
  { name: "eMAS", image: "/panel/EMAS1.webp" },
  { name: "PMCare", image: "/panel/PMCARE.webp" },
  { name: "MedKad", image: "/panel/MEDKAD1.webp" },
  { name: "Etiqa", image: "/panel/ETIQA1.webp" },
  { name: "Sehati", image: "/panel/sehati.webp" },
];

export default function PanelSection() {
  return (
    <section
      id="panel"
      className="py-20 sm:py-28 bg-gradient-to-b from-primary/10 to-primary/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-foreground text-sm font-semibold mb-4">
            Panel
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Panel Klinik Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami menerima panel insurans dan korporat yang berikut. Hubungi kami
            untuk maklumat lanjut.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {panels.map((panel) => (
            <div
              key={panel.name}
              className="bg-white rounded-xl shadow-sm flex items-center justify-center p-6 aspect-[4/3] hover:shadow-md transition-shadow"
            >
              <Image
                src={panel.image}
                alt={panel.name}
                width={160}
                height={80}
                className="object-contain max-h-16"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="bg-white rounded-full px-6 py-3 shadow-sm flex items-center gap-3">
            <Heart className="h-5 w-5 text-primary fill-primary" />
            <p className="text-sm text-muted-foreground">
              Tidak pasti sama ada panel anda diterima? Hubungi kami untuk
              pengesahan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
