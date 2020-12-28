import React from "react";
import MenuItem from "../menu-item/MenuItem";
import "./Directory.scss";

const Directory = () => {
  // ALL THE SECTIONS HERE
  const sections = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://images.pexels.com/photos/1460036/pexels-photo-1460036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      routeUrl: "hats",
    },
    {
      id: 2,
      title: "hoodies",
      imageUrl:
        "https://images.pexels.com/photos/634785/pexels-photo-634785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      routeUrl: "hoodies",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl:
        "https://images.pexels.com/photos/1102776/pexels-photo-1102776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      routeUrl: "sneakers",
    },
    {
      id: 4,
      title: "women collection",
      imageUrl:
        "https://images.pexels.com/photos/2212951/pexels-photo-2212951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      routeUrl: "women",
      size: "large",
    },
    {
      id: 5,
      title: "man collection",
      imageUrl:
        "https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      routeUrl: "men",
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
          routeUrl={section.routeUrl}
        />
      ))}
    </div>
  );
};

export default Directory;
