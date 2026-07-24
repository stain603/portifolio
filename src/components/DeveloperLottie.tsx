import { useLottie } from "lottie-react";
import { useEffect, useState } from "react";

type LottieData = Record<string, unknown>;

function LottiePlayer({ animationData }: { animationData: LottieData }) {
  const { View } = useLottie({
    animationData,
    loop: true,
  });

  return <div className="h-full w-full">{View}</div>;
}

export function DeveloperLottie() {
  const [animationData, setAnimationData] = useState<LottieData | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/animations/Developer.json")
      .then((response) => {
        if (!response.ok) throw new Error("Animation not found");
        return response.json();
      })
      .then((data: LottieData) => {
        if (!cancelled) setAnimationData(data);
      })
      .catch(() => {
        if (!cancelled) setAnimationData(null);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!animationData) {
    return (
      <div
        className="portfolio-card flex h-72 w-full max-w-md items-center justify-center md:h-96"
        aria-hidden
      >
        <span className="text-5xl text-[#22C55E]">{"</>"}</span>
      </div>
    );
  }

  return (
    <div
      className="portfolio-card flex h-72 w-full max-w-md items-center justify-center p-4 md:h-96"
      aria-label="Ilustração animada de desenvolvedor"
    >
      <LottiePlayer animationData={animationData} />
    </div>
  );
}
