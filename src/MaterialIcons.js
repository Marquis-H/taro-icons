/**
 * Created by Jeepeng on 2018/10/13.
 */
import Taro, { PureComponent } from '@tarojs/taro';
import { Component } from 'react'
import BaseIcon from './BaseIcon';

class MaterialIcons extends Component {
  render() {
    const { name, color, size } = this.props;
    return (
      <BaseIcon
        prefixClass='md'
        name={name}
        color={color}
        size={size}
      />
    );
  }
}

export default MaterialIcons;
