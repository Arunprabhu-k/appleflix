export const authCheckVarients = {
  closed: {
    display: 'none',
  },
  opened: {
    display: 'flex',
    transition: {},
  },
}
export const bannerTextVarient = {
  closed: {
    opacity: 0,
  },
  opened: {
    opacity: [0, 1],
    fontWeight: 'bold',
    color: 'white',
    transition: {
      delay: 2,
    },
  },
}
export const loginPageVarient = {
  closed: {
    x: '-100%',
  },
  opened: {
    x: 0,
    transition: {
      duration: 2,
    },
  },
}
