'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import Link from 'next/link';

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number | string;
    name: string;
    designation: string;
    image: string;
    color: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | string | null>(
    null
  );
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className='relative group'
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode='popLayout'>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: 'nowrap',
                  backgroundColor: item.color,
                }}
                className={`absolute -top-16 -right-1/4 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-xl z-50 shadow-xl px-4 py-2`}
              >
                <div className='absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px ' />
                <div className='absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px ' />
                <div className='font-bold text-white relative z-30 text-base'>
                  {item.name}
                </div>
                <div className='text-white text-xs'>{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <Link href={'/search/' + item.name}>
            <div
              className='flex items-center justify-center rounded-full w-32  p-3 shadow-[5px_5px_3px_var(--lavender)] hover:-translate-y-1 hover:shadow-[1px_8px_8px_var(--lavender)] active:shadow-[1px_1px_3px_var(--lavender)] active:translate-y-2 transition-[.5s] '
              style={{ backgroundColor: `${item.color}` }}
            >
              <Image
                onMouseMove={handleMouseMove}
                height={100}
                width={100}
                src={item.image}
                alt={item.name}
                className='object-cover !m-0 !p-0 object-top h-14 w-14 group-hover:scale-105 group-hover:z-30 relative transition duration-500'
              />
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};
