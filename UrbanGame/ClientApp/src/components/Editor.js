import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import ActionBar from './editor/ActionBar';
import PatternPicker from './editor/PatternPicker';
import './editor.css';

const COLOR = new THREE.Color(0xE5E5E5);

function Editor(props) {
    const [id, setId] = useState(new URL(window.location.href).searchParams.get("project"));
    const [proj, setProj] = useState(null);
    const [local, setLocal] = useState({ mounted: false });
    var scene, renderer, camera, frameId;
    var mount = React.createRef();

    useEffect(() => {
        scene = new THREE.Scene();
        scene.background = COLOR;

        renderer = new THREE.WebGLRenderer({ antialias: true, autoSize: true });
        renderer.setClearColor(COLOR);
        renderer.physicallyCorrectLights = true;
        renderer.shadowMap.enabled = true;

        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1000, 1000000);
        camera.position.set(-30000 / 2, -30000, 30000);
        camera.up.set(0, 0, 1);
        camera.lookAt(0, 0, 0);

        if (local.mounted === false) {
            local.mounted = true;
            mount.appendChild(renderer.domElement);
        }
        animate();
        onResize();
        window.addEventListener('resize', onResize);
        start();
        return function cleanup() {
            stop();
            if (mount !== null) {
                mount.removeChild(renderer.domElement);
            }
            if (proj !== null) proj.finalize();
        };
    }, []);

    function start() { if (!frameId) { frameId = requestAnimationFrame(animate) } }

    function stop() { cancelAnimationFrame(frameId) }

    function animate() {
        renderer.render(scene, camera);
        frameId = window.requestAnimationFrame(animate);
    }

    function onResize() {
        try {
            let width = window.innerWidth / 2;
            let height = window.innerHeight;
            if (height < 1) height = 1;
            camera.aspect = width / height;
            renderer.setSize(width, height);
            camera.updateProjectionMatrix();
        } catch (e) { console.warn(e.message) }
    }

    return (
        <div id='editor'>
            <div id='webgl' ref={(m) => { mount = m }} />
        </div>
    );
}

export default Editor;