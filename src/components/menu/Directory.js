import React from "react";
import MenuItem from "../menu-item/MenuItem";
import "./Directory.scss";

const Directory = () => {
  // ALL THE SECTIONS HERE
  const sections = [
    {
      id: 0,
      title: "hats",
      imageUrl:
        "https://images.pexels.com/photos/1460036/pexels-photo-1460036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      pageUrl: "hats",
    },
    {
      id: 1,
      title: "hoodies",
      imageUrl:
        "https://images.pexels.com/photos/634785/pexels-photo-634785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      pageUrl: "hoodies",
    },
    {
      id: 2,
      title: "sneakers",
      imageUrl:
        "https://images.pexels.com/photos/1102776/pexels-photo-1102776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      pageUrl: "",
    },
    {
      id: 3,
      title: "women collection",
      imageUrl:
        "https://images.pexels.com/photos/2212951/pexels-photo-2212951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      pageUrl: "",
      size: "large",
    },
    {
      id: 4,
      title: "man collection",
      imageUrl:
        "https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      pageUrl: "",
      size: "large",
    },
  ];

  return (
    <div className="directory">
      {sections.map((section) => (
        <MenuItem
          key={section.id}
          title={section.title}
          imageUrl={section.imageUrl}
          size={section.size}
          pageUrl={section.pageUrl}
        />
      ))}
    </div>
  );
};

export default Directory;
