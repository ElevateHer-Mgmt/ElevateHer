/** Page About — textes validés (content/about.md). */
export const about = {
  meta: {
    title: 'The Team Behind Her — Elevate Her',
    description: 'The team behind ambitious women building influential brands and valuable businesses.',
  },
  hero: {
    eyebrow: 'About Elevate Her',
    title: 'The team behind *her*.',
    text: "Elevate Her is a selective creator agency with one idea at its centre: an ambitious woman shouldn't have to build her brand alone. A dedicated team works behind her, on her brand, her audience, her income and the opportunities that follow. She stays the face. The team stays behind it.",
    /** Version courte affichée sur téléphone à la place de `text`. */
    short: "An ambitious woman shouldn't have to build her brand alone. She stays the face. The team stays behind it.",
    media: 'about-hero',
    alt: 'A bright creative studio with cream walls, a creator seated at a desk.',
  },
  her: {
    eyebrow: 'The name',
    title: 'What "Her" *means*.',
    text: "Her is who we build for. Ambitious female creators who want their personal brand to become a real business, with a team, a strategy and the structure that makes it last. That's the whole meaning of the name. It says who the work is for, nothing more.",
    /** Version courte affichée sur téléphone à la place de `text`. */
    short: 'Her is who we build for: ambitious female creators who want their personal brand to become a real business.',
  },
  club: {
    eyebrow: 'The club',
    title: 'What "Private Club" *means*.',
    text: "Private Club is our way of saying selective. We take on a limited number of creators, deliberately, so the team can stay deeply involved in every account. More creators would mean less attention for each one. We'd rather keep the roster short.",
    quote: 'We are not trying to build the biggest roster. We are trying to build the strongest creators.',
    changes: [
      { title: 'Attention.', text: 'Your account is one of a few, not one of hundreds.' },
      { title: 'Access.', text: 'The team working on your brand is the team you talk to.' },
      { title: 'Standards.', text: 'Every creator here was chosen, and knows it.' },
    ],
    media: 'about-club',
    alt: 'A hand holding a blank invitation card with a round seal, against pale pink silk.',
  },
  how: {
    eyebrow: 'How we work',
    title: 'What never *changes*.',
    principles: [
      { title: 'A dedicated team.', text: 'A team assigned to you, that knows your account, your goals and your calendar. Not a ticket queue.' },
      { title: 'Fast communication.', text: "Questions get answered, decisions get made, and you're kept in the loop." },
      { title: 'She remains the face.', text: 'Your name, your image, your voice. The team works behind the scenes to develop your brand, never in front of it.' },
      { title: 'Protection, built in.', text: 'Your accounts and your content are protected as part of the work, not as an add-on.' },
    ],
  },
  team: {
    enabled: false, // activer si Ethan souhaite présenter l'équipe
    eyebrow: 'The team',
    title: 'The people behind *her*.',
    text: '[TO COMPLETE]',
    members: [] as { name: string; role: string; media: string }[],
  },
};
