import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);
  return (
    <>
      <h2 className="animate__animated animate__flash">{category}</h2>
      {loading && <p className="animate__animated animate__pulse">Loading</p>}

      <hr></hr>

      {data.map((img) => (
        <GifGridItem key={img.id} {...img} />
      ))}
    </>
  );
};
