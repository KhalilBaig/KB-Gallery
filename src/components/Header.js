import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <h1>📸 KB Gallery</h1>

            <h2>Capturing Moments, Preserving Memories</h2>

            <p>
                Welcome to <strong>KB Gallery</strong>, where every photograph tells a
                unique story. Explore stunning landscapes, vibrant city views,
                breathtaking wildlife, and timeless moments captured by passionate
                photographers. Let every image inspire your imagination and showcase
                the beauty that surrounds us.
            </p>

            <button>Explore Gallery</button>
        </header>
    );
};

export default Header;