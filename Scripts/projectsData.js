// Projects Data
const projects = [
    /* Template
    {
        id: "id",
        title: "Template",
        shortDesc: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, ",
        longDesc: "quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, ",
        goals: "neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. ",
        features: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?",
        images: ["Images/UnderConstruction.png", "Images/FoxInSnow.jpg", "Images/Minto.png", "Images/JupiPipebomb.png"],
        links: [
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                url: "https://github.com/Loris-Moreau/TimTam_3D-Engine" }
            ]
    }, 
    */
    // TimTam
    {
        id: "TimTamEngine",
        title: "TimTam Engine",
        shortDesc: "A 3D Game Engine able to make shooters, mouvements & factory type games",
        longDesc: "A 3D game engine which would allows anyone to easily create shooters, mouvement or management games and even highly narrative driven games.",
        goals: "Create a 3D Game Engine where I can easily develop games like; Doom, Descent, Outer Wilds, Barony, Factorio, Mirrors Edge, etc...",
        features: "Physics, File management, Audio, Object loader, Debug Tools, chat box that accepts commands, couch co-op, Particle System, Shaders, Polylines (curves), Level Editor, imgui, Pathfinding, Animation, Event System",
        images: ["Images/UnderConstruction.png"],
        
        links: [
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                url: "https://github.com/Loris-Moreau/TimTam_3D-Engine" }
            ]
    },
    // 3D Engine
    {
        id: "3D Engine",
        title: "3D Engine",
        shortDesc: "A Render Engine with a controllable entity, lights & objects.",
        longDesc: "This is a 3D Game Engine in roughly 2 months, & later I worked on it for another 2 weeks to implement a descent like game.",
        goals: "Create a rendering engine to learn the inner working of 3D engine & experiment with rendering techniques and engine pipeline.",
        features: "DirectX Rendering Pipeline, Lights, Object loader, Sizeable window",
        images: ["Images/Showcase/3D-Engine.gif", "Images/Showcase/Descent-Game.gif"],

        links: [
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                url: "https://github.com/Loris-Moreau/3D-Engine-CPP" }
        ]
    },
    // Raytracing
    {
        id: "Raytracing",
        title: "Raytracing",
        shortDesc: "My Adventure following the \"Raytracing in one weekend series\" and then optimizing it.",
        longDesc: "My Adventure following the \"Raytracing in one weekend series\" and then optimizing it using compute shaders, SIMD & Multithreading.",
        goals: "The goal was to make a raytracer but I the realised how slow and calculation intensive it was so I optimized as much as necessary (from 5hrs to just a few seconds.",
        features: "A simple Raytracer where you can load scenes or make your own. the repository has the main branch with the original raytracer and the compute shaders branch which is the optimized version.",
        images: ["Images/RayTracing/Final Render (B1).png", "Images/RayTracing/Cornell's Box (B2, P8).png", "Images/RayTracing/Final Render high-Res (B2).png", 
            "Images/RayTracing/computeShaderRenderCornell.png", "Images/RayTracing/computeShaderRenderB2.png", "Images/RayTracing/computeShaderRenderScen01.png"],
        
        links: [
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                url: "https://github.com/Loris-Moreau/RayTracing" },
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                url: "https://github.com/Loris-Moreau/RayTracing/tree/Compute-Shader" }
            ]
    },
    // Conway
    {
        id: "GameLife",
        title: "Game of Life",
        shortDesc: "A C++ implementation of Conway's Game of Life using a sparse data structure for an infinite grid & built with GLFW, Glad, ImGui, and OpenGL.",
        longDesc: "A C++ implementation of Conway's Game of Life using a sparse data structure for an infinite grid & built with GLFW, Glad, ImGui, and OpenGL.",
        goals: "The goal was to learn ImGui and dabble in OpenGl as well as 0 player Games, I've always found conway's Game of Life interesting; being able to make a Turing complete Program with so few rules.",
        features: "Infinite sparse grid representation, only live cells are stored, optimising memory; Adjustable simulation speed and camera panning; Cell toggling with mouse click; controls via ImGui; Visual grid overlay and smooth rendering using OpenGL points.",
        images: ["Images/Showcase/GliderGun.gif", "Images/Showcase/GliderGun.png"],
        
        links: [
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                url: "https://github.com/Loris-Moreau/Game-of-Life" }
            ]
    },
    // Houdini
    {
        id: "Houdini",
        title: "Houdini",
        shortDesc: "Collection of Houdini Tools",
        longDesc: "Houdini tools made to learn the software and once again experiment with the software.",
        goals: "Learn, experiment and make cool stuff along the way that I could bring into Game Engines.",
        features: "Modular Houdini Tools",
        images: ["Images/Showcase/Houdini-Showcase.gif"],
        
        links: [
            { icon: "Images/Logos/houdini_badge_flat.svg" }
        ]
    },
    // UE AI
    {
        id: "UEAISys",
        title: "UE AI System",
        shortDesc: "Unreal Engine AI System",
        longDesc: "Unreal Engine 5 AI System",
        goals: "Make an AI that would feel like an actual person without making the game they would be in too difficult.",
        features: "Multiple types of enemies using Behaviour Trees, Custom Tasks, Environment Queries, Pawn Sensing & Nav Mesh",
        images: ["Images/Showcase/UE-AI-5.png", "Images/Showcase/UE-AI-4.png", "Images/Showcase/UE-AI-3.png", "Images/Showcase/UE-AI-2.png", "Images/Showcase/UE-AI-1.png", "Images/Showcase/UE-AI-6.png"],
        
        links: [
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                url: "https://github.com/Loris-Moreau/Enemy_AI" }
            ]
    },
    // UE VFX
    {
        id: "UEVFX",
        title: "UE VFX",
        shortDesc: "VFXs in Unreal Engine.",
        longDesc: "A lot of shader & VFXs in UE 5.",
        goals: "Make and experiment with shaders that I could use in my projects.",
        features: "Shaders of all shapes & sizes.",
        images: ["Images/Showcase/UE-VFX-1.png", "Images/Showcase/UE-VFX-3.png", "Images/Showcase/UE-VFX-5.png", "Images/Showcase/UE-VFX-2.png", "Images/Showcase/UE-VFX-4.png"],
        
        links: [
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
        ]
        //github: "https://github.com/Loris-Moreau/VFX_Testing"
    },
    // Unity VFX
    {
        id: "UnityVFX",
        title: "Unity VFX",
        shortDesc: "VFXs in Unity.",
        longDesc: "bunch of shaders in Unity to test out it's capabilities.",
        goals: "Make shaders that I could use in my Games & test out the shaders system of unity.",
        features: "Optimized Shaders of all shapes & sizes.",
        images: ["Images/Showcase/Unity-Adv-Shaders.gif", "Images/Showcase/Unity-Shader.gif"],
        
        links: [
            { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                url: "https://github.com/Loris-Moreau/Advanced-Shaders" }
            ]
    },
    // Windows Adventure
    {
        id: "WA",
        title: "Windows Adventure",
        shortDesc: "This is a prototype I made to learn Godot and it's window spawning mechanic.",
        longDesc: "It's a platformer in which windows will appear along your path some to help and other just to block your view.",
        goals: "Lear Godot and experiment with the window management system.",
        features: "Simple platformer with a modular window spawner that overlays custom shaders over images or videos.",
        images: ["Images/Showcase/WA2.png", "Images/Showcase/WA1.png", "Images/Showcase/WA3.png"],

        links: [
            { icon: "Images/Logos/Itchio.svg",
                url: "https://loris-moreau.itch.io/windows-adventure" }
        ]
    },
    // BBA
    {
        id: "BBA",
        title: "Battle Boules Arena",
        shortDesc: "Global Game Jam 2024 entry",
        longDesc: "It's a multiplayer where you play with your friends and bump your balls together until there's only one left.",
        goals: "The theme of this Jam was \"Make Me Laugh\" and we decided to make an 4 player arcade type game like a Mario Party minigame.",
        features: "Roll around and bump the other players off the platform, power ups/gadgets will drop from the sky.",
        images: ["Images/Showcase/BBALogo.png", "Images/Showcase/BBA-1.png"],

        links: [
            { icon: "Images/Logos/GGJ_Logo_Light.svg",
                url: "https://globalgamejam.org/games/2024/battle-boule-arena-4-0" }
        ]
    },
    
    // Should I add Hardware Showcases ??
];
