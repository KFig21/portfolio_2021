// Instagram project images
import instagramImg1 from "../../assets/projects/react/instagram/instagram-1.PNG";
import instagramImg2 from "../../assets/projects/react/instagram/instagram-2.png";
import instagramImg3 from "../../assets/projects/react/instagram/instagram-3.PNG";
import instagramImg4 from "../../assets/projects/react/instagram/instagram-4.gif";
import instagramImg5 from "../../assets/projects/react/instagram/instagram-5.gif";
import instagramImg6 from "../../assets/projects/react/instagram/instagram-6.gif";
// Game & Seek project images
import gameNseekImg1 from "../../assets/projects/react/gameNseek/gameNseek-1.PNG";
import gameNseekImg2 from "../../assets/projects/react/gameNseek/gameNseek-2.png";
import gameNseekImg3 from "../../assets/projects/react/gameNseek/gameNseek-3.png";
import gameNseekImg4 from "../../assets/projects/react/gameNseek/gameNseek-4.gif";
// HoopShop project images
import hoopShopImg1 from "../../assets/projects/react/hoopShop/hoopShop-1.PNG";
import hoopShopImg2 from "../../assets/projects/react/hoopShop/hoopShop-2.png";
// language icon images
import reactIcon from "../../assets/languages/react.png";
import cssIcon from "../../assets/languages/css.png";
import firebaseIcon from "../../assets/languages/firebase.png";
import javascriptIcon from "../../assets/languages/javascript.png";
import tailwindIcon from "../../assets/languages/tailwind.png";

export const projectData = [
  {
    id: "1",
    icons: [
      { id: "1", icon: reactIcon, color: "react" },
      { id: "2", icon: tailwindIcon, color: "tailwind" },
      { id: "3", icon: firebaseIcon, color: "firebase" },
    ],
    title: "Instagram Clone",
    desc: "An Instagram re-creation built with React, Tailwind CSS, and Firebase. A fully functional and responsive app that allows users to create an account, post photos, like, comment, follow/unfollow, and change their avatar.",
    imgs: [
      instagramImg1,
      instagramImg2,
      instagramImg3,
      instagramImg4,
      instagramImg5,
      instagramImg6,
    ],
    repository: "https://github.com/KFig21/instagram_clone",
    live: "https://kfig21.github.io/instagram_clone/",
  },
  {
    id: "2",
    icons: [
      { id: "1", icon: reactIcon, color: "react" },
      { id: "2", icon: firebaseIcon, color: "firebase" },
      { id: "3", icon: cssIcon, color: "css" },
    ],
    title: "Game & Seek",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgs: [gameNseekImg1, gameNseekImg2, gameNseekImg3, gameNseekImg4],
    repository: "https://github.com/KFig21/photo_tagging_app",
    live: "https://kfig21.github.io/photo_tagging_app/",
  },
  {
    id: "3",
    icons: [
      { id: "1", icon: reactIcon, color: "react" },
      { id: "2", icon: javascriptIcon, color: "javascript" },
      { id: "3", icon: cssIcon, color: "css" },
    ],
    title: "HoopShop",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgs: [hoopShopImg1, hoopShopImg2],
    repository: "https://github.com/KFig21/shopping_cart",
    live: "https://kfig21.github.io/shopping_cart/",
  },
];
