import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface AnimatedFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  className?: string;
}

const AnimatedFeatureCard = React.forwardRef<HTMLDivElement, AnimatedFeatureCardProps>(
  ({ icon: Icon, title, description, index, className }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.03, y: -8 }}
        className={cn("relative overflow-hidden bg-primary rounded-3xl p-8 text-center h-full group cursor-default", className)}
        style={{
          borderTopLeftRadius: index === 0 ? '3rem' : '1.5rem',
          borderTopRightRadius: index === 2 ? '3rem' : '1.5rem',
        }}
      >
        {/* Shimmer overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary-foreground/5 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <motion.div
              className="w-16 h-16 flex items-center justify-center"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-12 h-12 text-teal" strokeWidth={1.5} />
            </motion.div>
          </div>
          <div className="border-t border-primary-foreground/30 mb-6" />
          <h3 className="text-xl font-bold text-teal mb-4">{title}</h3>
          <p className="text-primary-foreground/90 leading-relaxed">{description}</p>
        </div>
      </motion.div>
    );
  }
);

AnimatedFeatureCard.displayName = "AnimatedFeatureCard";

export { AnimatedFeatureCard };
