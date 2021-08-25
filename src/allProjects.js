// language icon images
import reactIcon from "./assets/languages/react.png";
import cssIcon from "./assets/languages/css.png";
import firebaseIcon from "./assets/languages/firebase.png";
import javascriptIcon from "./assets/languages/javascript.png";
import tailwindIcon from "./assets/languages/tailwind.png";
import sassIcon from "./assets/languages/sass.png";
import htmlIcon from "./assets/languages/html.png";
import sqlIcon from "./assets/languages/sql.png";
import phpIcon from "./assets/languages/php.png";
import rubyIcon from "./assets/languages/ruby.png";
import pythonIcon from "./assets/languages/python.png";
import nodeIcon from "./assets/languages/node.png";
import photoshopIcon from "./assets/languages/photoshop.png";
import illustratorIcon from "./assets/languages/illustrator.png";
import excelIcon from "./assets/languages/excel.PNG";
import mysqlIcon from "./assets/languages/mysql.PNG";
import gitIcon from "./assets/languages/git.png";

// Instagram project images
import instagramImg1 from "./assets/projects/react/instagram/instagram-1.PNG";
import instagramImg2 from "./assets/projects/react/instagram/instagram-2.png";
import instagramImg3 from "./assets/projects/react/instagram/instagram-3.PNG";
import instagramImg4 from "./assets/projects/react/instagram/instagram-4.gif";
import instagramImg5 from "./assets/projects/react/instagram/instagram-5.gif";
import instagramImg6 from "./assets/projects/react/instagram/instagram-6.gif";
// Game & Seek project images
import gameNseekImg1 from "./assets/projects/react/gameNseek/gameNseek-1.PNG";
import gameNseekImg2 from "./assets/projects/react/gameNseek/gameNseek-2.png";
import gameNseekImg3 from "./assets/projects/react/gameNseek/gameNseek-3.png";
import gameNseekImg4 from "./assets/projects/react/gameNseek/gameNseek-4.gif";
// HoopShop project images
import hoopShopImg1 from "./assets/projects/react/hoopShop/hoopShop-1.PNG";
import hoopShopImg2 from "./assets/projects/react/hoopShop/hoopShop-2.png";
// CV Builder project images
import cvBuilderImg1 from "./assets/projects/react/cvBuilder/cvBuilder-1.png";
import cvBuilderImg2 from "./assets/projects/react/cvBuilder/cvBuilder-2.png";
// Battleship project images
import battleshipImg1 from "./assets/projects/react/battleship/battleship-1.png";
import battleshipImg2 from "./assets/projects/react/battleship/battleship-2.png";
// NBA Memory Game project images
import memoryGameImg1 from "./assets/projects/react/memoryGame/memoryGame-1.png";
import memoryGameImg2 from "./assets/projects/react/memoryGame/memoryGame-2.png";
// Tic Tac Toe project images
import ticTacToe1 from "./assets/projects/games/ticTacToe/ticTacToe-1.png";
import ticTacToe2 from "./assets/projects/games/ticTacToe/ticTacToe-2.png";
// Rock Paper Scissors project images
import rockPaperScissors1 from "./assets/projects/games/rockPaperScissors/rockPaperScissors-1.png";
import rockPaperScissors2 from "./assets/projects/games/rockPaperScissors/rockPaperScissors-2.png";
// Responsive Design Project images
import responsiveDesignImg1 from "./assets/projects/webDesign/responsiveDesign/responsiveDesign-1.PNG";
import responsiveDesignImg2 from "./assets/projects/webDesign/responsiveDesign/responsiveDesign-2.PNG";
import responsiveDesignImg3 from "./assets/projects/webDesign/responsiveDesign/responsiveDesign-3.png";
import responsiveDesignImg4 from "./assets/projects/webDesign/responsiveDesign/responsiveDesign-4.png";
import responsiveDesignImg5 from "./assets/projects/webDesign/responsiveDesign/responsiveDesign-5.gif";
// Pseudo Class Project images
import pseudoClassImg1 from "./assets/projects/webDesign/pseudoClass/pseudoClass-1.png";
import pseudoClassImg2 from "./assets/projects/webDesign/pseudoClass/pseudoClass-2.gif";
// HTML Form Project images
import htmlFormImg1 from "./assets/projects/webDesign/htmlForm/htmlForm-1.png";
import htmlFormImg2 from "./assets/projects/webDesign/htmlForm/htmlForm-2.gif";
// Embedding Video & Images Project images
import embedImg1 from "./assets/projects/webDesign/embed/embed-1.png";
import embedImg2 from "./assets/projects/webDesign/embed/embed-2.gif";
// Embedding Video & Images Project images
import gridFrameworkImg1 from "./assets/projects/webDesign/gridFramework/gridFramework-1.png";
import gridFrameworkImg2 from "./assets/projects/webDesign/gridFramework/gridFramework-2.gif";
// Backgrounds & Gradients Project images
import gradientImg1 from "./assets/projects/webDesign/gradient/gradient-1.png";

