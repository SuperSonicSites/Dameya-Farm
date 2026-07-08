// Site-wide configuration and contact details — the single source of truth used
// by the header, footer, contact page, and structured data.
//
// TODO (family): replace the placeholder values below with the farm's real
// details before launch. Everything marked `todo: true` renders a small "(TODO)"
// tag on the site so nothing fake ships unnoticed.

export const site = {
  name: 'Dameya Farm',
  town: 'Glen Robertson, Ontario',
  operators: 'Adam & Danyca Lindeman',

  // Contact details. Set `todo` to false once the value is real.
  email: { value: 'hello@example.com', todo: true },
  phone: { value: '(613) 555-0000', tel: '+16135550000', todo: true },

  // Contact form (Formspree — https://formspree.io).
  // 1. Create a free form at formspree.io and copy its 8-char form ID.
  // 2. Paste it below (replace 'xxxxxxxx') and set `todo: false`.
  // Until then the form posts to a harmless placeholder and shows a notice.
  form: { formspreeId: 'xxxxxxxx', todo: true },
} as const;

export const formAction = site.form.todo
  ? '#contact-form-not-yet-configured'
  : `https://formspree.io/f/${site.form.formspreeId}`;
