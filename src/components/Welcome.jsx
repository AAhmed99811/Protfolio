import React, { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FONT_WEIGHTS = {
    "subTitle": { "min": 100, "max": 400, "default": 100 },
    "title": { "min": 400, "max": 900, "default": 400 },
}

const renderText = ({ text, className, baseWeight = 400 }) => {
    return [...text].map((char, i) => (
        <span key={i} className={className} style={{
            fontVariationSettings: `'wght' ${baseWeight}`,
        }}>
            {char === " " ? '\u00A0' : char}
        </span>
    ))
}

const setupTextHover = ({ container, type }) => {
    if (!container) return () => { };

    const letters = container.querySelectorAll('span')
    const { min, max, default: base } = FONT_WEIGHTS[type]
    const animateLetters = ({ letter, weight, duration = 0.25 }) => {
        return gsap.to(letter, {
            duration,
            ease: 'power2.out',
            fontVariationSettings: `'wght' ${weight}`,
            overwrite: 'auto'
        });
    }

    const handleMouseMove = (event) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = event.clientX - left;

        letters.forEach((letter) => {
            const { left: l, width: w, } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 20000)

            animateLetters({
                letter,
                "weight": min + (max - min) * intensity
            })
        })
    }
    const handleMouseLeave = () => letters.forEach((letter) => animateLetters({
        letter,
        weight: base,
        duration: 0.3
    }))
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseleave', handleMouseLeave)
    }
}

const Welcome = () => {
    const titleRef = useRef(null);
    const subTitleRef = useRef(null);
    useGSAP(() => {
        const titleCleanup = setupTextHover({
            container: titleRef.current,
            type: "title",
        })

        const subTitleCleanUp = setupTextHover({
            container: subTitleRef.current,
            type: "subTitle",
        })

        return () => {
            titleCleanup()
            subTitleCleanUp()
        }
    }, []);
    return (
        <main id="welcome">
            <p ref={subTitleRef}>
                {renderText({
                    "text": "Hey I'm Arham! Welcome to my",
                    "className": "text-3xl font-georama",
                    "baseWeight": 100
                })}
            </p>
            <h1 ref={titleRef} className="mt-7">
                {renderText({
                    "text": "Portfolio",
                    "className": "text-9xl italic font-georama"
                })}
            </h1>
            <div className="small-screen">
                <p>
                    This portfolio is designed for desktop/tablets screens only.
                </p>
            </div>
        </main>
    )
}
export default Welcome
