import mapboxgl from 'mapbox-gl';
import { useState, useRef, useEffect, PropsWithChildren } from 'react';

import { Store } from './state/store';

import styles from './Map.module.css';
import { BASE_LAYERS_STYLE } from './constants';

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9id2VhcnNnbGFzc2VzIiwiYSI6ImNrN2V6b2dibDE1cW4zem15cjU3a3Iyc3oifQ.D8jCodxqEI9h6mX0JUpQXA';

export interface MapProps {
  baseLayerStyle: BASE_LAYERS_STYLE;
}

let map: mapboxgl.Map;

export const Mapbox = (props: PropsWithChildren<MapProps>) => {
  const { baseLayerStyle, children } = props;
  const mapRef = useRef(null);

  const [state, setState] = useState({
    lng: -122.384917,
    lat: 37.742593,
    zoom: 8
  });

  useEffect(() => {
    map = new mapboxgl.Map({
      container: mapRef.current || '',
      style: 'mapbox://styles/robwearsglasses/ckcnja3791n641imnk44o9fyn',
      center: [state.lng, state.lat],
      zoom: state.zoom
    });
    map.addControl(new mapboxgl.NavigationControl());
  }, [mapRef]);

  useEffect(() => {
    if (map) {
      map.setStyle(baseLayerStyle);
    }
  }, [baseLayerStyle, map]);

  return (
    <Store>
      <div>
        <div ref={mapRef} className={styles.MapContainer} />
        {children}
      </div>
    </Store>
  );
};