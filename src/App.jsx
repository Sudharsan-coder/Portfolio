import React, { useState } from "react";
import Layout from "./components/Layouts/Main.jsx";
import Main from "./components/Frames/combiner.jsx";
import { MantineProvider, Text } from "@mantine/core";

export default function App() {
    const [isBlack, setBlack] = useState(true);
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <div
                className="main"
                style={isBlack ? { color: "white" } : { color: "black" }}
            >
                <Layout mode={isBlack} setMode={setBlack} />
                <Main />
                {/* <div className="background-frame">
                    <img src=".\src\assets\circuit.jpg" alt="black" />
                </div> */}
            </div>
        </MantineProvider>
    );
}
