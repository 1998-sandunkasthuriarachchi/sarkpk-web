import React from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';

const unityContext = new UnityContext({
    loaderUrl: 'build/Test3.loader.js',
    dataUrl: 'build/Test3.data',
    frameworkUrl: 'build/Test3.framework.js',
    codeUrl: 'build/Test3.wasm'
});

const UnityDummy = () => {
    return (
        <div>
            <Unity style={{ width: '100%' }} unityContext={unityContext} />
        </div>
    );
};

export default UnityDummy;
