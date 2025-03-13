import { Dispatch, SetStateAction } from "react"

export type scrollType = {
    value: boolean,
    setCount: Dispatch<SetStateAction<number>>,
    ref: React.RefObject<HTMLHeadingElement | null>,
    count: number
}

function scroll({ value, setCount, ref, count }: scrollType): void {
    if (ref.current) {
        ref.current.scrollIntoView({
            behavior: 'smooth', // Плавная прокрутка
        });
    }
    if (value) {
        setCount(count + 1)
    } else setCount(count - 1);
}

export { scroll }