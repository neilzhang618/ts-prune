import('./baz').then(module => {
    module.sayHi()
})

const quux = 1

export const quuxAnother = 2

export default quux