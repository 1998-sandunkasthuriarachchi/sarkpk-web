import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

const UnityDummy = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: 'build/myunityapp.loader.js',
        dataUrl: 'build/myunityapp.data',
        frameworkUrl: 'build/myunityapp.framework.js',
        codeUrl: 'build/myunityapp.wasm'
    });

    return <Unity useUnityContext={unityProvider}></Unity>;
};

export default UnityDummy;
