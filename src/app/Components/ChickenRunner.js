import { useEffect, useState, useRef } from "react";

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function ChickenRunner() {
    const [maxX, setMaxX] = useState(window.innerWidth);
    const [maxY, setMaxY] = useState(window.innerHeight);
    const [chickenLoc, setChickenLoc] = useState({ x: -100, y: -100 });
    const [isMoving, setIsMoving] = useState(true); // Track movement state

    const directionRef = useRef({ x: 0, y: 0 });

    // Handle window resizing
    useEffect(() => {
        const handleResize = () => {
            setMaxX(window.innerWidth*0.5);
            setMaxY(window.innerHeight*0.5);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function getMovementRad() {
        return getRandomInt(0, 360) * (Math.PI / 180);
    }

    function initChicken() {
        if (maxX === 0 || maxY === 0) return;

        const startingX = getRandomInt(50, maxX - 50);
        const startingY = getRandomInt(50, maxY - 50);

        const movementRad = getMovementRad();
        const newDirection = {
            x: Math.cos(movementRad),
            y: Math.sin(movementRad),
        };

        directionRef.current = newDirection; // Store latest direction
        setChickenLoc({ x: startingX, y: startingY });

        console.log("🐔 Chicken initialized at:", { x: startingX, y: startingY });
        console.log("➡️ Direction set to:", newDirection);
    }

    useEffect(() => {
        if (maxX > 0 && maxY > 0) {
            initChicken();
        }
    }, [maxX, maxY]);

    useEffect(() => {
        if (!isMoving) return; // Skip interval if chicken is not moving

        function AdvanceXY() {
            setChickenLoc((prev) => {
                const newX = prev.x + directionRef.current.x * 10;
                const newY = prev.y + directionRef.current.y * 10;

                console.log(`🐔 Moving to: { x: ${newX}, y: ${newY} }`);

                if (newX > maxX || newX < 0 || newY > maxY || newY < 0) {
                    console.log("🐔 Out of bounds, resetting...");
                    initChicken();
                    return prev;
                }

                return { x: newX, y: newY };
            });
        }

        const interval = setInterval(AdvanceXY, 50);
        return () => clearInterval(interval);
    }, [maxX, maxY, isMoving]); 
    const handleClick = () => {
        setIsMoving((prevState) => !prevState); // Toggle movement state
        console.log(isMoving ? "🐔 Stopped!" : "🐔 Started!");
    };

    return (
        <div className="chicken-runner" style={{ position: "relative", width: "100%", height: "100vh" }}>
            <img
                src="/better_chicken.png"
                key={`${chickenLoc.x}-${chickenLoc.y}`} // Force React to re-render the image when position changes
                className="absolute z-50"
                onClick={handleClick} // Handle click to stop/start
                style={{
                    scale: 2,
                    width: "50px", // Adjust size if needed
                    height: "50px", // Adjust size if needed
                    left: `${chickenLoc.x}px`,
                    top: `${chickenLoc.y}px`,
                    position: "absolute",
                    zIndex: 100,
                }}
            />
        </div>
    );
}
