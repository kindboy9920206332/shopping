import { imageConfigDefault } from "next/dist/shared/lib/image-config";

export default function Star_Point_avg({ children }) {
  const number_star = [1, 2, 3, 4, 5];
  return (
    <>
      {" "}
      {number_star.map((item) =>
        item <= children ? (
          <svg
            className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[20px] lg:h-[20px]"
            key={item}
            viewBox="0 0 24 24"
            fill={item <= children ? "#FFD700" : "#CCCCCC"}
            style={{
              display: "inline",
              cursor: "pointer",
              margin: "0px 3px",
              filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",

              transform: "scale(1.2)",
            }}
          >
            <path
              d="M12 .587l3.668 7.431L24 9.75l-6 5.844 1.417 8.261L12 18.896l-7.417 4.96L6 15.594 0 9.75l8.332-1.732L12 .587z"
              stroke="black"
              strokeWidth="0.5"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            key={item}
            className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[20px] lg:h-[20px]"
            viewBox="0 0 24 24"
            fill="#CCCCCC"
            style={{
              display: "inline",
              cursor: "pointer",
              margin: "0px 3px",
              filter: "none",

              transform: "scale(1)",
            }}
          >
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
