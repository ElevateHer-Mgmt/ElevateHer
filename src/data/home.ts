/** Textes de la page d'accueil, validés par Ethan (content/home.md). `*mot*` = italique rose accent. */
import { applyUrl } from './site';
export const home = {
  meta: {
    title: 'Elevate Her — Creator Growth Agency & Private Club for Ambitious Women',
    description: 'A dedicated team helping ambitious women build their brand, audience and income.',
  },
  hero: {
    eyebrow: 'Creator Growth Agency & Private Club',
    title: 'Elevate your brand. Expand your *income*.',
    text: 'A selective creator agency backed by a dedicated team helping ambitious women build stronger brands, bigger audiences and more valuable businesses.',
    cta: { label: 'Apply to Elevate Her', href: applyUrl },
    secondary: { label: 'Discover the path', href: '#path' },
    note: ['By application only', 'Limited roster'],
    media: 'home-hero',
    alt: 'A creator in a bright cream studio, adjusting a ring light.',
  },
  marquee: ['Elevate', 'Connect', 'Empower', 'By application only', 'A dedicated team behind ambitious women'],
  statement: {
    eyebrow: 'The idea',
    title: 'A dedicated team behind ambitious *women*.',
    text: "You are the face of your brand. That never changes. What changes is what's behind you: a team that builds the strategy, the content plan, the revenue and the partnerships, and protects what you've built. Quietly, and with real attention.",
    beats: [
      { title: 'Built for her.', text: 'Every plan starts with one creator, her image and her ambition. Not a template.' },
      { title: 'Backed by a team.', text: 'A dedicated team on your account, and fast answers when you need them.' },
      { title: 'Designed for growth.', text: 'Brand, audience, growth, revenue, opportunities. One structure, built in that order.' },
    ],
  },
  numbers: {
    enabled: false, // activer quand Ethan fournit les chiffres
    eyebrow: 'In numbers',
    items: [
      { value: '[TO COMPLETE]', label: '[TO COMPLETE]' },
      { value: '[TO COMPLETE]', label: '[TO COMPLETE]' },
      { value: '[TO COMPLETE]', label: '[TO COMPLETE]' },
    ],
  },
  path: {
    eyebrow: 'The path',
    title: 'Five steps. One *structure*.',
    intro: 'This is the order we build in. Each step rests on the one before it.',
    steps: [
      { n: '01', name: 'Brand', title: 'Start with who you are.', text: "Before growing anything, we define what your brand stands for: how it looks, how it sounds, where it's going. Brand development and a personalised strategy, written for you alone.", services: ['Brand development', 'Personalised strategy'], media: 'path-brand', alt: 'A creator in profile, cream silk blouse, against a plain cream wall.' },
      { n: '02', name: 'Audience', title: 'Reach the people who should know you.', text: 'A content plan built around your rhythm, and social media management that keeps your presence consistent while you create.', services: ['Individual content planning', 'Social media management'], media: 'path-audience', alt: 'A creator filming herself with a phone on a tripod in a sunlit room.' },
      { n: '03', name: 'Growth', title: 'Momentum, with a team behind it.', text: "Your dedicated team follows the numbers, adjusts the plan and keeps you moving. Growth isn't a one-off push. It's a routine.", services: ['A dedicated team', 'Fast communication'], media: 'path-growth', alt: 'A creator walking with momentum through a bright arched corridor.' },
      { n: '04', name: 'Revenue', title: 'Turn attention into income.', text: "Revenue management turns what you've built into something that pays. Several streams, not one. Followed closely, so you don't have to think about it every day.", services: ['Revenue management'], media: 'path-revenue', alt: 'Hands signing a document with a gold pen on a marble table.' },
      { n: '05', name: 'Opportunities', title: 'Open the doors that fit your brand.', text: 'The right partners, approached the right way, on terms that respect your image. Brand partnerships become a strategy instead of a surprise in your inbox.', services: ['Brand partnership development'], media: 'path-opportunities', alt: 'A creator stepping through a tall arched doorway into the light.' },
    ],
    outro: { label: 'And underneath all of it, protection.', href: '#protection' },
  },
  receive: {
    eyebrow: 'What you receive',
    title: 'The whole structure. For *every* creator.',
    intro: 'No packages, no tiers. Every creator on the roster gets all of it.',
    cards: [
      { title: 'Personalised strategy', text: 'A plan written for you, and revisited as you grow.' },
      { title: 'Brand development', text: 'Who you are, made sharp and consistent everywhere you appear.' },
      { title: 'Individual content planning', text: 'A content calendar built around your life and your voice.' },
      { title: 'Social media management', text: 'Your presence, handled every day, so you can focus on creating.' },
      { title: 'Revenue management', text: 'Income from more than one place, structured and followed closely.' },
      { title: 'Brand partnership development', text: 'Partnerships that fit your brand, negotiated for you.' },
    ],
    protection: {
      title: 'Protection, built in.',
      text: "Growth is worth little if it isn't protected.",
      items: [
        { title: 'Account protection', text: 'Your accounts, secured and watched over.' },
        { title: 'Content protection', text: 'Your content, protected from misuse wherever it travels.' },
      ],
    },
    link: { label: 'See every service in detail', href: '/services' },
  },
  face: {
    eyebrow: 'How we work',
    title: 'She stays the face. The team builds the *rest*.',
    text: "Your name, your image, your voice. None of that changes. What changes is what's behind you.",
    points: [
      { title: 'A dedicated team.', text: 'Not an inbox. A team that knows your account, your goals and your calendar.' },
      { title: 'Fast communication.', text: 'Questions get answers, and decisions get made quickly.' },
    ],
    closing: 'The creator remains the face of her brand. Our team works behind the scenes to help her develop it.',
    media: 'home-behind-the-scenes',
    alt: 'A creator posing in focus while a team adjusts the lights in the background.',
  },
  club: {
    eyebrow: 'The Private Club',
    title: 'Not the biggest roster. The *strongest* creators.',
    quote: 'We are not trying to build the biggest roster. We are trying to build the strongest creators.',
    text: "Private Club means one thing: we work with a limited number of creators, on purpose. It's the only way a team can stay deeply involved in every account.",
    facts: [
      { title: 'A limited roster.', text: 'A small number of creators, so every account gets real attention.' },
      { title: 'By application only.', text: 'Every creator here applied, and was chosen.' },
      { title: 'A dedicated team on every account.', text: 'Nobody is a number.' },
    ],
  },
  film: { enabled: false, eyebrow: 'The film', title: 'Inside Elevate *Her*.', videoId: '', poster: 'home-film-poster' },
  stories: { enabled: false, eyebrow: 'Her results', title: 'Built for her. Proven by *her*.', items: [] as { quote: string; name: string; role: string }[] },
  apply: {
    eyebrow: 'The application',
    title: 'Four steps to join the *club*.',
    steps: [
      { n: '01', title: 'Apply', text: 'Five minutes, one form. Tell us who you are and where you want to go.' },
      { n: '02', title: 'Review', text: 'The team reads every application. Personally.', todo: '[TO COMPLETE : délai de réponse]' },
      { n: '03', title: 'Conversation', text: "A call about your brand, your goals, and whether we're the right fit." },
      { n: '04', title: 'Welcome', text: 'Your dedicated team is assigned. The work begins.' },
    ],
    link: { label: 'Start your application', href: applyUrl },
  },
};
