# MIF for React

Metro Icon Font for React.

## Install
```shell
npm i -S @metroui/icons
```

## Using
```javascript
import React from "react";
import { createRoot } from 'react-dom/client';
import { MifIcon} from "../src"

const App = () => {
    return (
        <>
            <MifIcon name="share"/>
            <MifIcon name="cog" size="4x"/>
        </>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />, );
```

## Sizes
You can use size from default to: `2x` ... `10x`.

## Icon names
All icon names are available at https://metroui.org.ua/icons.html 