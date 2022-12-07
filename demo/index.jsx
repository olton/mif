import React from "react";
import { createRoot } from 'react-dom/client';
import { MifIcon} from "../src"

const App = () => {
    return (
        <>
            <MifIcon name="share" size="4x"/>
            <MifIcon name="cog" size="4x"/>
        </>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />, );