import create from 'zustand'

const [useModal] = create(set => ({
  content: {},
  show: false,
  setContent: (content) => set({ content }),
  setShow: () => set(state => ({ show: !state.show })),
}))

export { useModal };