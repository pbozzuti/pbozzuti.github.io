"use client";

import React from "react";
import PropTypes from "prop-types";
import Button from '../Components/Button'; 
import ChickenRunner from "../Components/ChickenRunner";


const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
  
  YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };

export default function ParisLand() {
    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center space-y-10">
            <h1>PARIS LAND</h1>
            <p> i am paris, this is my land :)</p>
            <h1>Youtube Embed</h1>
            <YoutubeEmbed embedId={"FgVtrqtTR_Y?si=JstbhdHMqcPTQZPA"}/>
            {/* Wrapping the Button in a centering container */}
            <div className="flex justify-center w-full">
                <Button url='https://pbozzuti.github.io/' text='lets play bruh' />
                <Button url= 'https://egggame.org/' text = 'egg me bruh' />
                <Button url='https://classic.minecraft.net/' text='minecraft but bad' />
            </div>

            <ChickenRunner />
        </div>
    );
}
