import React from "react";
import "./style.css";

export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="Card">{children}</div>;
}
