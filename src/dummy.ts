import { CircleUser, KeyRound, Sailboat, Power } from "lucide-react";

export const companyPromises = [
  {
    id: 0,
    title: "Tailormade Adventures",
    description:
      "We specialize in tailoring each journey around our guest's specific interests or expectations. Our collection of perfect moments are often exclusive to Trekmunk, ensuring a unique adventure.",
    image: "/tailorMade.jpeg",
  },
  {
    id: 1,
    title: "Travel with Heart",
    description:
      'Our core ethos of "Care of the Land and People" drives all that we do. When you travel with us you make a small contribution to the “Trek for a Cause” initiative which helps people and nature in the remote areas.',
    image: "/travelWithHeart.jpeg",
  },
  {
    id: 2,
    title: "Finest Guides",
    description:
      "You can expect the finest experience from our incredible private, specialist and trained trek leaders, guides and local support team.",
    image: "/finestGuides.jpeg",
  },
  {
    id: 3,
    title: "Eco-friendly & Paperless",
    description:
      "We are completely paperless, you don't have to print anything; all will be done online. All our adventure operations are eco-friendly and we have been trying to go plastic-free as a part of our sustainable tourism approach.",
    image: "/ecoFriendly.jpeg",
  },
];

export const reviews = [
  {
    id: 0,
    trekTitle: "Sandakphu Trek",
    userName: "Ahmed Orabi",
    userDescription:
      "I had an amazing trek with Trekmunk to Sandakphu November and December 2019. From the first moment of inquiry about the trek and all my questions were answered clearly and on time thanks to Dheeraj who managed to facilitate the trek quite well with his communication. Our guide Arpan was very experienced, calm, patient and very helpful to each trekker's needs in the group. He facilitated to find and hire a porter for me once I needed one although we were in the middle of the trail. He also arranged emergency transportation when I had to cut the trek and go back home for an urgent matter. I really enjoyed their service and I would like to repeat the same trek or try other treks with them again.",
    ratings: 4,
  },
  {
    id: 1,
    trekTitle: "Sandakphu Trek",
    userName: "Ahmed Orabi",
    userDescription:
      "I had an amazing trek with Trekmunk to Sandakphu November and December 2019. From the first moment of inquiry about the trek and all my questions were answered clearly and on time thanks to Dheeraj who managed to facilitate the trek quite well with his communication. Our guide Arpan was very experienced, calm, patient and very helpful to each trekker's needs in the group. He facilitated to find and hire a porter for me once I needed one although we were in the middle of the trail. He also arranged emergency transportation when I had to cut the trek and go back home for an urgent matter. I really enjoyed their service and I would like to repeat the same trek or try other treks with them again.",
    ratings: 4,
  },
  {
    id: 2,
    trekTitle: "Sandakphu Trek",
    userName: "Ahmed Orabi",
    userDescription:
      "I had an amazing trek with Trekmunk to Sandakphu November and December 2019. From the first moment of inquiry about the trek and all my questions were answered clearly and on time thanks to Dheeraj who managed to facilitate the trek quite well with his communication. Our guide Arpan was very experienced, calm, patient and very helpful to each trekker's needs in the group. He facilitated to find and hire a porter for me once I needed one although we were in the middle of the trail. He also arranged emergency transportation when I had to cut the trek and go back home for an urgent matter. I really enjoyed their service and I would like to repeat the same trek or try other treks with them again.",
    ratings: 4,
  },
];

export const trekMunkInfo = {
  line1:
    "Trekmunk is one of the best trekking companies in India, and firmly believes in the beauty of personalized and custom-made adventures. Primarily an adventure company, Trekmunk aims to discard the notion of packaged trips and is on the way to revolutionize trekking in India. With well-experienced trek leaders and expert guides, we offer you an extensive adventure platter, consisting of the best treks in India. Our travel experts also help you customize and frame your trip itineraries as per your preference. You also get a first-hand experience of planning your own trip instead of relying on a travel agent. Over the years, we have had the privilege of having led over thousands of trekkers across the country. Book trekking tours with us, and learn how to be a proper alpinist.",
  line2:
    "If you’re sick of the same old trekking packages in India, contact us for an adventure that’ll remain etched in your memory forever. Amongst the best trek organizers in India, we also know how to pay back to the society - check our ‘Trek For A Cause’ page for more. Book your hiking tours and backpacking trips with Trekmunk, and rid yourselves of the monotony of packaged trips. Pick from a comprehensive list of treks in India, customize it as per your taste, and bingo!",
};

export const popularTreks ={
  title:"The popular trek are : ",
  content:"Brahmatal Trek, Sandakphu Trek, Pin Bhaba Pass Trek, Har Ki Dun Trek, Buran Ghati Trek, Audens Col Trek, Pin Parvati Trek, Bhrigu Lake Trek, Markha Valley Trek, Snow Leopard Trek, Dayara Bugyal Trek, Bara Bhangal Trek, Pangarchulla Trek, Beas Kund Trek, Bali Pass Trek, Kang Yatse Trek, Kuari Pass Trek, Chandrashila Trek, Gaumukh Tapovan Trek, Deo Tibba Trek, Hampta Pass Trek, Sham Valley Trek, Kedartal Trek, Panpatia Col Trek, Stok Kangri Trek, Goechala Trek, Parang La Trek, Tarsar Marsar Trek, Mentok Kangri Expedition, Valley Of Flowers Trek"
}

export const profileOptions = [
  {id:0,title:"My Profile",icon:CircleUser},
  {id:1,title:"Security",icon:KeyRound},
  {id:2,title:"My bookings",icon:Sailboat},
  {id:3,title:"Logout",icon:Power},
]

const user = {
  firstName: "sdsd",
  lastName: "sds",
  email: "ciyame1586@hidelux.com",
  password: "7ac37455cceb865a898f8ff42b340b97f0474b1a81596a267b02f456645a5436",
  phoneNumber: "7678336946",
  isEmailValid: false,
  isPhoneNumberValid: false,
  image: "/user.png",
  gender: "Male",
  age: 17,
  rewardPoints: 0,
  role: "user",
};

export const defaultValueOfUser = typeof user;