// react projects
export const instagramProjectData = {
  id: "1",
  icons: [
    { id: "1", icon: reactIcon, color: "react" },
    { id: "2", icon: tailwindIcon, color: "tailwind" },
    { id: "3", icon: firebaseIcon, color: "firebase" },
  ],
  title: "Instagram Clone",
  desc: "An Instagram re-creation built with React, Tailwind CSS, and Firebase. This is a fully functional and responsive app that allows users to create an account, post & crop photos, delete posts, comment, like/unlike, follow/unfollow, and change their avatar.",
  imgs: [
    { id: "img-1", src: instagramImg1 },
    { id: "img-2", src: instagramImg2 },
    { id: "img-3", src: instagramImg3 },
    { id: "img-4", src: instagramImg4 },
    { id: "img-5", src: instagramImg5 },
    { id: "img-6", src: instagramImg6 },
  ],
  repository: "https://github.com/KFig21/instagram_clone",
  live: "https://kfig21.github.io/instagram_clone/",
};

export const gameNseekProjectData = {
  id: "2",
  icons: [
    { id: "1", icon: reactIcon, color: "react" },
    { id: "2", icon: firebaseIcon, color: "firebase" },
    { id: "3", icon: cssIcon, color: "css" },
  ],
  title: "Game & Seek",
  desc: "A 'Where's Waldo' character finding game, this project was built with React and uses Firebase for a backend database. The game features 8 unique levels and a global leaderboard that updates in realtime. Explicit user names submitted to the leaderboard are censored with emojis.",
  imgs: [
    { id: "img-1", src: gameNseekImg1 },
    { id: "img-2", src: gameNseekImg2 },
    { id: "img-3", src: gameNseekImg3 },
    { id: "img-4", src: gameNseekImg4 },
  ],
  repository: "https://github.com/KFig21/photo_tagging_app",
  live: "https://kfig21.github.io/photo_tagging_app/",
};

export const hoopShopProjectData = {
  id: "3",
  icons: [
    { id: "1", icon: reactIcon, color: "react" },
    { id: "2", icon: javascriptIcon, color: "javascript" },
    { id: "3", icon: cssIcon, color: "css" },
  ],
  title: "HoopShop",
  desc: "A mock online storefront built with React, the goal of this project was to implement Browser Router, Routes, Link, & Switch from React Router DOM. Shoppers can add items to their cart which dynamically updates instantly thanks to React hooks.",
  imgs: [
    { id: "img-1", src: hoopShopImg1 },
    { id: "img-2", src: hoopShopImg2 },
  ],
  repository: "https://github.com/KFig21/shopping_cart",
  live: "https://kfig21.github.io/shopping_cart/",
};

