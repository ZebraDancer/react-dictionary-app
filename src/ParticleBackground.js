import React from "react";
import "./ParticleBackground.css";
import Particles from "react-tsparticles";
import partConfiguration from "./particle-configuration";

export default function ParticleBackground() {
  return <Particles params={partConfiguration}></Particles>;
}
