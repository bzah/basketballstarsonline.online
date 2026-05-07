export type Category = "shooting" | "arcade" | "simulator" | "multiplayer" | "classic";

export interface Game {
  id: number;
  slug: string;
  title: string;
  iframe: string;
  category: Category;
  description: string;       // long-form, 2-3 paragraphs, keyword-rich
  shortDescription: string;  // for cards / meta description
  howToPlay: string[];       // bullet steps
  features: string[];        // bullet features
  tags: string[];
}

export const CATEGORIES: { slug: Category; name: string; description: string }[] = [
  { slug: "shooting", name: "Shooting", description: "Test your aim with pure basketball shooting challenges — 3-pointers, free throws and trick shots." },
  { slug: "arcade", name: "Arcade", description: "Fast, fun, pick-up-and-play basketball arcade hits with addictive scoring loops." },
  { slug: "simulator", name: "Simulator", description: "Realistic basketball simulator games with true-to-life physics, controls and courts." },
  { slug: "multiplayer", name: "Multiplayer", description: "Iconic 1v1 and 2-player basketball legends battles — face friends on the same keyboard." },
  { slug: "classic", name: "Classic", description: "Legendary basketball games — the unblocked classics that defined the genre." },
];

const KW_BLURB = "Play it free, unblocked, and right in your browser — no download, no signup, mobile-friendly.";