export const cvBuilderProjectData = {
  id: "4",
  icons: [
    { id: "1", icon: reactIcon, color: "react" },
    { id: "2", icon: javascriptIcon, color: "javascript" },
    { id: "3", icon: cssIcon, color: "css" },
  ],
  title: "CV Builder",
  desc: "A CV builder built with React that instantly updates upon data entry. The app allows users to add/remove experience and education entries and even view an example of how a completed CV should look. Finally, users can save the CV preview as a PDF file or even print it out for their own use.",
  imgs: [
    { id: "img-1", src: cvBuilderImg1 },
    { id: "img-2", src: cvBuilderImg2 },
  ],
  repository: "https://github.com/KFig21/cv_application",
  live: "https://kfig21.github.io/cv_application/",
};

// games
export const battleshipProjectData = {
  id: "5",
  icons: [
    { id: "1", icon: reactIcon, color: "react" },
    { id: "2", icon: javascriptIcon, color: "javascript" },
    { id: "3", icon: cssIcon, color: "css" },
  ],
  title: "Battleship",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  imgs: [
    { id: "img-1", src: battleshipImg1 },
    { id: "img-2", src: battleshipImg2 },
  ],
  repository: "https://github.com/KFig21/battleship",
  live: "https://kfig21.github.io/battleship/",
};

export const nbaMemoryGameProjectData = {
  id: "6",
  icons: [
    { id: "1", icon: reactIcon, color: "react" },
    { id: "2", icon: javascriptIcon, color: "javascript" },
    { id: "3", icon: cssIcon, color: "css" },
  ],
  title: "NBA Memory Game",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  imgs: [
    { id: "img-1", src: memoryGameImg1 },
    { id: "img-2", src: memoryGameImg2 },
  ],
  repository: "https://github.com/KFig21/memory_card_project",
  live: "https://kfig21.github.io/memory_card_project/",
};

export const ticTacToeProjectData = {
  id: "7",
  icons: [
    { id: "1", icon: reactIcon, color: "react" },
    { id: "2", icon: javascriptIcon, color: "javascript" },
    { id: "3", icon: sassIcon, color: "sass" },
  ],
  title: "Tic Tac Toe",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  imgs: [
    { id: "img-1", src: ticTacToe1 },
    { id: "img-2", src: ticTacToe2 },
  ],
  repository: "https://github.com/KFig21/tic_tac_toe_react",
  live: "https://kfig21.github.io/tic_tac_toe_react/",
};

export const rockPaperScissorsProjectData = {
  id: "8",
  icons: [
    { id: "1", icon: htmlIcon, color: "html" },
    { id: "2", icon: javascriptIcon, color: "javascript" },
    { id: "3", icon: cssIcon, color: "css" },
  ],
  title: "Rock Paper Scissors",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  imgs: [
    { id: "img-1", src: rockPaperScissors1 },
    { id: "img-2", src: rockPaperScissors2 },
  ],
  repository: "https://github.com/KFig21/rock_paper_scissors",
  live: "https://kfig21.github.io/rock_paper_scissors/",
};

export const responsiveDesignProjectData = {
  id: "10",
  icons: [
    { id: "1", icon: htmlIcon, color: "html" },
    { id: "2", icon: cssIcon, color: "css" },
  ],
  title: "Responsive Design Project",
  desc: "",
  imgs: [
    { id: "img-1", src: responsiveDesignImg1 },
    { id: "img-2", src: responsiveDesignImg2 },
    { id: "img-3", src: responsiveDesignImg3 },
    { id: "img-4", src: responsiveDesignImg4 },
    { id: "img-5", src: responsiveDesignImg5 },
  ],
  repository: "https://github.com/KFig21/the_next_web_page",
  live: "https://kfig21.github.io/the_next_web_page/",
};

