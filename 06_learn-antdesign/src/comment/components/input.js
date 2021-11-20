import React, { PureComponent } from 'react'

import moment from 'moment'
import { Input, Button } from 'antd'
const { TextArea } = Input

export default class input extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      content: '',
    }
  }

  render() {
    return (
      <div>
        <TextArea
          rows={4}
          value={this.state.content}
          onChange={(e) => this.onChangeTextArea(e)}
          showCount
          maxLength={200}
          allowClear={true}
        />
        <Button
          type="primary"
          style={{ marginTop: '10px' }}
          onClick={(e) => this.onClickButton()}
        >
          添加评论
        </Button>
      </div>
    )
  }

  onChangeTextArea(e) {
    this.setState({
      content: e.target.value,
    })
  }

  onClickButton() {
    const info = {
      id: moment().valueOf(),
      datetime: moment(),
      content: this.state.content,
      avatar:
        'https://img1.baidu.com/it/u=2912879642,1971740057&fm=26&fmt=auto',
      name: '王鑫',
    }

    this.props.inputAdd(info)

    this.setState({
      content: '',
    })
  }
}
