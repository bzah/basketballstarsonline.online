export type Category = "shooting" | "arcade" | "simulator" | "multiplayer" | "classic";

export interface Game {
  id: number;
  slug: string;
  title: string;
  iframe: string;
  category: Category;
  description: string;
  shortDescription: string;
  tags: string[];
}

export const CATEGORIES: { slug: Category; name: string; description: string }[] = [
  { slug: "shooting", name: "Shooting", description: "Test your aim with pure basketball shooting challenges." },
  { slug: "arcade", name: "Arcade", description: "Fast, fun, pick-up-and-play basketball arcade hits." },
  { slug: "simulator", name: "Simulator", description: "Realistic basketball simulator games online." },
  { slug: "multiplayer", name: "Multiplayer", description: "1v1 and 2-player basketball legends battles." },
  { slug: "classic", name: "Classic", description: "Legendary basketball games — unblocked and free." },
];

export const GAMES: Game[] = [
  { id: 1, slug: "basketball-stars", title: "Basketball Stars", iframe: "https://st.8games.net/7/igra-basketbol-golovami-na-dvoikh", category: "multiplayer",
    shortDescription: "Play Basketball Stars online — 1v1 and 2-player basketball legends action with star players.",
    description: "Basketball Stars is a fast-paced 1v1 and 2-player basketball legends game where you control star players, dunk on opponents, and shoot 3-pointers. Play unblocked, free, and right in your browser.",
    tags: ["basketball stars", "basketball legends unblocked", "2 player"] },
  { id: 2, slug: "basketball-stars-3", title: "Basketball Stars 3", iframe: "https://st.8games.net/dasha1/igry-nikelodeon/basketball-stars-three/en/", category: "multiplayer",
    shortDescription: "Basketball Stars 3 — third installment of the legendary unblocked basketball stars series.",
    description: "Basketball Stars 3 brings new courts, new stars and tighter controls to the iconic 2-player basketball legends franchise. Free, unblocked, and ready to play.",
    tags: ["basketball stars", "basketball legends", "free games"] },
  { id: 3, slug: "basketball-simulator", title: "Basketball Simulator", iframe: "https://g1.igru.net/6/igra-simulyator-basketbola/", category: "simulator",
    shortDescription: "Realistic basketball simulator — train, dunk and master the court online for free.",
    description: "Basketball Simulator delivers a realistic basketball physics experience right in your browser. Practice dunks, free throws, and 3-pointers in this free unblocked basketball game.",
    tags: ["basketball simulator", "basketball", "free games"] },
  { id: 4, slug: "basketball-school", title: "Basketball School", iframe: "https://st.8games.net/6/igra-shkola-basketbola/", category: "simulator",
    shortDescription: "Learn basketball fundamentals in this fun school-themed basketball training game.",
    description: "Basketball School teaches the basics of dribbling, passing and shooting in a friendly arcade format. A great basketball game for all ages — free and unblocked.",
    tags: ["basketball", "training", "free games"] },
  { id: 5, slug: "basketball-legends-2020", title: "Basketball Legends 2020", iframe: "https://st.8games.net/7/igra-legendy-basketbola-2020/index-en.html", category: "classic",
    shortDescription: "Basketball Legends 2020 unblocked — the cult 2-player b-ball brawler everyone loves.",
    description: "Basketball Legends 2020 is the legendary unblocked basketball game. Pick your star, dominate the court in 1v1 or 2-player mode, and pull off insane dunks and trick shots.",
    tags: ["basketball legends unblocked", "basketball legends 2020", "2 player"] },
  { id: 6, slug: "halloween-basketball-legends", title: "Halloween Basketball Legends", iframe: "https://st.8games.net/lib/ruffle/?game=https://st.8games.net/igra-basketbolnye-legendy-khellouina.swf", category: "classic",
    shortDescription: "Spooky Halloween edition of Basketball Legends — unblocked and free to play.",
    description: "Halloween Basketball Legends adds a creepy twist to the classic basketball legends formula. Choose monstrous players and battle on haunted courts. Free, unblocked.",
    tags: ["basketball legends unblocked", "halloween", "basketball"] },
  { id: 7, slug: "basketball-jam-shots", title: "Basketball Jam Shots", iframe: "https://st.8games.net/6/basketball-jam-shots/", category: "shooting",
    shortDescription: "Slam-dunk shooting fun — score epic jam shots in this fast basketball arcade.",
    description: "Basketball Jam Shots is a fast-paced shooting arcade where every basket counts. Aim, time your throw and rack up combos. Free basketball game, no download.",
    tags: ["basketball shots", "arcade", "free games"] },
  { id: 8, slug: "basketball-shots-3d", title: "Basketball Shots 3D", iframe: "https://st.8games.net/7/igra-basketbolnye-broski-3d/index-en.html", category: "shooting",
    shortDescription: "3D basketball shots — gorgeous physics-based shooting challenge in your browser.",
    description: "Basketball Shots 3D is a stunning 3D basketball shooting game. Aim with precision, master ball physics and complete every level. Free, unblocked, mobile-friendly.",
    tags: ["basketball shots", "3d", "free games"] },
  { id: 9, slug: "on-fire-basketball-shots", title: "On Fire: Basketball Shots", iframe: "https://st.8games.net/7/igra-v-ogne-basketbolnye-broski/", category: "shooting",
    shortDescription: "Light up the net — chain perfect shots and set the basketball on fire!",
    description: "On Fire: Basketball Shots rewards consecutive baskets with flame combos. Keep your streak alive, beat your high score and dominate the leaderboard.",
    tags: ["basketball shots", "arcade", "free"] },
  { id: 10, slug: "basketball-legends", title: "Basketball Legends", iframe: "https://st.8games.net/lib/ruffle/?game=https://st.8games.net/igra-legendy-basketbola.swf", category: "classic",
    shortDescription: "The original Basketball Legends — unblocked classic loved by millions of players.",
    description: "Basketball Legends is the original cult classic. Star-studded roster, smooth controls and pure 1v1 / 2-player basketball legends action. Unblocked and free forever.",
    tags: ["basketball legends unblocked", "basketball legends", "classic"] },
  { id: 11, slug: "flick-basketball", title: "Flick Basketball", iframe: "https://g1.igru.net/7/igra-flik-basketbol/", category: "arcade",
    shortDescription: "Flick the ball into the hoop — addictive one-touch basketball gameplay.",
    description: "Flick Basketball is a simple, addictive one-touch basketball game. Swipe to flick the ball, beat the clock and score as many baskets as possible.",
    tags: ["basketball", "arcade", "flick"] },
  { id: 12, slug: "basketball-master", title: "Basketball Master", iframe: "https://st.8games.net/7/igra-basketbol-profi/", category: "shooting",
    shortDescription: "Become the basketball master — pro-level shooting challenges await.",
    description: "Basketball Master pushes your shooting accuracy to the limit. Move, aim and time it right to clear every level in this unblocked basketball game.",
    tags: ["basketball", "master", "shooting"] },
  { id: 13, slug: "basketball-five-hoops", title: "Basketball Five Hoops", iframe: "https://st.8games.net/10/igra-pyat-broskov/", category: "shooting",
    shortDescription: "Five hoops, one ball — chain perfect shots in this shooting puzzle.",
    description: "Basketball Five Hoops is a tricky shooting puzzle where you must sink the ball into five hoops in a single throw. Free, unblocked, brain-teasing fun.",
    tags: ["basketball", "puzzle", "shots"] },
  { id: 14, slug: "basketball-star-2", title: "Basketball Star 2", iframe: "https://st.8games.net/10/igra-zvezda-basketbola-2/", category: "arcade",
    shortDescription: "Basketball Star 2 — rise from rookie to superstar in this arcade hit.",
    description: "Basketball Star 2 puts you on the path to superstardom. Score buckets, unlock players and rule the court. Free basketball game online.",
    tags: ["basketball star", "arcade", "free games"] },
  { id: 15, slug: "basketball-stars-2026", title: "Basketball Stars 2026", iframe: "https://st.8games.net/7/8g/igra-zvjozdy-basketbola-2026/", category: "multiplayer",
    shortDescription: "The 2026 edition of Basketball Stars — newest unblocked b-ball legends action.",
    description: "Basketball Stars 2026 brings the latest roster, new arenas and refined controls. The freshest unblocked basketball stars game — totally free.",
    tags: ["basketball stars", "basketball legends unblocked", "2026"] },
  { id: 16, slug: "basket-swooshes", title: "Basket Swooshes", iframe: "https://st.8games.net/7/igra-basketbol-brosok-so-svistom/", category: "shooting",
    shortDescription: "Hear that swoosh — perfect-net basketball shots in clean physics arcade.",
    description: "Basket Swooshes celebrates the satisfying sound of a perfect net. Time your shots and chain swooshes for max points.",
    tags: ["basketball shots", "arcade"] },
  { id: 17, slug: "helix-dunk-3d", title: "Helix Dunk 3D", iframe: "https://g1.igru.net/7/igra-kheliks-dank/", category: "arcade",
    shortDescription: "Helix Dunk 3D — bounce the basketball through the spinning helix tower.",
    description: "Helix Dunk 3D mixes hyper-casual helix gameplay with basketball. Bounce your ball through gaps without hitting obstacles. Addictive and free.",
    tags: ["helix", "dunk", "3d basketball"] },
  { id: 18, slug: "basket-champs", title: "Basket Champs", iframe: "https://st.8games.net/6/igra-chempionat-po-basketbolu/", category: "shooting",
    shortDescription: "Lead your country to victory in the Basket Champs world tournament.",
    description: "Basket Champs is a world-tournament basketball shooting game. Pick your country, defeat every rival and bring home the trophy. Free, unblocked.",
    tags: ["basketball", "tournament", "shooting"] },
  { id: 19, slug: "basket-champ-2", title: "Basket Champ 2", iframe: "https://st.8games.net/10/igra-chempion-basketbola-2/", category: "shooting",
    shortDescription: "Basket Champ 2 — sequel to the hit basketball tournament shooter.",
    description: "Basket Champ 2 takes the championship to the next level. Bigger tournaments, sharper aim, more glory. Free basketball games online.",
    tags: ["basketball", "champion", "free games"] },
  { id: 20, slug: "dunk-hoop", title: "Dunk Hoop", iframe: "https://g1.igru.net/igry-na-skorost-i-reaktsiyu/igra-pojmaj-myach/", category: "arcade",
    shortDescription: "Dunk Hoop — fast reaction basketball arcade. Catch every ball, miss none.",
    description: "Dunk Hoop tests your reflexes with non-stop falling basketballs. Move the hoop, catch them all and rack up combos.",
    tags: ["basketball", "reaction", "arcade"] },
  { id: 21, slug: "basket-random", title: "Basket Random", iframe: "https://st.8games.net/10/igra-sluchajnyj-basketbol/", category: "multiplayer",
    shortDescription: "Basket Random — hilarious 2-player physics basketball with random courts.",
    description: "Basket Random is a chaotic, ragdoll-physics 2-player basketball game where every round is a surprise. One button, endless laughs. Unblocked and free.",
    tags: ["basket random", "2 player", "physics", "basketball legends unblocked"] },
  { id: 22, slug: "shot-shot", title: "Shot Shot", iframe: "https://html5.gamedistribution.com/c2e862b3aded441daea92346bd5f8bbb/", category: "shooting",
    shortDescription: "Shot Shot — pure basketball shooting precision, level after level.",
    description: "Shot Shot is a minimalist basketball shooting game. Tap, aim, score. Crisp visuals, satisfying physics. Free and unblocked.",
    tags: ["basketball shots", "minimalist", "free games"] },
];

export const FEATURED_GAME = GAMES[0];

export function getGame(slug: string) { return GAMES.find(g => g.slug === slug); }
export function getCategory(slug: string) { return CATEGORIES.find(c => c.slug === slug); }
export function gamesByCategory(slug: Category) { return GAMES.filter(g => g.category === slug); }
export function relatedGames(slug: string, limit = 8) {
  const g = getGame(slug); if (!g) return [];
  return GAMES.filter(x => x.slug !== slug && x.category === g.category).concat(GAMES.filter(x => x.category !== g.category)).slice(0, limit);
}
