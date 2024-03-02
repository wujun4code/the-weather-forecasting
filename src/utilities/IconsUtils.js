import React, { useState, useEffect } from 'react';

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

export function weatherIcon(imageName) {
  const allWeatherIcons = importAll(
    require.context('../assets/icons', false, /\.(png)$/)
  );

  const iconsKeys = Object.keys(allWeatherIcons);

  const iconsValues = Object.values(allWeatherIcons);
  const iconIndex = iconsKeys.indexOf(imageName);

  return iconsValues[iconIndex];
}


export const DynamicIcon = ({ iconName }) => {
  return (
    <i className={`qi-${iconName}`} style={{ fontSize: "32px" }}></i>
  );
};