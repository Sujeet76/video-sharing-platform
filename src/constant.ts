import home from "@/assets/home.svg";
import like from "@/assets/like.svg";
import collection from "@/assets/collection.svg";
import history from "@/assets/history.svg";
import content from "@/assets/content.svg";
import subscriptions from "@/assets/subscriptions.svg";
import channel from "@/assets/channel.svg";

export const sidebar = [
  { icon: home, title: "Home", link: "/" },
  { icon: like, title: "Liked Video", link: "/liked-video" },
  { icon: history, title: "History", link: "/history" },
  { icon: content, title: "My Content", link: "/my-content" },
  { icon: collection, title: "Collection", link: "/collection" },
  { icon: subscriptions, title: "Subscribers", link: "/subscribers" },
  { icon: channel, title: "Channel", link: "/channel" },
];
