import React from "react";

interface LeadershipProfileProps {
  id: number;
  img: string;
  pastor_name: string;
  title: string;
  description: string;
  tel?: string;
}

export const Leadership_profile_card: React.FC<LeadershipProfileProps> = ({
  img,
  pastor_name,
  title,
  description,
  tel,
}) => {
  return (
    <div
      className="relative bg-center bg-cover overflow-hidden shadow-lg group h-[420px] flex items-end   transition-transform duration-500 hover:scale-[1.03]"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500"></div>

      {/* Blurred Content Background */}
      <div className="relative z-10 w-full p-6 py-1 backdrop-blur-md bg-white/30">
        <h2 className="text-2xl font-bold uppercase mb-1 tracking-wide text-white">
          {pastor_name}
        </h2>
        <h6 className="text-red-400 font-semibold mb-3">{title}</h6>
        <p className="text-sm text-gray-200 leading-relaxed mb-3 line-clamp-4">
          {description}
        </p>
        {tel && (
          <p className="text-sm font-medium text-gray-100">
            Tel: <span className="text-gray-300">{tel}</span>
          </p>
        )}
      </div>
    </div>
  );
};
