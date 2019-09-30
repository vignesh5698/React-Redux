export const onAddAction = (updatedValue, updatedHistory) => {
    return { type: 'NUM_UP', value: updatedValue, history: updatedHistory }
}

export const onSubAction = (updatedValue, updatedHistory) => {
 return { type: 'NUM_DOWN', value: updatedValue, history: updatedHistory }
}