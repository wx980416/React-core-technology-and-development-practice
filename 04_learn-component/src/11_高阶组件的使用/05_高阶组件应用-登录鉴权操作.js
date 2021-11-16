import React, { PureComponent } from 'react'

class LoginPage extends PureComponent {
  render() {
    return <h2>登录页面</h2>
  }
}

function withAuth(WrappendComponent) {
  const newCpn = (props) => {
    const { isLogin } = props
    if (isLogin) {
      return <WrappendComponent {...props} />
    } else {
      return <LoginPage />
    }
  }

  newCpn.displayName = 'AuthCpn'
  return newCpn
}

class CartPage extends PureComponent {
  render() {
    return <h2>CartPage</h2>
  }
}

const AuthCartPage = withAuth(CartPage)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>登录鉴权操作</h1>
        {/* <CartPage isLogin={true} /> */}

        <AuthCartPage isLogin={true} />
        <AuthCartPage isLogin={false} />
      </div>
    )
  }
}
