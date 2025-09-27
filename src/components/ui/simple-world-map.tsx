"use client";

interface MapProps {
  locations?: Array<{
    lat: number;
    lng: number;
    label?: string;
  }>;
  dotColor?: string;
}

export function SimpleWorldMap({
  locations = [],
  dotColor = "#422B21",
}: MapProps) {
  // Convert lat/lng to x/y coordinates on the map
  const projectPoint = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * 100;
    const y = ((90 - lat) / 180) * 100;
    return { x, y };
  };

  return (
    <div className="w-full aspect-[2/1] bg-gray-50 rounded-lg relative overflow-hidden">
      {/* Simplified SVG world map */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 360 180">
        <g fill="#d1d5db" opacity="0.3">
          {/* North America */}
          <path d="M50,40 Q70,35 90,40 L95,60 L85,75 L65,70 L55,55 Z" />

          {/* South America */}
          <path d="M75,85 L80,80 L85,85 L80,120 L70,130 L65,110 Z" />

          {/* Europe */}
          <path d="M175,35 L185,32 L195,35 L190,45 L180,42 Z" />

          {/* Africa */}
          <path d="M175,55 L185,50 L195,60 L190,90 L175,100 L165,80 Z" />

          {/* Asia */}
          <path d="M200,30 Q230,25 260,35 L270,55 L250,65 L220,55 L205,45 Z" />

          {/* Australia */}
          <path d="M270,110 L290,105 L300,115 L290,125 L270,120 Z" />
        </g>
      </svg>

      <svg
        viewBox="0 0 100 50"
        className="w-full h-full absolute inset-0"
        xmlns="http://www.w3.org/2000/svg"
      >

        {/* Location dots with correct positions */}
        {locations.map((location, i) => {
          // Adjust coordinates for better positioning
          let x, y;

          // Manual positioning for each city
          if (location.lat > 48 && location.lat < 49 && location.lng > 2 && location.lng < 3) {
            // Paris
            x = 49;
            y = 20;
          } else if (location.lat > 38 && location.lat < 39 && location.lng < -9) {
            // Lisbon
            x = 46;
            y = 22;
          } else if (location.lat > 51 && location.lat < 52 && location.lng > -1 && location.lng < 1) {
            // London
            x = 48.5;
            y = 18;
          } else if (location.lat < -20 && location.lng < -40) {
            // São Paulo
            x = 33;
            y = 38;
          } else {
            const point = projectPoint(location.lat, location.lng);
            x = point.x;
            y = point.y;
          }

          return (
            <g key={`location-${i}`}>
              {/* Main dot */}
              <circle
                cx={x}
                cy={y}
                r="0.8"
                fill={dotColor}
              />
              {/* Pulse effect */}
              <circle
                cx={x}
                cy={y}
                r="0.8"
                fill={dotColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="0.8"
                  to="2"
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