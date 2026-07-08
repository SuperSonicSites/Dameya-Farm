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
} as const;
