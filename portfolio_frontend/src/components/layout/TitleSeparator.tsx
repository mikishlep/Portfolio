import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TitleSeparator({ name, textContent, routerName }: SeparatorProps) {
    const upperCaseName = name.toUpperCase();
    const router = useRouter();

    return (
        <motion.div
            onClick={() => router.push(`/${routerName}`)}
            initial="rest"
            animate="rest"
            whileHover="hover"
            className="
                relative mx-auto flex max-w-335 items-center justify-between
                overflow-hidden border-x border-b border-border px-18 py-4 cursor-pointer
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
            <motion.div
                className="relative z-10 flex gap-4 items-center"
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
                <p>{textContent}</p>
                <ArrowUpRight size={20} strokeWidth={1.5} />
            </motion.div>
        </motion.div>
    );
}