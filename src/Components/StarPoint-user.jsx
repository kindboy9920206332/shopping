"use client";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { useEffect, useState } from "react";

export default function Star_Point_user() {
  const number_star = [1, 2, 3, 4, 5];
  const [number, set_number] = useState();

  return (
    <>
      {number_star.map((item) =>
        item <= number ? (
          <svg
            onClick={() => set_number(() => item)}
            key={item}
            height="20px"
            width="20px"
            viewBox="0 0 24 24"
            fill="url(#goldGradient)"
            style={{
              display: "inline",
              cursor: "pointer",
              margin: "0px 3px",
              filter:
                item <= number
                  ? "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
                  : "none",
              transition: "transform 0.2s",
              transform: "scale(1.2)",
            }}
          >
            <defs>
              <linearGradient
                id="goldGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#FFD700", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#FFA500", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              d="M12 .587l3.668 7.431L24 9.75l-6 5.844 1.417 8.261L12 18.896l-7.417 4.96L6 15.594 0 9.75l8.332-1.732L12 .587z"
              stroke="black"
              strokeWidth="0.5"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            onClick={() => set_number(() => item)}
            key={item}
            height="20px"
            width="20px"
            viewBox="0 0 24 24"
            fill="#CCCCCC"
            style={{
              display: "inline",
              cursor: "pointer",
              margin: "0px 3px",
              filter:
                item <= number
                  ? "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
                  : "none",
              transition: "transform 0.2s",
              transform: "scale(1)",
            }}
          >
            <defs>
              <linearGradient
                id="goldGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#FFD700", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#FFA500", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              d="M12 .587l3.668 7.431L24 9.75l-6 5.844 1.417 8.261L12 18.896l-7.417 4.96L6 15.594 0 9.75l8.332-1.732L12 .587z"
              stroke="black"
              strokeWidth="0.5"
              strokeLinejoin="round"
            />
          </svg>
        )
      )}
    </>
  );
}
