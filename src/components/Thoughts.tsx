"use client";

import { useState } from "react";
import styles from "./Thoughts.module.css";
import { ArrowUpRight } from "lucide-react";
import ThoughtsModal from "./ThoughtsModal";

interface Thought {
    id: number;
    title: string;
    date: string;
    content: string;
}

const THOUGHTS: Thought[] = [
    {
        id: 1,
        title: "The Future of Web Development",
        date: "Dec 2025",
        content: "Web development is evolving rapidly. With the rise of AI-assisted coding, edge computing, and full-stack frame works like Next.js, the barrier to entry is lowering while the ceiling for performance is getting higher.\n\nWe are moving towards a web that is more personalized, faster, and more accessible than ever before. Server actions and React Server Components are just the beginning of this shift."
    },
    {
        id: 2,
        title: "Designing for Accessibility",
        date: "Nov 2025",
        content: "Accessibility shouldn't be an afterthought. It is a fundamental part of the user experience. When we design for accessibility, we design for everyone.\n\nSimple changes like proper semantic HTML, contrast ratios, and keyboard navigation support can make a huge difference. Let's build a more inclusive web together."
    },
    {
        id: 3,
        title: "Why I Love Vanilla CSS",
        date: "Oct 2025",
        content: "In a world of Tailwind and CSS-in-JS, returning to vanilla CSS (or CSS Modules) feels incredibly refreshing. It gives you complete control and understanding of the cascade.\n\nModern CSS has also improved significantly, with features like logical properties, nesting, and container queries making it more powerful than ever."
    },
    {
        id: 4,
        title: "Mastering Next.js App Router",
        date: "Sep 2025",
        content: "The App Router in Next.js 13+ represents a paradigm shift. Understanding server vs. client components is key to building performant apps.\n\nWhile the learning curve can be steep, the benefits in terms of bundle size and initial load performance are undeniable."
    },
];

export default function Thoughts() {
    const [selectedThought, setSelectedThought] = useState<Thought | null>(null);

    return (
        <section id="thoughts" className={styles.section}>
            <h2 className={styles.title}>Recent Thoughts</h2>
            <div className={styles.list}>
                {THOUGHTS.map((thought) => (
                    <div
                        key={thought.id}
                        className={styles.item}
                        onClick={() => setSelectedThought(thought)}
                        style={{ cursor: "pointer" }}
                        role="button"
                        tabIndex={0}
                    >
                        <span className={styles.itemTitle}>{thought.title}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span className={styles.itemDate}>{thought.date}</span>
                            <ArrowUpRight size={16} style={{ opacity: 0.5 }} />
                        </div>
                    </div>
                ))}
            </div>

            <ThoughtsModal
                isOpen={!!selectedThought}
                onClose={() => setSelectedThought(null)}
                thought={selectedThought}
            />
        </section>
    );
}
