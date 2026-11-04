import { InquiryFormData } from "./validation";
import { accommodations } from "../data/accommodation";

export function formatWhatsAppNumber(rawNumber?: string): string {
  if (!rawNumber) return "";
  // Strip spaces, dashes, parentheses, plus signs
  return rawNumber.replace(/[\s\-\(\)\+]/g, "");
}

export function buildWhatsAppMessage(
  data: InquiryFormData,
  locale: "en" | "id" = "en"
): string {
  const selectedAcc = accommodations.find(
    (a) => a.slug === data.accommodationSlug
  );
  const suiteName = selectedAcc ? selectedAcc.name[locale] : (locale === "id" ? "Semua Pilihan" : "Any Available");

  if (locale === "id") {
    return [
      `Halo Concierge *Nayana Villa, Bali*,`,
      ``,
      `Saya ingin mengajukan pertanyaan ketersediaan dan reservasi untuk:`,
      `• *Pilihan Suite:* ${suiteName}`,
      `• *Check-in:* ${data.checkIn}`,
      `• *Check-out:* ${data.checkOut}`,
      `• *Jumlah Tamu:* ${data.guests} orang`,
      ``,
      `*Data Kontak Pemohon:*`,
      `• *Nama:* ${data.name}`,
      `• *Email:* ${data.email}`,
      data.phone ? `• *No. Telepon:* ${data.phone}` : null,
      data.message ? `• *Catatan Tambahan:* ${data.message}` : null,
      ``,
      `Mohon informasikan ketersediaan dan rincian penawarannya. Terima kasih!`,
      `_(Inquiry via nayanavilla.demo)_`,
    ]
      .filter((line) => line !== null)
      .join("\n");
  }

  return [
    `Hello Concierge *Nayana Villa, Bali*,`,
    ``,
    `I would like to inquire about suite availability and rates for:`,
    `• *Suite:* ${suiteName}`,
    `• *Check-in:* ${data.checkIn}`,
    `• *Check-out:* ${data.checkOut}`,
    `• *Guests:* ${data.guests} guest(s)`,
    ``,
    `*Guest Contact Details:*`,
    `• *Name:* ${data.name}`,
    `• *Email:* ${data.email}`,
    data.phone ? `• *Phone:* ${data.phone}` : null,
    data.message ? `• *Special Note:* ${data.message}` : null,
    ``,
    `Please kindly advise on rates and availability. Thank you!`,
    `_(Inquiry via nayanavilla.demo)_`,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export function getWhatsAppUrl(
  data: InquiryFormData,
  locale: "en" | "id" = "en"
): string {
  const rawNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6287743447062";
  const cleanNumber = formatWhatsAppNumber(rawNumber);
  const message = buildWhatsAppMessage(data, locale);
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}
