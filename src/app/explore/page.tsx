"use client";

import { useState } from "react";
import LiveVideos from "@/components/LiveVideos";
import LivePortfolio from "@/components/LivePortfolio";
import Projects from "@/components/Projects";

type Tab = "videos" | "portfolio" | "projects";

export default function ExplorePage() {
    const [activeTab, setActiveTab] = useState<Tab>("videos");

    return (
        <div className="container">
            <div style={{ paddingTop: "6rem", textAlign: "center", marginBottom: "4rem" }}>
                <h1 className="text-gradient" style={{ fontSize: "3.5rem", fontWeight: "700", marginBottom: "1rem" }}>
                    Explore
                </h1>
                <p style={{ color: "var(--accents-5)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                    A dynamic showcase of my latest work, designs, and development logs.
                </p>

                {/* Tab Navigation */}
                <div style={{
                    display: "inline-flex",
                    marginTop: "3rem",
                    background: "var(--glass-bg)",
                    padding: "4px",
                    borderRadius: "99px",
                    border: "1px solid var(--glass-border)",
                    position: "relative"
                }}>
                    <TabButton
                        isActive={activeTab === "videos"}
                        onClick={() => setActiveTab("videos")}
                        label="Videos"
                    />
                    <TabButton
                        isActive={activeTab === "portfolio"}
                        onClick={() => setActiveTab("portfolio")}
                        label="Portfolio"
                    />
                    <TabButton
                        isActive={activeTab === "projects"}
                        onClick={() => setActiveTab("projects")}
                        label="Projects"
                    />
                </div>
            </div>

            {/* Tab Content */}
            <div style={{ minHeight: "400px" }}>
                {activeTab === "videos" && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <LiveVideos />
                    </div>
                )}

                {activeTab === "portfolio" && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <LivePortfolio />
                    </div>
                )}

                {activeTab === "projects" && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <Projects />
                    </div>
                )}
            </div>
        </div>
    );
}

function TabButton({ isActive, onClick, label }: { isActive: boolean; onClick: () => void; label: string }) {
    return (
        <button
            onClick={onClick}
            style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "99px",
                border: "none",
                background: isActive ? "rgba(255,255,255,0.1)" : "transparent",
                color: isActive ? "var(--foreground)" : "var(--accents-5)",
                fontWeight: isActive ? 600 : 400,
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontSize: "0.95rem"
            }}
        >
            {label}
        </button>
    );
}
