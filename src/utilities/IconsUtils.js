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
  const [IconComponent, setIconComponent] = useState(null);

  useEffect(() => {
    const importIcon = async () => {
      try {
        const { ReactComponent } = await import(`qweather-icons/icons/${iconName}-fill.svg`);
        setIconComponent(() => ReactComponent);
      } catch (error) {
        console.error('Error loading icon:', error);
      }
    };

    importIcon();
  }, [iconName]);

  return (
    <div>
      {IconComponent && <IconComponent />}
    </div>
  );
};