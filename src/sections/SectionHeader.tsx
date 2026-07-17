import { motion } from 'framer-motion'

interface SectionHeaderProps {
  number: string
  eyebrow: string
  title: string
  italic?: string
  description?: string
}

export default function SectionHeader({
  number,
  eyebrow,
  title,
  italic,
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <p className="flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
        <span className="font-serif-en text-lg normal-case tracking-normal text-primary">
          N° {number}
        </span>
        <span className="hairline w-10" />
        {eyebrow}
      </p>
      <h2 className="font-serif-cn mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
        {title}
        {italic && (
          <span className="font-serif-en ml-3 text-3xl font-medium text-muted-foreground md:text-4xl">
            {italic}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl leading-loose text-muted-foreground">{description}</p>
      )}
    </motion.div>
  )
}
