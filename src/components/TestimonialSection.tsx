import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmad Faizal",
    text: "Perkhidmatan sangat baik. Doktor sangat mesra dan terangkan dengan jelas tentang keadaan saya. Masa menunggu pun tidak lama.",
    rating: 5,
  },
  {
    name: "Siti Nurhaliza",
    text: "Saya buat pemeriksaan kesihatan di sini, semuanya tersusun dan profesional. Staf juga sangat membantu. Sangat berpuas hati!",
    rating: 5,
  },
  {
    name: "Mohd Hafiz",
    text: "Rawatan sakit lutut saya di sini sangat berkesan. Selepas beberapa sesi, keadaan lutut saya jauh lebih baik. Terima kasih doktor!",
    rating: 5,
  },
  {
    name: "Nur Aisyah",
    text: "Program diet yang disediakan sangat membantu saya menurunkan berat badan dengan cara yang sihat. Doktor sentiasa memberi sokongan.",
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <section id="testimoni" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Apa Kata Pesakit Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kepuasan pesakit adalah keutamaan kami. Berikut adalah pengalaman
            mereka bersama kami.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="hover:shadow-lg transition-shadow"
            >
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-foreground/80 leading-relaxed mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">Pesakit</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
