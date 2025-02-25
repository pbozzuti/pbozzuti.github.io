import { useEffect, useState } from "react"


const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function ChickenRunner() {

    const [maxX, setMaxX] = useState(0);
    const [maxY, setMaxY] = useState(0);

    useEffect(() => {
        setMaxX(window.innerWidth);
        setMaxY(window.innerHeight);
    }, []);

    function getMovementRad() {
        return getRandomInt(0, 360) * (Math.PI / 180);
    }


    const [chickenLoc, setChickenLoc] = useState({x : -100, y : -100});
    const [chickenDirection, setChickenDirection] = useState({x : 0, y : 0});

    function initChicken() {
        const startingX = getRandomInt(0, maxX);
        const startingY = getRandomInt(0, maxY);

        const movementRad = getMovementRad;

        const direction = {
            x : Math.cos(movementRad),
            y : Math.sin(movementRad)
        }

        setChickenLoc({
            x : startingX,
            y : startingY,
        });

        setChickenDirection(direction);

    }

    

    useEffect(() => {
        function AdvanceXY() {
            setChickenLoc((prev) => {
                const newX = prev.x + chickenDirection.x * 10;
                const newY = prev.y + chickenDirection.y * 10;

                // chicken moves off-screen, reset it
                if (newX > maxX || newX < 0 || newY > maxY || newY < 0) {
                    initChicken();
                    return prev;
                }

                return { x: newX, y: newY };

            });
        }

        const interval = setInterval(AdvanceXY, 1000);

        return () => clearInterval(interval);

    }, [chickenDirection])

    return (
        <div className="chicken-runner">
            <img src='/better_chicken.png' className="absolute z-50" 
                style ={{
                    scale : "0.2",
                    zIndex : 100,
                    left : `${chickenLoc.x}px`,
                    top : `${chickenLoc.y}px`,
                }}
            />
        </div>
    )
}
