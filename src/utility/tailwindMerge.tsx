import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const mergeClass = (...classes: string[]) => {
    return twMerge(clsx(classes));
}

export default mergeClass;