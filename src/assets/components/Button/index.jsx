import { ButtonPrimary, ButtonWhite } from './style'

export function Button({ children, btn1, ...rest }) {
  return (
    <>
      {btn1 ? (
        <ButtonPrimary {...rest}>{children}</ButtonPrimary>
      ) : (
        <ButtonWhite {...rest}>{children}</ButtonWhite>
      )}
    </>
  )
}
