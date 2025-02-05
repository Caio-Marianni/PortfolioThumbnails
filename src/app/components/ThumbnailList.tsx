import React from "react";
import ThumbCard from "./utils/ThumbCard";
import { thumbnails } from "@/core/constants/index";

const ThumbnailList: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {thumbnails.map((thumb) => (
        <ThumbCard 
          key={thumb.id} 
          image={thumb.cover} 
          // title={thumb.title} 
          tags={thumb.tags} 
        />
      ))}
    </div>
  );
};

export default ThumbnailList;
