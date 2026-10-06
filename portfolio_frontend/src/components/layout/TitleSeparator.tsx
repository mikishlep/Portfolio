import { motion } from "motion/react";

interface TitleSeparatorProps {
    name: string;
    textContent: string;
}

export default function TitleSeparator({ name, textContent }: TitleSeparatorProps) {
    const upperCaseName = name.toUpperCase();

    return (
        <motion.div
            initial="rest"
            animate="rest"
            whileHover="hover"
            className="
                relative mx-auto flex w-full max-w-335 items-center justify-between
                overflow-hidden border-x border-b border-border px-6 py-4 sm:px-10 lg:px-18
            "
        >
            <motion.div
                className="absolute inset-0 origin-left bg-foreground"
                variants={{
                    rest: {
                        scaleX: 0,
                    },
                    hover: {
                        scaleX: 1,
                    },
                }}
                transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                }}
            />
            <motion.h2
                className="relative z-10 text-xl font-medium"
                variants={{
                    rest: {
                        color: "var(--muted-foreground)",
                        x: 0,
                    },
                    hover: {
                        color: "var(--background)",
                        x: 5,
                    },
                }}
                transition={{
                    duration: 0.25,
                }}
            >
                {upperCaseName}
            </motion.h2>
            <motion.p
                className="relative z-10 text-sm"
                variants={{
                    rest: {
                        color: "var(--foreground)",
                        x: 0,
                        y: 0,
                    },
                    hover: {
                        color: "var(--background)",
                        x: 4,
                        y: -4,
                    },
                }}
                transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 22,
                }}
            >
                {textContent}
            </motion.p>
        </motion.div>
    );
}
