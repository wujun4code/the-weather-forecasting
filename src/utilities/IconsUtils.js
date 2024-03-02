import React from 'react';


export const DynamicIcon = ({ size, iconName }) => {
  const dynamicStyle = {
    fontSize: `${size}px` // 使用模板字符串动态设置 fontSize
  };
  return (
    <i className={`qi-${iconName}`} style={dynamicStyle}></i>
  );
};