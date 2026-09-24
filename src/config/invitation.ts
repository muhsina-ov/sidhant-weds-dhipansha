/**
 * SINGLE SOURCE OF TRUTH FOR THIS INVITATION.
 * To reuse this template for a new couple, edit ONLY this file.
 */

const storyOne = "/images/story-tea.jpg";
const storyTwo = "/images/story-family.jpg";
const storyThree = "https://media.invitestory.in/rajwada-royale-alt/src/assets/story-3.jpg";
const galleryOne = "https://media.invitestory.in/rajwada-royale-alt/src/assets/gallery-1.jpg";
const galleryTwo = "https://media.invitestory.in/rajwada-royale-alt/src/assets/gallery-2.jpg";
const galleryThree = "/images/gallery-mandap-night.jpg";
const galleryFour = "/images/gallery-vintage-car.jpg";

export type InviteEvent = {
  key: string;
  name: string;
  /** ISO 8601 with timezone offset */
  startsAt: string;
  /** duration in minutes, used for calendar entries */
  durationMinutes: number;
  venue: string;
  address: string;
  mapUrl?: string;
  dressCode?: string;
  dressCodeColor?: string;
  note?: string;
};

export const invitation = {
  couple: {
    groom: "Siddhant",
    groomFull: "Siddhant",
    bride: "Dipansha",
    brideFull: "Dipansha",
    monogram: "S & D",
    hashtag: "#GroverSharmaGayi",
  },

  /** The main wedding muhurat — powers countdown and primary save-the-date */
  mainEvent: {
    title: "Siddhant & Dipansha — Wedding",
    startsAt: "2026-11-25T19:00:00+05:30",
    durationMinutes: 240,
    dateLabel: "Wednesday, 25 November 2026",
    timeLabel: "7:00 PM onwards",
    day: "25",
    month: "November",
    year: "2026",
    weekday: "Wednesday",
  },

  families: {
    groomSide: {
      name: "Siddhant",
      grandparents: "Lt. Smt. Mewa Devi & Lt. Shri J.N. Sharma",
      parents: "Smt. Neeru Sharma & Shri Vijay Sharma",
      relation: "Grandson of Lt. Smt. Mewa Devi & Lt. Shri J.N. Sharma",
      parentRelation: "Son of Smt. Neeru Sharma & Shri Vijay Sharma",
    },
    brideSide: {
      name: "Dipansha",
      grandparents: "Lt. Smt. Kailash Vati Grover & Lt. Shri Tilak Raj Grover",
      parents: "Smt. Jyoti Grover & Shri Rajeev Grover",
      relation: "Granddaughter of Lt. Smt. Kailash Vati Grover & Lt. Shri Tilak Raj Grover",
      parentRelation: "Daughter of Smt. Jyoti Grover & Shri Rajeev Grover",
    },
  },

  invitationNote:
    "With the divine blessings of our beloved elders and the grace of God, we cordially invite you and your family to celebrate the auspicious wedding of Siddhant & Dipansha. Your presence and blessings will make our special day even more memorable.",

  story: [
    {
      year: "2023",
      title: "Talking Over Tea",
      text: "Talking over tea one fine day and beginning a beautiful journey together.",
      image: storyOne,
    },
    {
      year: "2025",
      title: "Families Come Together",
      text: "Two loving families coming together with heartfelt traditions, too many sweets, and blessings.",
      image: storyTwo,
    },
    {
      year: "2026",
      title: "Forever Begins",
      text: "Stepping into eternity with sacred vows and lifelong companionship.",
      image: storyThree,
    },
  ],

  events: [
    {
      key: "bhajan-sandhya",
      name: "Bhajan Sandhya",
      startsAt: "2026-10-31T19:00:00+05:30",
      durationMinutes: 180,
      venue: "GC Grand",
      address: "Vaibhav Khand, Indirapuram, Ghaziabad",
      mapUrl: "https://share.google/kRG2iz4IcPbuPDcG9",
      dressCode: "Traditional / Ethnic",
      dressCodeColor: "#C9A84C",
      note: "An evening of divine music, devotion and blessings.",
    },
    {
      key: "sagan-ceremony",
      name: "Sagan Ceremony",
      startsAt: "2026-11-14T19:00:00+05:30",
      durationMinutes: 240,
      venue: "Rudrakshaa Banquet",
      address: "1st Floor, Sector 4, Vaishali, Ghaziabad",
      mapUrl: "https://maps.app.goo.gl/dCJ4XttZsFLLdpaZ9?g_st=ic",
      dressCode: "Festive Glamour",
      dressCodeColor: "#93202E",
      note: "Join us for an auspicious evening of celebrations and shagun.",
    },
    {
      key: "wedding",
      name: "Wedding",
      startsAt: "2026-11-25T19:00:00+05:30",
      durationMinutes: 300,
      venue: "The Rajwada Palace – The Legend",
      address: "Maharaja Hall, GT Karnal Road, Ashok Vihar, Delhi",
      mapUrl: "https://maps.app.goo.gl/MW16bXXxEpGfJ334A?g_st=ic",
      dressCode: "Royal Traditional",
      dressCodeColor: "#C9A84C",
      note: "Baraat assembly followed by Varmala, Dinner & Phere.",
    },
  ] satisfies InviteEvent[],

  venue: {
    name: "The Rajwada Palace – The Legend (Maharaja Hall)",
    address: "GT Karnal Road, Ashok Vihar, Delhi, 110033",
    mapUrl: "https://maps.app.goo.gl/MW16bXXxEpGfJ334A?g_st=ic",
    lat: 28.696,
    lng: 77.182,
    directionsNote: "Valet parking available at the Maharaja Hall entrance.",
  },

  gallery: [
    { src: galleryOne, alt: "Celebrations and festive moments" },
    { src: galleryTwo, alt: "Joyful ceremonies and laughter" },
    { src: galleryThree, alt: "Auspicious mandap and sacred blessings" },
    { src: galleryFour, alt: "Together forever" },
  ],

  closing: {
    blessing: "Your gracious presence and warm blessings are our cherished gifts as we begin our new journey.",
    signOff: "With warm regards & blessings,",
  },

  contacts: [
    { name: "Sharma Family", phone: "+919811122334" },
    { name: "Grover Family", phone: "+919877788990" },
  ],
} as const;

export type Invitation = typeof invitation;
