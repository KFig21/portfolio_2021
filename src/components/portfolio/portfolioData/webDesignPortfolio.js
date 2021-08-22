// Responsive Design Project images
import responsiveDesignImg1 from "../../../assets/projects/webDesign/responsiveDesign/responsiveDesign-1.PNG";
import responsiveDesignImg2 from "../../../assets/projects/webDesign/responsiveDesign/responsiveDesign-2.PNG";
import responsiveDesignImg3 from "../../../assets/projects/webDesign/responsiveDesign/responsiveDesign-3.png";
import responsiveDesignImg4 from "../../../assets/projects/webDesign/responsiveDesign/responsiveDesign-4.png";
import responsiveDesignImg5 from "../../../assets/projects/webDesign/responsiveDesign/responsiveDesign-5.gif";
// Pseudo Class Project images
import pseudoClassImg1 from "../../../assets/projects/webDesign/pseudoClass/pseudoClass-1.png";
import pseudoClassImg2 from "../../../assets/projects/webDesign/pseudoClass/pseudoClass-2.gif";
// HTML Form Project images
import htmlFormImg1 from "../../../assets/projects/webDesign/htmlForm/htmlForm-1.png";
import htmlFormImg2 from "../../../assets/projects/webDesign/htmlForm/htmlForm-2.gif";
// Embedding Video & Images Project images
import embedImg1 from "../../../assets/projects/webDesign/embed/embed-1.png";
import embedImg2 from "../../../assets/projects/webDesign/embed/embed-2.gif";
// Embedding Video & Images Project images
import gridFrameworkImg1 from "../../../assets/projects/webDesign/gridFramework/gridFramework-1.png";
import gridFrameworkImg2 from "../../../assets/projects/webDesign/gridFramework/gridFramework-2.gif";
// Backgrounds & Gradients Project images
import gradientImg1 from "../../../assets/projects/webDesign/gradient/gradient-1.png";

// language icon images
import reactIcon from "../../../assets/languages/react.png";
import cssIcon from "../../../assets/languages/css.png";
import htmlIcon from "../../../assets/languages/html.png";

export const webDesignPortfolio = [
  {
    id: "1",
    icon: [
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
  },
  {
    id: "2",
    icon: [
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
  },
  {
    id: "3",
    icon: [
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
  },
  {
    id: "4",
    icon: [
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
  },
  {
    id: "5",
    icon: [
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
  },
  {
    id: "6",
    icon: [
      { id: "1", icon: htmlIcon, color: "html" },
      { id: "2", icon: cssIcon, color: "css" },
    ],
    title: "Backgrounds & Gradients Project",
    desc: "",
    imgs: [{ id: "img-1", src: gradientImg1 }],
    repository: "https://github.com/KFig21/apple_page",
    live: "https://kfig21.github.io/apple_page/",
  },
];
