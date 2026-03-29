import { useGSAP } from '@gsap/react';
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"
import React, { useLayoutEffect, useRef } from 'react'

import useWindowStore from '#store/window'

const WindowWrapper = ({ Component, windowKey }) => {
    const WrappedComponent = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex } = windows[windowKey];
        const ref = useRef(null);

        useGSAP(() => {
            const element = ref.current;
            if (!element || !isOpen) return;

            element.style.display = 'block';
        }, [isOpen])

        useGSAP(() => {
            const element = ref.current;
            if (!element) return;
            const [instance] = Draggable.create(element, { onPress: () => focusWindow(windowKey) });

            return () => {
                if (instance) instance.kill();
            }
        }, [])

        useLayoutEffect(() => {
            const element = ref.current;
            if (!element) return;
            element.style.display = isOpen ? 'block' : 'none';
            gsap.fromTo(
                element,
                { scale: 0.8, opacity: 0, y: 40 },
                { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
            )
        }, [isOpen])

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{ zIndex }}
                className='absolute'
            >
                <Component {...props} />
            </section>
        )
    }

    WrappedComponent.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;
    return WrappedComponent
}

export default WindowWrapper