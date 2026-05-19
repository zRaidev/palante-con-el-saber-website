"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

type Direction = "up" | "down" | "left" | "right"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: Direction
  distance?: number
}

const directionMap: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 0 },
  down: { y: 0 },
  left: { x: 0 },
  right: { x: 0 },
}

const initialMap: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 40,
}: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const initial = { opacity: 0 }
  if (direction === "up") initial.y = distance
  else if (direction === "down") initial.y = -distance
  else if (direction === "left") initial.x = distance
  else if (direction === "right") initial.x = -distance

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: Direction
  distance?: number
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.7,
  direction = "up",
  distance = 30,
}: FadeInProps) {
  const initial: { opacity: number; x?: number; y?: number } = { opacity: 0 }
  if (direction === "up") initial.y = distance
  else if (direction === "down") initial.y = -distance
  else if (direction === "left") initial.x = distance
  else if (direction === "right") initial.x = -distance

  return (
    <motion.div
      initial={initial}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.15,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
  direction?: Direction
  distance?: number
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 40,
}: StaggerItemProps) {
  const initial: { opacity: number; x?: number; y?: number } = { opacity: 0 }
  if (direction === "up") initial.y = distance
  else if (direction === "down") initial.y = -distance
  else if (direction === "left") initial.x = distance
  else if (direction === "right") initial.x = -distance

  return (
    <motion.div
      variants={{
        hidden: initial,
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
