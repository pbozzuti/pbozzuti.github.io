import React from "react";
import PropTypes from "prop-types";
import Button from './Components/Button'; 
import ChickenRunner from "./Components/ChickenRunner";

// Youtube Embed Component
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

// Main Component - App.js
const App = () => {
    return (
        <div 
          className="flex flex-col w-screen h-screen justify-center items-center space-y-10"
          style={{ backgroundImage: 'url("/minecraft_bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <h1> <b> PARIS LAND </b> </h1>
            <p> i am paris, this is my land :)</p>
            {/* Uncomment this section if you'd like to embed a YouTube video */}
            {/* 
            <h1>Youtube Embed</h1>
            <YoutubeEmbed embedId={"FgVtrqtTR_Y?si=JstbhdHMqcPTQZPA"}/>
            */}
            {/* Wrapping the Button in a centering container */}
            <div className="flex justify-center w-full">
                {/* Uncomment the buttons if needed */}
                {/* 
                <Button url='https://pbozzuti.github.io/' text='lets play bruh' />
                <Button url= 'https://egggame.org/' text = 'egg me bruh' />
                <Button url='https://classic.minecraft.net/' text='minecraft but bad' />
                */}
            </div>

            {/* Chicken Runner Game */}
            <ChickenRunner />
        </div>
    );
};

export default App;
