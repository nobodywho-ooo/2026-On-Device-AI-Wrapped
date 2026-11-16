/** Site-wide text. News items live in `src/content/news/` and `src/content/more/`. */
export const site = {
  year: 2026,
  title: 'On-Device AI Wrapped',
  tagline: 'The year AI moved into your pocket.',
  description:
    'A Wrapped-style recap of the biggest on-device and local AI news of the year: new small models, phones, and the tools that run them.',

  /** "Bonus tracks" slide, listing the short items from `src/content/more/`. */
  more: {
    kicker: 'Bonus tracks',
    title: 'Wait, there’s more…',
  },

  /** Closing slide. */
  credits: {
    kicker: 'Brought to you by',
    name: 'NobodyWho',
    slogan: 'On-device AI for any device.',
    body: 'NobodyWho is the open-source inference engine for running LLMs locally and efficiently on phones, laptops, headsets and, yes, watches. It runs on llama.cpp and works with Swift, Kotlin, Flutter, React Native, Python and Godot.',
    highlight: {
      emoji: '⌚',
      title: 'An LLM on your wrist, before Apple',
      body: 'In June we shipped NobodyWho Wrist, the first app to run a language model entirely on an Apple Watch: offline, with no iPhone needed.',
      link: {
        label: 'Check it out',
        url: 'https://www.nobodywho.ai/posts/apple-watch-vision-pro-apps/',
      },
    },
    github: 'https://github.com/nobodywho-ooo/nobodywho',
    website: 'https://www.nobodywho.ai',
    signoff: 'See you in 2027. Keep it local.',
  },
};
