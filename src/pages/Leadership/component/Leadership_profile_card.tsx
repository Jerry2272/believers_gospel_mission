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
      className="relative bg-center bg-cover overflow-hidden shadow-lg group h-[450px] flex items-end"
      style={{ backgroundImage: `url(${img})` , backgroundSize: 'cover', backgroundPosition: 'center right'}}
    >
      {/* Overlay for darkening background */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/70 transition-all duration-300"></div>

      {/* Blurred Glass Text Box */}
      <div className="relative z-10 w-full p-6 py-2 backdrop-blur-md bg-white/10 group-hover:bg-white/20 transition-all duration-300">
        <h2 className="text-[20px] font-bold uppercase mb-1 tracking-wide text-white drop-shadow">
          {pastor_name}
        </h2>
        <h6 className="font-semibold mb-3 text-white/70">{title}</h6>
        <p className="text-sm text-gray-100 leading-relaxed mb-3 line-clamp-4">
          {description}
        </p>
        {tel && (
          <p className="text-sm font-medium text-gray-200">
            Tel: <span className="text-gray-100">{tel}</span>
          </p>
        )}
      </div>
    </div>
  );
};
