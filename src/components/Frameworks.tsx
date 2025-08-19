import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "java",
    "spring",
    "git",
    "typescript",
    "react",
    "nextjs",
    "nodejs",
    "mongodb",
    "docker",
    "aws",
    "python",
    "flask",
    "flutter",
    "solidity",
    "kafka",
    "firebase",
    "threejs",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40} className="" reverse={false}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles
        iconSize={25}
        radius={100}
        reverse
        speed={2}
        className=""
      >
        {[...skills].reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }: { src: string }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
