declare module "@/components/ShapeGrid" {
  import type { FC } from "react";

  type ShapeGridProps = {
    direction?: "right" | "left" | "up" | "down" | "diagonal";
    speed?: number;
    borderColor?: string;
    squareSize?: number;
    hoverFillColor?: string;
    shape?: "square" | "hexagon" | "triangle" | "circle";
    hoverTrailAmount?: number;
    className?: string;
  };

  const ShapeGrid: FC<ShapeGridProps>;
  export default ShapeGrid;
}
