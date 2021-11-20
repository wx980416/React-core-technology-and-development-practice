import React, { PureComponent } from 'react'
import { Comment, Avatar, Tooltip } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
export default class item extends PureComponent {
  render() {
    const { datetime, content, avatar, name } = this.props.comment
    return (
      <Comment
        author={<a href="/#">{name}</a>}
        avatar={<Avatar src={avatar} alt={name} />}
        content={<p>{content}</p>}
        datetime={
          <Tooltip title={datetime.format('YYYY-MM-DD HH:mm:ss')}>
            <span>{datetime.fromNow()}</span>
          </Tooltip>
        }
        actions={[
          <span onClick={(e) => this.removeItem()}>
            <DeleteOutlined />
            删除
          </span>,
        ]}
      />
    )
  }

  removeItem() {
    this.props.removeItem()
  }
}
