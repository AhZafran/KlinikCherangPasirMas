export const BRAND = {
  name: "Klinik Primer Cherang Pasir Mas",
  shortName: "Primer Cherang",
  tagline: "Pusat Rawatan Saraf, Sendi, Post-Stroke dan Diet Klinikal",
  description:
    "Klinik Primer Cherang Pasir Mas menawarkan perkhidmatan kesihatan berkualiti tinggi termasuk rawatan sakit lutut, saraf, sendi, kebas, slipped disc, pemulihan selepas strok, program diet klinikal dan pembedahan kecil.",

  logo: {
    path: "/logo/Logoprimer.svg",
    alt: "Logo Klinik Primer Cherang",
  },

  contact: {
    whatsapp: "60137062400",
    whatsappMessage:
      "Hai, saya ingin bertanya tentang perkhidmatan di Klinik Primer Cherang Pasir Mas.",
    phone: "013-706 2400",
    phoneRaw: "+60137062400",
    email: "hq@primercherang.my",
    address: {
      street: "PT 8419, Tingkat Bawah, Taman Semasa",
      city: "Bandar Baru Pasir Mas",
      postcode: "17070",
      state: "Kelantan",
      country: "Malaysia",
      full: "PT 8419, Tingkat Bawah, Taman Semasa, Bandar Baru Pasir Mas, 17070 Pasir Mas, Kelantan",
    },
    googleMapsUrl:
      "https://maps.google.com/?q=Klinik+Primer+Cherang+Pasir+Mas",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.9171443935934!2d102.0956832!3d6.0061151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31b6a16254b60a19%3A0xdf3f6a02fc620fe!2sPrimer%20Cherang%20Clinic%20Pasir%20Mas!5e0!3m2!1sen!2smy!4v1776104004748!5m2!1sen!2smy",
  },

  operatingHours: {
    daily: "8:00 PG - 10:00 MLM",
    days: "Isnin - Ahad",
  },

  registration: {
    number: "1060649-W",
    kkliu: "KKLIU 3109/EXP 31.12.2027",
  },

  social: {
    facebook: "https://www.facebook.com/primercherang",
    instagram: "https://www.instagram.com/primercherang",
  },

  url: "https://klinikprimerpasirmas.my",
} as const;

export function getWhatsAppUrl(): string {
  return "https://wa.link/0y25bg";
}
