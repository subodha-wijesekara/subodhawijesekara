"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./LivePortfolio.module.css";
import PortfolioModal from "./PortfolioModal";

// Reusing the same data structure for consistency, can be expanded independently
const PORTFOLIO_ITEMS = [
    {
        id: 1,
        title: "UI & UX Design",
        category: "Design System",
        image: "/images/uiux1.png",
        gallery: ["/images/uiux2.png", "/images/uiux3.png", "/images/uiux4.png"]
    },
    {
        id: 2,
        title: "Mobile Solutions",
        category: "App Design",
        image: "/images/ma1.png",
        gallery: ["/images/ma2.png", "/images/ma3.png"]
    },
    {
        id: 3,
        title: "Weather App",
        category: "Interface",
        image: "/images/wea1.png",
        gallery: ["/images/wea2.png", "/images/wea3.png"]
    },
    {
        id: 4,
        title: "Task Manager",
        category: "Productivity",
        image: "/images/tma1.png",
        gallery: ["/images/tm1.png", "/images/tm2.png"]
    },
    {
        id: 5,
        title: "Ergonomics",
        category: "Concept",
        image: "/images/eg1.png",
        gallery: ["/images/eg2.png", "/images/eg3.png"]
    },
    {
        id: 6,
        title: "Dashboard",
        category: "Web App",
        image: "/images/atp1.png",
        gallery: ["/images/atp2.png", "/images/atp3.png"]
    }
];

export default function LivePortfolio() {
    const [selectedItem, setSelectedItem] = useState<(typeof PORTFOLIO_ITEMS)[0] | null>(null);

    return (
        <>
            <div className={styles.grid}>
                {PORTFOLIO_ITEMS.map((item) => (
                    <div
                        key={item.id}
                        className={styles.card}
                        onClick={() => setSelectedItem(item)}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className={styles.overlay}>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.category}>{item.category}</p>
                        </div>
                    </div>
                ))}
            </div>

            <PortfolioModal
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                item={selectedItem}
            />
        </>
    );
}
