/**
 * Utility function to combine Higher-Order Components in a more readable way
 * @param fns - Array of HOCs to combine
 * @returns A function that applies all HOCs in sequence
 */

export function compose<T extends React.ComponentType<any>>(
  ...fns: Array<(Component: any) => any>
) {
  return (Component: T) => fns.reduce((acc, fn) => fn(acc), Component) as T
}
