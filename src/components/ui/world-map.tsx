"use client";

import { useRef } from "react";
import DottedMap from "dotted-map";
import Image from "next/image";

interface MapProps {
  locations?: Array<{
    lat: number;
    lng: number;
    label?: string;
  }>;
  dotColor?: string;
}

export function WorldMap({
  locations = [],
  dotColor = "#422B21",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.3,
    color: "#d1d5db",
    shape: "circle",
    backgroundColor: "transparent",
  });

  const projectPoint = (lat: number, lng: number) => {
    // Mercator projection adjustment
    const x = (lng + 180) * (800 / 360);
    const latRad = (lat * Math.PI) / 180;
    const mercN = Math.log(Math.tan((Math.PI / 4) + (latRad / 2)));
    const y = 200 - (200 * mercN) / Math.PI;
    return { x, y };
  };


  return (
    <div className="w-full aspect-[2/1] bg-transparent rounded-lg relative font-sans">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {/* Location dots */}
        {locations.map((location, i) => {
          const point = projectPoint(location.lat, location.lng);
          return (
            <g key={`location-${i}`}>
              <circle
                cx={point.x}
                cy={point.y}
                r="3"
                fill={dotColor}
              />
              <circle
                cx={point.x}
                cy={point.y}
                r="3"
                fill={dotColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="3"
                  to="10"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}