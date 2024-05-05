import React from "react";

interface BackdropProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Backdrop: React.FC<BackdropProps> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute backdrop-blur grid items-center justify-center z-10 top-0 w-full h-full bg-primary/5"
    >
      {children}
    </div>
  );
};

export default Backdrop;
