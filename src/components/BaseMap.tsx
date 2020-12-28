import { useState } from 'react';
import { Map } from '../library/map';
import { BASE_LAYERS_STYLE } from '../library/map/constants';
import { MapBaseStyleControl } from '../library/map/MapBaseStyleControl';

import styles from './BaseMap.module.css';

export const BaseMap = () => {
  const [state, setState] = useState({
    baseLayerStyle: BASE_LAYERS_STYLE.DEFAULT
  });

  const handleClick = (baseLayerStyle: BASE_LAYERS_STYLE) => {
    setState({ baseLayerStyle });
  }

  return (
    <Map baseLayerStyle={state.baseLayerStyle}>
      <div className={styles.BaseMapContainer}>
        <MapBaseStyleControl onChange={() => handleClick(BASE_LAYERS_STYLE.SATALITE)} name='Satalite' checked={state.baseLayerStyle === BASE_LAYERS_STYLE.SATALITE} />
        <MapBaseStyleControl onChange={() => handleClick(BASE_LAYERS_STYLE.DEFAULT)} name='Basic' checked={state.baseLayerStyle === BASE_LAYERS_STYLE.DEFAULT}  />
      </div>
    </Map>
  )
};