"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { accommodations } from "@/data/accommodation";
import {
  inquirySchema,
  InquiryFormData,
  getTodayDateString,
} from "@/lib/validation";
import { getWhatsAppUrl, buildWhatsAppMessage } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Users,
  Home,
  User,
  Mail,
  Phone,
  MessageSquare,
  ShieldAlert,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Edit2,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function InquiryForm() {
  const searchParams = useSearchParams();
  const locale = useLocale() as "en" | "id";
  const t = useTranslations("booking");

  const initialSuite = searchParams.get("suite") || "";
  const initialCheckIn = searchParams.get("checkIn") || "";
  const initialCheckOut = searchParams.get("checkOut") || "";
  const initialGuests = searchParams.get("guests") || "2";

  // Form state
  const [formData, setFormData] = React.useState<Partial<InquiryFormData>>({
    accommodationSlug: initialSuite,
    checkIn: initialCheckIn,
    checkOut: initialCheckOut,
    guests: Number(initialGuests) || 2,
    name: "",
    email: "",
    phone: "",
    message: "",
    privacyAccepted: false as unknown as true,
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [showSummary, setShowSummary] = React.useState(false);
  const [validatedData, setValidatedData] = React.useState<InquiryFormData | null>(
    null
  );

  const todayStr = getTodayDateString();

  const handleChange = (
    field: keyof InquiryFormData,
    value: string | number | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for field on change
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = inquirySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as string;
        if (!fieldErrors[path]) {
          fieldErrors[path] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setValidatedData(result.data);
    setShowSummary(true);
  };

  const handleOpenWhatsApp = () => {
    if (!validatedData) return;
    const url = getWhatsAppUrl(validatedData, locale);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const selectedAccommodation = accommodations.find(
    (a) => a.slug === (validatedData?.accommodationSlug || formData.accommodationSlug)
  );

  return (
    <div className="max-w-3xl mx-auto">
      {!showSummary ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl border border-neutral-200/80 p-6 sm:p-10 shadow-sm space-y-8"
          noValidate
        >
          {/* Section 1: Stay Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
              <Home className="w-4 h-4 text-ocean-600" />
              <span>1. Stay Preferences</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Suite Selection */}
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-medium text-neutral-700">
                  {t("fields.accommodation")}
                </label>
                <div className="relative">
                  <select
                    value={formData.accommodationSlug || ""}
                    onChange={(e) =>
                      handleChange("accommodationSlug", e.target.value)
                    }
                    className="w-full h-11 px-3.5 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-ocean-500 cursor-pointer"
                  >
                    <option value="">
                      {locale === "id"
                        ? "-- Pilihan Bebas / Tergantung Ketersediaan --"
                        : "-- Any Available Suite --"}
                    </option>
                    {accommodations.map((acc) => (
                      <option key={acc.slug} value={acc.slug}>
                        {acc.name[locale]} ({acc.maxGuests} guests max)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Check-In */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-700">
                  {t("fields.check_in")} *
                </label>
                <div className="relative">
                  <input
                    type="date"
                    min={todayStr}
                    value={formData.checkIn || ""}
                    onChange={(e) => handleChange("checkIn", e.target.value)}
                    className={cn(
                      "w-full h-11 px-3.5 rounded-xl border text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-ocean-500",
                      errors.checkIn ? "border-red-500" : "border-neutral-300"
                    )}
                  />
                </div>
                {errors.checkIn && (
                  <p className="text-xs text-red-600 font-medium">{errors.checkIn}</p>
                )}
              </div>

              {/* Check-Out */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-700">
                  {t("fields.check_out")} *
                </label>
                <div className="relative">
                  <input
                    type="date"
                    min={formData.checkIn || todayStr}
                    value={formData.checkOut || ""}
                    onChange={(e) => handleChange("checkOut", e.target.value)}
                    className={cn(
                      "w-full h-11 px-3.5 rounded-xl border text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-ocean-500",
                      errors.checkOut ? "border-red-500" : "border-neutral-300"
                    )}
                  />
                </div>
                {errors.checkOut && (
                  <p className="text-xs text-red-600 font-medium">{errors.checkOut}</p>
                )}
              </div>

              {/* Guests */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-medium text-neutral-700">
                  {t("fields.guests")} *
                </label>
                <div className="relative">
                  <select
                    value={formData.guests || 2}
                    onChange={(e) =>
                      handleChange("guests", parseInt(e.target.value, 10))
                    }
                    className="w-full h-11 px-3.5 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-ocean-500 cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.guests && (
                  <p className="text-xs text-red-600 font-medium">{errors.guests}</p>
                )}
              </div>
            </div>
          </div>

          {/* Section 2: Contact Details */}
          <div className="space-y-4 pt-6 border-t border-neutral-100">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
              <User className="w-4 h-4 text-ocean-600" />
              <span>2. Guest Details</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-medium text-neutral-700">
                  {t("fields.name")} *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Eleanor Vance"
                  value={formData.name || ""}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={cn(
                    "w-full h-11 px-3.5 rounded-xl border text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-ocean-500",
                    errors.name ? "border-red-500" : "border-neutral-300"
                  )}
                />
                {errors.name && (
                  <p className="text-xs text-red-600 font-medium">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-700">
                  {t("fields.email")} *
                </label>
                <input
                  type="email"
                  placeholder="eleanor@example.com"
                  value={formData.email || ""}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={cn(
                    "w-full h-11 px-3.5 rounded-xl border text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-ocean-500",
                    errors.email ? "border-red-500" : "border-neutral-300"
                  )}
                />
                {errors.email && (
                  <p className="text-xs text-red-600 font-medium">{errors.email}</p>
                )}
              </div>

              {/* Optional Phone */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-700">
                  {t("fields.phone")}
                </label>
                <input
                  type="tel"
                  placeholder="+62 812 3456 7890"
                  value={formData.phone || ""}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-neutral-300 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-ocean-500"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-medium text-neutral-700">
                  {t("fields.message")}
                </label>
                <textarea
                  rows={3}
                  placeholder="Any arrival preferences, dietary notes, or questions..."
                  value={formData.message || ""}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-neutral-300 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-ocean-500 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Privacy & Demo Notice Checkbox */}
          <div className="space-y-2 pt-4 border-t border-neutral-100">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={Boolean(formData.privacyAccepted)}
                onChange={(e) =>
                  handleChange("privacyAccepted", e.target.checked)
                }
                className="mt-1 w-4 h-4 rounded border-neutral-300 text-ocean-600 focus:ring-ocean-500 cursor-pointer"
              />
              <span className="text-xs text-neutral-600 leading-normal">
                {t("fields.privacy_label")}
              </span>
            </label>
            {errors.privacyAccepted && (
              <p className="text-xs text-red-600 font-medium">
                {errors.privacyAccepted}
              </p>
            )}
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ocean-600 hover:bg-ocean-700 text-white font-semibold text-sm tracking-wide uppercase transition-all shadow-md active:scale-[0.98]"
            >
              <span>{t("actions.submit")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      ) : (
        /* Step 2: Summary Review Card */
        <div className="bg-white rounded-3xl border border-neutral-200/80 p-6 sm:p-10 shadow-lg space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
            <div>
              <span className="text-xs uppercase tracking-widest text-ocean-600 font-semibold">
                Step 2 of 2
              </span>
              <h2 className="text-2xl font-editorial font-medium text-neutral-900">
                {t("summary.title")}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setShowSummary(false)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-neutral-600 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 transition-colors"
            >
              <Edit2 className="w-3.5 h-3.5" />
              <span>{t("actions.edit")}</span>
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-shoreline-50 border border-shoreline-200/80 space-y-1">
            <p className="text-xs text-shoreline-900 font-medium">
              {t("summary.notice")}
            </p>
          </div>

          {/* Details Table */}
          <div className="space-y-3 text-sm text-neutral-700 divide-y divide-neutral-100">
            <div className="flex items-center justify-between py-2">
              <span className="text-neutral-500">Suite</span>
              <span className="font-semibold text-neutral-900">
                {selectedAccommodation
                  ? selectedAccommodation.name[locale]
                  : "Any Available"}
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-neutral-500">Dates</span>
              <span className="font-semibold text-neutral-900 tabular-nums">
                {validatedData?.checkIn} &rarr; {validatedData?.checkOut}
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-neutral-500">Guests</span>
              <span className="font-semibold text-neutral-900">
                {validatedData?.guests} Guest(s)
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-neutral-500">Guest Name</span>
              <span className="font-semibold text-neutral-900">
                {validatedData?.name}
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-neutral-500">Email</span>
              <span className="font-semibold text-neutral-900">
                {validatedData?.email}
              </span>
            </div>
            {validatedData?.phone && (
              <div className="flex items-center justify-between py-2">
                <span className="text-neutral-500">Phone</span>
                <span className="font-semibold text-neutral-900">
                  {validatedData.phone}
                </span>
              </div>
            )}
            {validatedData?.message && (
              <div className="py-2 space-y-1">
                <span className="text-neutral-500 block">Note</span>
                <p className="text-xs text-neutral-800 bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">
                  {validatedData.message}
                </p>
              </div>
            )}
          </div>

          {/* Action to open WhatsApp */}
          <div className="pt-4 space-y-3">
            <button
              type="button"
              onClick={handleOpenWhatsApp}
              className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm tracking-wide uppercase transition-all shadow-md active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t("actions.send_whatsapp")}</span>
            </button>

            <p className="text-center text-[11px] text-neutral-500">
              WhatsApp Number destination: +62 877 4344 7062
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

