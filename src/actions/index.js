export const START_DOING = 'START_DOING'

export const startDoing = (item) => {
  return {
    type: 'START_DOING',
    payload: item
  }
}
