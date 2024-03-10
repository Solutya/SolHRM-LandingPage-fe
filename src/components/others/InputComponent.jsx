import { suppressHydrationWarning } from 'next'

const InputComponent = () => (
  <input
    type="email"
    placeholder="business email here"
    className="p-6 rounded-full w-full shadow-sm sm:text-sm focus:outline-none "
  />
)

export default suppressHydrationWarning(InputComponent)
