/** Pages légales et 404 — textes de base (content/legal.md). Éléments factuels en [TO COMPLETE]. */
import { applyUrl } from './site';
export type LegalSection = { title: string; paragraphs?: string[]; list?: string[]; after?: string[] };

export const legalNotice = {
  meta: { title: 'Legal Notice — Elevate Her', description: 'Legal notice of the Elevate Her website.' },
  eyebrow: 'Legal',
  title: 'Legal *notice*.',
  sections: [
    { title: 'Publisher', paragraphs: ['This website is published by Elevate Her.'], list: ['Legal form: [TO COMPLETE]', 'Registered office: [TO COMPLETE]', 'Registration number (SIRET / RCS): [TO COMPLETE]', 'VAT number: [TO COMPLETE]', 'Publication director: [TO COMPLETE]', 'Phone: [TO COMPLETE : numéro exigé par la loi dans les mentions légales, aucun email n\'étant publié]'] },
    { title: 'Hosting', paragraphs: ['This website is hosted by [TO COMPLETE : nom de l\'hébergeur, adresse, site web].'] },
    { title: 'Intellectual property', paragraphs: ['All content on this website, including texts, the Elevate Her name, logo, visual identity, images and videos, belongs to Elevate Her or is used with permission. Any reproduction, distribution or modification, in whole or in part, without prior written consent is prohibited.'] },
    { title: 'Personal data', paragraphs: ['Information about the data collected through this website and your rights is available in the Privacy Policy.'] },
    { title: 'Credits', list: ['Design and development: [TO COMPLETE]', 'Photography and video: [TO COMPLETE]'] },
  ] as LegalSection[],
};

export const privacyPolicy = {
  meta: { title: 'Privacy Policy — Elevate Her', description: 'How Elevate Her collects and uses the information you share on this website.' },
  eyebrow: 'Privacy',
  title: 'Privacy *policy*.',
  intro: "This page explains what information Elevate Her collects on this website, why, and what you can do about it. It's written to be read, not skimmed past.",
  sections: [
    { title: 'Who is responsible', paragraphs: ['The data controller is Elevate Her, [TO COMPLETE : raison sociale et adresse]. You can reach us by post at that address, or through the form linked from this site.'] },
    { title: 'What we collect', paragraphs: ["This website itself has no form, no account and no newsletter. We don't collect anything on it in the background, and there are no advertising trackers.", 'Applications and messages go through a Google Forms questionnaire, opened when you click "Apply to Elevate Her". The information you enter there (your identity, your profiles, what you create and your goals, or who you are and what you have in mind if you represent a brand or a media outlet) is collected by Elevate Her through Google Forms, which is subject to Google\'s privacy policy. [TO COMPLETE : vérifier que le formulaire Google demande la confirmation 18 ans et le consentement RGPD.]'] },
    { title: 'Why we collect it', list: ['To review your application and get back to you.', 'To reply to your message.', 'To keep a record of your consent.'], after: ['The legal basis is your consent, which you give by ticking the box before sending the form. You can withdraw it at any time.'] },
    { title: 'Where it goes', paragraphs: ['Everything you send us is stored in Google Forms, on the Elevate Her account. [TO COMPLETE : lieu d\'hébergement des données et garanties de transfert, à vérifier avec Google.] Only the Elevate Her team has access to it. We never sell your information and we never share it with third parties for their own purposes.'] },
    { title: 'How long we keep it', paragraphs: ["Applications that don't lead to a collaboration are kept for [TO COMPLETE : durée, 12 mois par exemple] and then deleted. Other messages are kept for [TO COMPLETE : durée]. If you join the roster, your information becomes part of your file for the duration of our collaboration."] },
    { title: 'Cookies', paragraphs: ["This site doesn't use cookies, and there is no analytics or advertising tool running on it. If that changes, this page will be updated first. [TO COMPLETE : à mettre à jour si un outil de mesure est ajouté.]"] },
    { title: 'Your rights', paragraphs: ['Under the GDPR you can ask us to:'], list: ['access the information we hold about you;', 'correct it;', 'delete it;', 'restrict or object to how we use it;', 'receive a copy in a portable format;', 'withdraw your consent at any time.'], after: ["Send your request by post to the address above, or through the form linked from this site, and we'll answer within one month. If you're not satisfied with our response, you can lodge a complaint with the CNIL, the French data protection authority, at cnil.fr. [TO COMPLETE : autorité compétente si l'entreprise n'est pas en France.]"] },
    { title: 'Minors', paragraphs: ["This site and the application questionnaire are intended for adults. We don't knowingly collect information from anyone under 18. If you believe a minor has sent us information, let us know and we'll delete it."] },
    { title: 'Updates', paragraphs: ['Last updated: [TO COMPLETE : date de mise en ligne]. Any change will be published on this page.'] },
  ] as LegalSection[],
};

export const notFound = {
  meta: { title: 'Page not found — Elevate Her', description: 'This page could not be found.' },
  eyebrow: '404',
  title: "This page isn't part of the *club*.",
  text: 'The link may be old, or the page may have moved. Everything else is right where it should be.',
  links: [
    { label: 'Back to home', href: '/' },
    { label: 'Apply to Elevate Her', href: applyUrl },
  ],
};
