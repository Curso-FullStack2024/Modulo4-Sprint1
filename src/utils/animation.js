export const animaciones = () => {
    return {
        initial: {
            scale: 1
        },
        scaleUp: {
            scale: [1.1, 1, 0.9, 1, 1.1],

            transition: {
                duration: 10,
                repeat: Infinity
            }
        },
        scaleDown: {
            scale: 0.9,
            transition: {
                duration: 5,
                repeat: Infinity
            }
        }
    }
}