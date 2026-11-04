import { test, describe } from "node:test";
import assert from "node:assert";
import { inquirySchema, getTodayDateString } from "../src/lib/validation";
import { formatWhatsAppNumber, buildWhatsAppMessage } from "../src/lib/whatsapp";

describe("Booking Inquiry Schema Validation", () => {
  const today = getTodayDateString();
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];
  const nextWeek = new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0];

  test("valid inquiry data passes validation", () => {
    const validData = {
      checkIn: tomorrow,
      checkOut: nextWeek,
      guests: 2,
      accommodationSlug: "shoreline-sanctuary",
      name: "Eleanor Vance",
      email: "eleanor@example.com",
      phone: "+6281234567890",
      message: "Quiet room preference",
      privacyAccepted: true,
    };

    const result = inquirySchema.safeParse(validData);
    assert.strictEqual(result.success, true);
  });

  test("rejects check-in date in the past", () => {
    const pastData = {
      checkIn: "2020-01-01",
      checkOut: tomorrow,
      guests: 2,
      name: "John Doe",
      email: "john@example.com",
      privacyAccepted: true,
    };

    const result = inquirySchema.safeParse(pastData);
    assert.strictEqual(result.success, false);
    assert.match(result.error!.issues[0].message, /past/i);
  });

  test("rejects check-out equal to or before check-in", () => {
    const invalidDates = {
      checkIn: tomorrow,
      checkOut: tomorrow,
      guests: 2,
      name: "John Doe",
      email: "john@example.com",
      privacyAccepted: true,
    };

    const result = inquirySchema.safeParse(invalidDates);
    assert.strictEqual(result.success, false);
  });

  test("rejects guest count of 0 or greater than 20", () => {
    const zeroGuests = {
      checkIn: tomorrow,
      checkOut: nextWeek,
      guests: 0,
      name: "John Doe",
      email: "john@example.com",
      privacyAccepted: true,
    };
    assert.strictEqual(inquirySchema.safeParse(zeroGuests).success, false);

    const excessiveGuests = { ...zeroGuests, guests: 25 };
    assert.strictEqual(inquirySchema.safeParse(excessiveGuests).success, false);
  });

  test("rejects missing privacy acknowledgement", () => {
    const missingPrivacy = {
      checkIn: tomorrow,
      checkOut: nextWeek,
      guests: 2,
      name: "John Doe",
      email: "john@example.com",
      privacyAccepted: false,
    };

    const result = inquirySchema.safeParse(missingPrivacy);
    assert.strictEqual(result.success, false);
  });
});

describe("WhatsApp Message Generator", () => {
  const sampleData = {
    checkIn: "2026-11-10",
    checkOut: "2026-11-15",
    guests: 2,
    accommodationSlug: "shoreline-sanctuary",
    name: "Eleanor Vance",
    email: "eleanor@example.com",
    phone: "087743447062",
    message: "Honeymoon setup",
    privacyAccepted: true as const,
  };

  test("formats international number cleanly", () => {
    assert.strictEqual(formatWhatsAppNumber("+62 877-4344-7062"), "6287743447062");
    assert.strictEqual(formatWhatsAppNumber("0877 4344 7062"), "087743447062");
  });

  test("generates proper English WhatsApp message", () => {
    const msg = buildWhatsAppMessage(sampleData, "en");
    assert.match(msg, /Nayana Villa, Bali/);
    assert.match(msg, /Eleanor Vance/);
    assert.match(msg, /2026-11-10/);
    assert.match(msg, /2026-11-15/);
    assert.match(msg, /2 guest\(s\)/);
  });

  test("generates proper Indonesian WhatsApp message", () => {
    const msg = buildWhatsAppMessage(sampleData, "id");
    assert.match(msg, /Halo Concierge/);
    assert.match(msg, /Eleanor Vance/);
    assert.match(msg, /2 orang/);
  });
});