export const GAMES: Game[] = [
  { id: 1, slug: "basketball-stars", title: "Basketball Stars", iframe: "https://st.8games.net/7/igra-basketbol-golovami-na-dvoikh", category: "multiplayer",
    shortDescription: "Play Basketball Stars online — the legendary 1v1 and 2-player basketball stars game with iconic players, dunks and 3-pointers.",
    description:
`Basketball Stars is the original head-to-head basketball legends experience that turned millions of casual players into basketball stars overnight. Pick your favorite NBA-style superstar, step onto the hardwood, and outsmart your opponent in fast, physics-driven 1v1 or 2-player matches. Every match is a chess game played at top speed: feint, steal the ball, pull up for a 3-pointer, or rise up for a thunderous dunk that shakes the whole arena.

The controls are simple but the skill ceiling is sky-high — exactly why Basketball Stars unblocked has become a phenomenon in classrooms, dorms and break-rooms around the world. The game runs perfectly in your browser with no download required, supports keyboard for two players on the same device, and works smoothly on mobile so you can rack up wins anywhere. Master timing, learn each character's signature special move, and climb from rookie to true basketball star.

${KW_BLURB} If you love free basketball games online, Basketball Stars is the gold standard — and the perfect entry point to the full Basketball Stars Online catalog of basketball legends, basketball shots and arcade b-ball hits.`,
    howToPlay: ["Player 1: WASD to move, S to shoot, D to dunk, X for super shot", "Player 2: Arrow keys to move, K to shoot, L to dunk, M for super shot", "Time your jump and release for a perfect 3-pointer", "Steal the ball when your opponent is mid-dribble"],
    features: ["1v1 and 2-player same-keyboard mode", "Roster of star players with unique special moves", "Realistic ball physics and dunk animations", "Fully unblocked — works at school and work", "Mobile-responsive touch controls"],
    tags: ["basketball stars", "basketball legends unblocked", "2 player", "free games"] },

  { id: 2, slug: "basketball-stars-3", title: "Basketball Stars 3", iframe: "https://st.8games.net/dasha1/igry-nikelodeon/basketball-stars-three/en/", category: "multiplayer",
    shortDescription: "Basketball Stars 3 — the third installment in the cult unblocked basketball stars franchise with new courts, new players and tighter controls.",
    description:
`Basketball Stars 3 is the long-awaited evolution of the basketball stars series, bringing new arenas, smarter AI and the most refined controls the franchise has ever shipped. Whether you're playing solo against the computer or facing off in a 2-player basketball legends battle on the same keyboard, every shot, dunk and steal feels punchier than ever.

What makes Basketball Stars 3 essential among free basketball games online is its perfect balance: fast enough for arcade-style fun, deep enough for competitive play. Lock in on the new courts, learn each star's signature animations, and climb the leaderboard. The game is fully unblocked, runs in any modern browser, and works just as well on mobile as on desktop.

${KW_BLURB}`,
    howToPlay: ["Pick your basketball star and court", "Use WASD or arrow keys to move", "Time shots with the rim — green = perfect", "Activate special moves when your meter fills"],
    features: ["Brand-new courts and visual polish", "Refined AI for satisfying solo play", "2-player local multiplayer", "Unblocked everywhere"],
    tags: ["basketball stars", "basketball legends", "free games"] },

  { id: 3, slug: "basketball-simulator", title: "Basketball Simulator", iframe: "https://g1.igru.net/6/igra-simulyator-basketbola/", category: "simulator",
    shortDescription: "Basketball Simulator — true-to-life ball physics, dunks, 3-pointers and free throws in a realistic basketball training experience.",
    description:
`Basketball Simulator delivers the most realistic basketball physics you'll find in any free browser game. Train your timing on free throws, master arcing 3-pointers from anywhere on the court, and feel the satisfaction of a perfect swoosh when the ball drops cleanly through the net. Every shot reacts to angle, power and rim contact exactly the way it would in a real game.

Unlike arcade-style basketball games, this simulator rewards patience and precision. It's a perfect tool for sharpening your sense of distance and rhythm — and it's just as fun for casual players who want a calm, satisfying basketball game online. Basketball Simulator is one of those rare free basketball games that combines depth with immediate accessibility.

${KW_BLURB}`,
    howToPlay: ["Aim with the mouse or touch", "Hold to charge power, release to shoot", "Adjust angle for arcing 3-pointers", "Chain perfect shots for combo bonuses"],
    features: ["Realistic ball physics and net response", "Multiple shooting positions", "Combo and accuracy scoring", "Fast levels — perfect for short sessions"],
    tags: ["basketball simulator", "basketball", "free games", "shooting"] },

  { id: 4, slug: "basketball-school", title: "Basketball School", iframe: "https://st.8games.net/6/igra-shkola-basketbola/", category: "simulator",
    shortDescription: "Basketball School — learn the fundamentals of dribbling, passing and shooting in this fun, family-friendly basketball training game.",
    description:
`Basketball School is the perfect starting point for younger players or anyone new to free basketball games online. The game walks you through the fundamentals — dribbling, passing, shooting form — in short, friendly drills that feel more like a game than a lesson. Every level builds a real basketball skill while keeping the energy light and arcade-fun.

This is one of the most welcoming basketball games on our portal: bright visuals, clear goals, and zero pressure. Whether you're a complete beginner or a parent looking for a safe, family-friendly basketball game, Basketball School is unblocked, free, and ready to play in seconds.

${KW_BLURB}`,
    howToPlay: ["Follow the on-screen coach prompts", "Tap or click to perform each action at the right moment", "Pass the drill to unlock the next lesson"],
    features: ["Friendly tutorial-style drills", "Bright family-friendly art style", "Fundamentals of real basketball", "Zero learning curve"],
    tags: ["basketball", "training", "free games"] },

  { id: 5, slug: "basketball-legends-2020", title: "Basketball Legends 2020", iframe: "https://st.8games.net/7/igra-legendy-basketbola-2020/index-en.html", category: "classic",
    shortDescription: "Basketball Legends 2020 unblocked — the cult 2-player basketball legends brawler that defined the genre.",
    description:
`Basketball Legends 2020 is the entry that turned an already-legendary series into a worldwide phenomenon. The 2020 roster, courts and animations are still considered the gold standard for basketball legends unblocked games — fast, punchy, and perfectly balanced for both 1-player and 2-player same-keyboard mayhem.

Choose from a roster of basketball superstars, each with their own signature dunks and special moves, and battle through tournaments, seasons and quick matches. The controls feel instantly intuitive, the animations are full of personality, and every game ends with at least one moment worth replaying. This is why Basketball Legends 2020 dominates classroom search bars and remains the most-played title in the basketball legends unblocked universe.

${KW_BLURB}`,
    howToPlay: ["Player 1: WASD + B to shoot, V to dunk", "Player 2: Arrow keys + L to shoot, K to dunk", "Use special moves when your meter is full", "Steal mid-dribble for fast counter-attacks"],
    features: ["Full roster of legendary players", "Tournament, season and quick-match modes", "2-player local multiplayer", "100% unblocked, works at school"],
    tags: ["basketball legends unblocked", "basketball legends 2020", "2 player", "classic"] },

  { id: 6, slug: "halloween-basketball-legends", title: "Halloween Basketball Legends", iframe: "https://st.8games.net/lib/ruffle/?game=https://st.8games.net/igra-basketbolnye-legendy-khellouina.swf", category: "classic",
    shortDescription: "Halloween Basketball Legends — spooky themed edition of the cult basketball legends unblocked classic.",
    description:
`Halloween Basketball Legends takes everything you love about basketball legends unblocked and dunks it in a bucket of pumpkin spice and shadow. The roster swaps superstars for monsters, vampires and skeletons; the courts are haunted; the energy is pure Halloween hardwood horror — but the gameplay is the same crisp 1v1 / 2-player b-ball action that made the franchise legendary.

This seasonal favorite is one of the most-played free basketball games online every October, and it's a great way to introduce friends to the basketball legends formula with a fresh visual twist. Free, unblocked, and ready to play any time of year.

${KW_BLURB}`,
    howToPlay: ["Pick your monstrous baller", "WASD / Arrow keys to move and jump", "Time dunks and 3-pointers like the original Basketball Legends"],
    features: ["Halloween-themed roster and courts", "Same iconic basketball legends gameplay", "1-player vs CPU and 2-player local", "Unblocked at school and work"],
    tags: ["basketball legends unblocked", "halloween", "basketball", "classic"] },

  { id: 7, slug: "basketball-jam-shots", title: "Basketball Jam Shots", iframe: "https://st.8games.net/6/basketball-jam-shots/", category: "shooting",
    shortDescription: "Basketball Jam Shots — fast, satisfying basketball shooting arcade with combo scoring and slam-dunk energy.",
    description:
`Basketball Jam Shots is a pure shooting arcade where every shot counts and every basket sounds like fireworks. Aim, time your release, and stack combos for huge multipliers. The pace is relentless, the visuals are punchy, and the satisfaction of chaining perfect baskets is genuinely addictive.

If you love quick free basketball games online that respect your time and reward skill, Basketball Jam Shots is a must-play. Sessions are short, scores are competitive, and the controls work flawlessly on both desktop and mobile.

${KW_BLURB}`,
    howToPlay: ["Click or tap to shoot", "Hold to charge, release at the right power", "Don't miss — a single miss resets your combo"],
    features: ["Combo-based scoring", "Tight, responsive controls", "Mobile and desktop friendly", "Quick session-based fun"],
    tags: ["basketball shots", "arcade", "free games", "shooting"] },

  { id: 8, slug: "basketball-shots-3d", title: "Basketball Shots 3D", iframe: "https://st.8games.net/7/igra-basketbolnye-broski-3d/index-en.html", category: "shooting",
    shortDescription: "Basketball Shots 3D — gorgeous 3D ball physics in a level-based basketball shooting challenge.",
    description:
`Basketball Shots 3D brings the precision of true 3D physics to your browser. Each level is a small, beautifully composed shooting puzzle: line up your angle, gauge the distance, and find the perfect arc that drops the ball through the hoop. Some levels reward power, others reward finesse — and a few will have you bouncing the ball off backboards and walls for clutch trick shots.

The 3D presentation makes Basketball Shots 3D one of the most visually polished free basketball games online. It's perfect for short, focused play sessions or longer puzzle marathons.

${KW_BLURB}`,
    howToPlay: ["Drag to aim", "Release to shoot", "Use walls and backboards for trick shots", "Earn 3 stars per level for perfect plays"],
    features: ["Real 3D ball physics", "Level-based progression", "Star ratings and replay value", "Beautiful clean visuals"],
    tags: ["basketball shots", "3d", "free games", "shooting"] },

  { id: 9, slug: "on-fire-basketball-shots", title: "On Fire: Basketball Shots", iframe: "https://st.8games.net/7/igra-v-ogne-basketbolnye-broski/", category: "shooting",
    shortDescription: "On Fire Basketball Shots — chain consecutive baskets to literally set the basketball on fire.",
    description:
`On Fire: Basketball Shots is built around one of the most satisfying mechanics in basketball gaming: the heat check. Sink consecutive shots and watch your ball ignite — first sparking, then glowing, then engulfed in flames as your multiplier explodes. Miss a single shot and the streak is over.

This makes every basket emotionally heavy and every miss a heartbreak — exactly what makes great arcade basketball games online so addictive. On Fire is free, unblocked, and one of the most replayable shooters on Basketball Stars Online.

${KW_BLURB}`,
    howToPlay: ["Click or tap to shoot", "Chain shots without missing", "Maintain your streak to ignite the ball"],
    features: ["Streak-based scoring", "Visual fire effects scale with combo", "Endless replayability", "Mobile-friendly controls"],
    tags: ["basketball shots", "arcade", "free", "shooting"] },

  { id: 10, slug: "basketball-legends", title: "Basketball Legends", iframe: "https://st.8games.net/lib/ruffle/?game=https://st.8games.net/igra-legendy-basketbola.swf", category: "classic",
    shortDescription: "Basketball Legends — the original cult classic that started the basketball legends unblocked phenomenon.",
    description:
`Basketball Legends is the title that started it all. Before there was Basketball Legends 2020 or Basketball Stars, there was just Basketball Legends — a 1v1 / 2-player b-ball game with star players, satisfying physics and a chemistry between gameplay and personality that no other browser basketball title had matched. Even years later, the original holds up as one of the best basketball legends unblocked games you can play.

If you grew up on this game, the moment you load it the muscle memory comes back. If you're new to it, prepare for the most pure, distilled version of basketball legends gameplay — no extras, no fluff, just brilliant 2-player basketball action.

${KW_BLURB}`,
    howToPlay: ["WASD / Arrow keys to move and jump", "Shoot with B / L, dunk with V / K", "Special moves with the bottom action key"],
    features: ["The original basketball legends formula", "Roster of iconic player styles", "1-player vs CPU and 2-player local", "Fully unblocked"],
    tags: ["basketball legends unblocked", "basketball legends", "classic", "2 player"] },

  { id: 11, slug: "flick-basketball", title: "Flick Basketball", iframe: "https://g1.igru.net/7/igra-flik-basketbol/", category: "arcade",
    shortDescription: "Flick Basketball — addictive one-touch basketball game where every flick is a 3-pointer attempt.",
    description:
`Flick Basketball strips the sport down to its purest moment: the shot. Flick the ball with your finger or mouse, watch it arc through the air, and pray for that perfect swoosh. The controls are so simple anyone can play — but mastery takes hundreds of attempts and a real feel for power and angle.

This is one of those rare basketball games that genuinely earns the word "addictive". Sessions blur into one another and your high score keeps creeping up. Free, unblocked, and a perfect mobile or desktop time-killer.

${KW_BLURB}`,
    howToPlay: ["Swipe up to flick the ball", "Aim by adjusting flick direction", "Beat the clock to score as many baskets as possible"],
    features: ["One-touch controls", "High-score chasing", "Perfect for quick sessions", "Mobile-first design"],
    tags: ["basketball", "arcade", "flick", "free games"] },

  { id: 12, slug: "basketball-master", title: "Basketball Master", iframe: "https://st.8games.net/7/igra-basketbol-profi/", category: "shooting",
    shortDescription: "Basketball Master — a pro-level shooting challenge that tests your timing, aim and accuracy.",
    description:
`Basketball Master is for players who want to feel like real basketball stars. Each level demands precise movement, careful aim, and perfectly timed releases. Make the shot and you advance; miss and you reset. The challenge curve is steep but fair, and the moment you finally clear a tough level is genuinely rewarding.

If you've gotten too good at casual basketball games online, Basketball Master is the difficulty step up you've been looking for. Free, unblocked, and a true skill check.

${KW_BLURB}`,
    howToPlay: ["Move to find your shooting position", "Aim and release with perfect timing", "Clear all hoops to advance the level"],
    features: ["Skill-based level progression", "Precise shooting mechanics", "Pro-level challenge", "Free and unblocked"],
    tags: ["basketball", "master", "shooting", "free games"] },

  { id: 13, slug: "basketball-five-hoops", title: "Basketball Five Hoops", iframe: "https://st.8games.net/10/igra-pyat-broskov/", category: "shooting",
    shortDescription: "Basketball Five Hoops — chain a single throw through five hoops in this clever basketball puzzle.",
    description:
`Basketball Five Hoops flips the basketball formula on its head: instead of one hoop and many shots, you get one shot to thread the ball through five separate hoops. It's part puzzle, part trick-shot challenge, and entirely satisfying when you finally line up the perfect arc.

Each level is a small geometric brain-teaser dressed up in basketball clothes. Free, unblocked, and one of the most original basketball games on our portal.

${KW_BLURB}`,
    howToPlay: ["Drag to aim and set power", "Release to launch the ball", "Hit all five hoops in one throw to clear the level"],
    features: ["Puzzle-style basketball gameplay", "Clean minimalist visuals", "Hundreds of levels", "Free and unblocked"],
    tags: ["basketball", "puzzle", "shots", "free games"] },

  { id: 14, slug: "basketball-star-2", title: "Basketball Star 2", iframe: "https://st.8games.net/10/igra-zvezda-basketbola-2/", category: "arcade",
    shortDescription: "Basketball Star 2 — rise from rookie to superstar in this rewarding basketball arcade hit.",
    description:
`Basketball Star 2 is built around progression. Start as a no-name rookie and grind your way up through baskets, unlocks and signature moves until you're a true basketball star. Each session feels meaningful because every basket pushes you toward the next milestone, the next player, the next court.

It's the perfect example of arcade basketball with depth — accessible enough to play casually, rewarding enough to come back to. Free, unblocked, mobile-friendly.

${KW_BLURB}`,
    howToPlay: ["Tap or click to shoot", "Earn coins for every basket", "Unlock new players and courts", "Climb the star rating ladder"],
    features: ["Progression and unlocks", "Multiple courts and players", "Arcade-style scoring", "Mobile and desktop"],
    tags: ["basketball star", "arcade", "free games"] },

  { id: 15, slug: "basketball-stars-2026", title: "Basketball Stars 2026", iframe: "https://st.8games.net/7/8g/igra-zvjozdy-basketbola-2026/", category: "multiplayer",
    shortDescription: "Basketball Stars 2026 — the freshest edition of the legendary basketball stars unblocked franchise.",
    description:
`Basketball Stars 2026 is the latest chapter in the basketball stars saga, with an updated roster, new courts and refined controls that make the entire experience feel sharper than ever. Pick your favorite basketball star, pick your court, and battle it out in 1v1 or 2-player same-keyboard mode.

This is the most modern basketball legends unblocked experience on the portal — bright, fast, and immediately satisfying. If you've played the older entries, you'll feel right at home; if this is your first time, prepare to be hooked.

${KW_BLURB}`,
    howToPlay: ["WASD / Arrow keys to move", "Shoot, dunk, steal and use specials with action keys", "Win matches to unlock more stars"],
    features: ["2026 updated roster", "New courts and arenas", "1-player and 2-player modes", "Unblocked and free forever"],
    tags: ["basketball stars", "basketball legends unblocked", "2026", "free games"] },

  { id: 16, slug: "basket-swooshes", title: "Basket Swooshes", iframe: "https://st.8games.net/7/igra-basketbol-brosok-so-svistom/", category: "shooting",
    shortDescription: "Basket Swooshes — celebrate the perfect basket sound in this clean physics-based basketball shooter.",
    description:
`Basket Swooshes is a love letter to one of the most satisfying sounds in sports: the swoosh of a perfect, all-net basket. Every level rewards you for clean shots that don't touch the rim — pure, perfect arcs only.

The clean visuals, focused mechanics and zen-like pacing make Basket Swooshes a perfect basketball game for short focused play sessions. Free, unblocked, and beautifully tuned.

${KW_BLURB}`,
    howToPlay: ["Drag to aim", "Release to shoot", "Hit nothing but net for max points"],
    features: ["Perfect-shot scoring system", "Clean minimal visuals", "Calming pace", "Free and unblocked"],
    tags: ["basketball shots", "arcade", "shooting"] },

  { id: 17, slug: "helix-dunk-3d", title: "Helix Dunk 3D", iframe: "https://g1.igru.net/7/igra-kheliks-dank/", category: "arcade",
    shortDescription: "Helix Dunk 3D — bounce the basketball through a spinning helix tower in this hyper-casual hit.",
    description:
`Helix Dunk 3D fuses the addictive helix-tower formula with the slam-dunk satisfaction of basketball. Tap or hold to drop the ball through gaps in a spinning tower; smash through the right colored sections, avoid the wrong ones, and push your run as deep as you can.

It's pure hyper-casual fun with a basketball twist, and one of the most pick-up-and-play titles in our entire catalog. Free, unblocked, mobile-perfect.

${KW_BLURB}`,
    howToPlay: ["Tap or hold to drop the ball", "Pass through colored gaps in the tower", "Avoid obstacles to keep your streak alive"],
    features: ["Hyper-casual one-touch gameplay", "3D spinning tower", "Endless run progression", "Mobile-first"],
    tags: ["helix", "dunk", "3d basketball", "arcade"] },

  { id: 18, slug: "basket-champs", title: "Basket Champs", iframe: "https://st.8games.net/6/igra-chempionat-po-basketbolu/", category: "shooting",
    shortDescription: "Basket Champs — lead your country to glory in this addictive basketball world tournament shooter.",
    description:
`Basket Champs lets you choose a country, enter the basketball world tournament, and shoot your way to the gold trophy. Each opponent gets tougher, but better aim, smarter timing and a steadier hand will take you all the way to the final.

The tournament structure makes Basket Champs one of the most rewarding free basketball games online — every match feels meaningful and the trophy at the end is genuinely earned.

${KW_BLURB}`,
    howToPlay: ["Pick your country", "Aim with the mouse or touch", "Hold and release for power", "Win every round to take the trophy"],
    features: ["World tournament structure", "Multiple countries and courts", "Skill-based shooting", "Free and unblocked"],
    tags: ["basketball", "tournament", "shooting", "free games"] },

  { id: 19, slug: "basket-champ-2", title: "Basket Champ 2", iframe: "https://st.8games.net/10/igra-chempion-basketbola-2/", category: "shooting",
    shortDescription: "Basket Champ 2 — the sequel to the hit basketball tournament shooter, with bigger stakes and sharper aim.",
    description:
`Basket Champ 2 takes everything that made the first game a hit and dials up the stakes. New countries, new courts, tighter aim and a deeper tournament structure that makes every round feel like the final. Pick your nation, raise your trophy, and prove that you're the basketball champion the world has been waiting for.

A must-play for fans of the first Basket Champs and anyone who loves competitive free basketball games online.

${KW_BLURB}`,
    howToPlay: ["Aim with mouse or touch", "Charge power and release", "Win every round to lift the trophy"],
    features: ["Bigger tournament than the original", "Sharper visuals and feel", "Skill-based difficulty curve", "Free and unblocked"],
    tags: ["basketball", "champion", "free games", "shooting"] },

  { id: 20, slug: "dunk-hoop", title: "Dunk Hoop", iframe: "https://g1.igru.net/igry-na-skorost-i-reaktsiyu/igra-pojmaj-myach/", category: "arcade",
    shortDescription: "Dunk Hoop — fast-reaction basketball arcade where you move the hoop to catch every ball.",
    description:
`Dunk Hoop flips the basketball formula upside down: the balls fall, you move the hoop. Slide left and right to catch every ball, build huge combos, and survive as the speed ramps up. Miss a single ball and the run is over.

It's fast, it's tense, and it's one of the most fun reaction-based basketball games on Basketball Stars Online. Free, unblocked, mobile-friendly.

${KW_BLURB}`,
    howToPlay: ["Slide left and right to position the hoop", "Catch every falling basketball", "Don't miss — one drop ends your run"],
    features: ["Reaction-based gameplay", "Combo scoring and speed ramp", "Endless mode", "Mobile and desktop"],
    tags: ["basketball", "reaction", "arcade", "free games"] },

  { id: 21, slug: "basket-random", title: "Basket Random", iframe: "https://st.8games.net/10/igra-sluchajnyj-basketbol/", category: "multiplayer",
    shortDescription: "Basket Random — chaotic, hilarious 2-player ragdoll-physics basketball with random courts every match.",
    description:
`Basket Random is what happens when you take basketball, throw out the rulebook, and let pure ragdoll physics decide who wins. Every match drops you into a random court with random characters, random ball physics, and just one button to control your wobbly player. The result is one of the funniest, most replayable 2-player basketball games on the internet.

It's the perfect couch (or classroom) party game and a guaranteed source of laugh-out-loud moments. Among the basketball legends unblocked crowd, Basket Random has become a beloved spin-off, free, unblocked and unmissable.

${KW_BLURB}`,
    howToPlay: ["Player 1: W to jump and shoot", "Player 2: Up arrow to jump and shoot", "First to 5 baskets wins"],
    features: ["Ragdoll physics chaos", "Random courts and rules every match", "Hilarious 2-player gameplay", "One-button controls"],
    tags: ["basket random", "2 player", "physics", "basketball legends unblocked", "free games"] },

  { id: 22, slug: "shot-shot", title: "Shot Shot", iframe: "https://html5.gamedistribution.com/c2e862b3aded441daea92346bd5f8bbb/", category: "shooting",
    shortDescription: "Shot Shot — pure minimalist basketball shooting where precision is everything.",
    description:
`Shot Shot strips basketball shooting to its purest essence. No frills, no clutter — just clean lines, satisfying physics and one mission: sink every shot. The minimalist design lets the gameplay shine, and the level progression keeps you coming back for one more attempt.

If you appreciate clean design and tight controls, Shot Shot is one of the best free basketball games online to add to your rotation.

${KW_BLURB}`,
    howToPlay: ["Tap or click to shoot", "Each level changes the geometry — adapt your aim", "Sink every shot to clear the level"],
    features: ["Minimalist visuals", "Tight precision controls", "Hundreds of levels", "Free and unblocked"],
    tags: ["basketball shots", "minimalist", "free games", "shooting"] },
];

export const FEATURED_GAME = GAMES[0];

export function getGame(slug: string) { return GAMES.find(g => g.slug === slug); }
export function getCategory(slug: string) { return CATEGORIES.find(c => c.slug === slug); }
export function gamesByCategory(slug: Category) { return GAMES.filter(g => g.category === slug); }
export function relatedGames(slug: string, limit = 8) {
  const g = getGame(slug); if (!g) return [];
  return GAMES.filter(x => x.slug !== slug && x.category === g.category)
    .concat(GAMES.filter(x => x.category !== g.category && x.slug !== slug))
    .slice(0, limit);
}
