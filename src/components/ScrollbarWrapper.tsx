"use client";

import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

interface ScrollbarWrapperProps {
  children: React.ReactNode;
}

const ScrollbarWrapper: React.FC<ScrollbarWrapperProps> = ({ children }) => {
  return (
    <div style={{ height: "100vh" }}>
      <PerfectScrollbar option={{ suppressScrollX: true }}>
        {children}
      </PerfectScrollbar>
    </div>
  );
};

export default ScrollbarWrapper;
