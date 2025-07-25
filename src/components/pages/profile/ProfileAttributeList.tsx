import { Language, Hobby } from '@customTypes/portfolio';
import { motion } from 'motion/react';
import {
  attributeItemAnimation,
  attributeListAnimation,
} from '@animation/profilePage';

// Generic type that accepts either strings, Language objects, or Hobby objects
type AttributeItem = string | Language | Hobby;

interface ProfileAttributeListProps {
  title: string;
  items: AttributeItem[];
  type: 'skills' | 'languages' | 'hobbies';
  index?: number;
}

export default function ProfileAttributeList({
  title,
  items,
  type,
  index = 0,
}: ProfileAttributeListProps) {
  const renderItems = () => {
    switch (type) {
      case 'skills':
        return (
          <div className="flex flex-wrap gap-2 pr-1">
            {items.map((item, i) => {
              // Only string items should be processed here
              if (typeof item !== 'string') return null;
              return (
                <motion.span
                  initial={attributeItemAnimation.initial}
                  animate={attributeItemAnimation.animate(index, i)}
                  key={i}
                  className="rounded-full border border-yellow-400 bg-yellow-400/20 px-2 py-1 text-xs font-medium text-yellow-300"
                >
                  {item}
                </motion.span>
              );
            })}
          </div>
        );

      case 'languages':
        return (
          <div className="flex flex-wrap gap-3">
            {items.map((item, i) => {
              // Only Language objects should be processed here
              if (
                typeof item !== 'object' ||
                !('label' in item) ||
                !('bg' in item)
              )
                return null;
              const langItem = item as Language;
              return (
                <motion.div
                  initial={attributeItemAnimation.initial}
                  animate={attributeItemAnimation.animate(index, i)}
                  key={i}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white ${langItem.bg}`}
                >
                  {langItem.label}
                </motion.div>
              );
            })}
          </div>
        );

      case 'hobbies':
        return (
          <div className="flex flex-wrap gap-3">
            {items.map((item, i) => {
              // Only Hobby objects should be processed here
              if (
                typeof item !== 'object' ||
                !('emoji' in item) ||
                !('label' in item)
              )
                return null;
              const hobbyItem = item as Hobby;
              return (
                <motion.div
                  initial={attributeItemAnimation.initial}
                  animate={attributeItemAnimation.animate(index, i)}
                  key={i}
                  className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm text-white"
                >
                  <span>{hobbyItem.emoji}</span> {hobbyItem.label}
                </motion.div>
              );
            })}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.section
      initial={attributeListAnimation.initial}
      animate={attributeListAnimation.animate(index)}
    >
      <h3 className="mb-2 border-b border-white/20 pb-1 text-xl font-semibold">
        {title}
      </h3>
      {renderItems()}
    </motion.section>
  );
}
