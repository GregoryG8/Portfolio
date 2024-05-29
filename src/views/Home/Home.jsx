import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { ReactTyped as Typed } from "react-typed";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

import "./Home.css";

function Home() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#fff",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#95c7fb",
        },
        links: {
          color: "#95c7fb",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 0.5,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );
  if (init) {
    return (
      <div style={{ overflow: "hidden" }}>
        <NavBar />
        <div className="text-container">
          <Particles
            id="tsparticles"
            className="particles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
          <div className="text-title">
            <Typed
              strings={["Hi, I'm Gregory Gonzalez"]}
              typeSpeed={50}
              backSpeed={30}
              startDelay={1000}
              backDelay={1500}
              loopCount={1}
              showCursor={false}
              className="title-typed"
            />
          </div>
          <div>
            <Typed
              strings={[
                "I'm a passionate Software Developer!",
                "I love creating stunning Frontend experiences.",
                "Let's turn ideas into reality together!",
                "Frontend Developer | Development Enthusiast | Lifelong Learner | Problem Solver",
                "Welcome to my portfolio!",
              ]}
              typeSpeed={30}
              backSpeed={30}
              startDelay={1000}
              backDelay={1500}
              loop
              showCursor
              cursorChar="|"
              className="text-typed"
            />
          </div>
        </div>
      </div>
    );
  }
  return <></>;
}

export default Home;