export const pseudoClassDesignProjectData = {
  id: "11",
  icons: [
    { id: "1", icon: htmlIcon, color: "html" },
    { id: "2", icon: cssIcon, color: "css" },
  ],
  title: "Pseudo Class Design",
  desc: "",
  imgs: [
    { id: "img-1", src: pseudoClassImg1 },
    { id: "img-2", src: pseudoClassImg2 },
  ],
  repository: "https://github.com/KFig21/design_teardown",
  live: "https://kfig21.github.io/design_teardown/",
};

export const htmlFormProjectData = {
  id: "12",
  icons: [
    { id: "1", icon: reactIcon, color: "react" },
    { id: "2", icon: htmlIcon, color: "html" },
    { id: "3", icon: cssIcon, color: "css" },
  ],
  title: "HTML Form Project",
  desc: "",
  imgs: [
    { id: "img-1", src: htmlFormImg1 },
    { id: "img-2", src: htmlFormImg2 },
  ],
  repository: "https://github.com/KFig21/mailchimp_form",
  live: "https://kfig21.github.io/mailchimp_form/",
};

export const embedProjectData = {
  id: "13",
  icons: [
    { id: "1", icon: htmlIcon, color: "html" },
    { id: "2", icon: cssIcon, color: "css" },
  ],
  title: "Embedding Video & Images Project",
  desc: "",
  imgs: [
    { id: "img-1", src: embedImg1 },
    { id: "img-2", src: embedImg2 },
  ],
  repository: "https://github.com/KFig21/youtube_page",
  live: "https://kfig21.github.io/youtube_page/",
};

export const gridBasedFrameworkProjectData = {
  id: "14",
  icons: [
    { id: "1", icon: htmlIcon, color: "html" },
    { id: "2", icon: cssIcon, color: "css" },
  ],
  title: "Grid-based Framework",
  desc: "",
  imgs: [
    { id: "img-1", src: gridFrameworkImg1 },
    { id: "img-2", src: gridFrameworkImg2 },
  ],
  repository: "https://github.com/KFig21/top_homepage",
  live: "https://kfig21.github.io/top_homepage/",
};

export const gradientProjectData = {
  id: "15",
  icons: [
    { id: "1", icon: htmlIcon, color: "html" },
    { id: "2", icon: cssIcon, color: "css" },
  ],
  title: "Backgrounds & Gradients Project",
  desc: "",
  imgs: [{ id: "img-1", src: gradientImg1 }],
  repository: "https://github.com/KFig21/apple_page",
  live: "https://kfig21.github.io/apple_page/",
};

// languages and skills
export const languages = [
  {
    name: "Javascript",
    icon: javascriptIcon,
    exp: "2",
  },
  {
    name: "CSS",
    icon: cssIcon,
    exp: "2",
  },
  {
    name: "HTML",
    icon: htmlIcon,
    exp: "2",
  },
  {
    name: "SQL",
    icon: sqlIcon,
    exp: "2",
  },
  {
    name: "PHP",
    icon: phpIcon,
    exp: "1",
  },
  {
    name: "Ruby",
    icon: rubyIcon,
    exp: "1",
  },
  {
    name: "Python",
    icon: pythonIcon,
    exp: "1",
  },
  {
    name: "Sass",
    icon: sassIcon,
    exp: "1",
  },
];

export const techData = [
  {
    name: "Git",
    icon: gitIcon,
    exp: "1",
  },
  {
    name: "Node",
    icon: nodeIcon,
    exp: "1",
  },
  {
    name: "React",
    icon: reactIcon,
    exp: "1",
  },
  {
    name: "Firebase",
    icon: firebaseIcon,
    exp: "1",
  },
];

export const otherSkills = [
  {
    name: "Photoshop",
    icon: photoshopIcon,
    exp: "5",
  },
  {
    name: "Illustrator",
    icon: illustratorIcon,
    exp: "5",
  },
  {
    name: "Excel",
    icon: excelIcon,
    exp: "15",
  },
  {
    name: "MySQL",
    icon: mysqlIcon,
    exp: "1",
  },
];
