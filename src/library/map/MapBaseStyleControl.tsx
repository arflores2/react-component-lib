import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import baseStyles from './MapBaseStyleControl.module.css';

export interface MapBaseLayerControlProps {
  styles?: {
    MapBaseLayerControl?: string;
  };
  checked?: boolean;
  onChange: () => void;
  name: string;
}

export const MapBaseStyleControl = (props: PropsWithChildren<MapBaseLayerControlProps>) => {
  const { styles, name, checked, onChange } = props;
  const mapBaseLayerControlClasses = classNames(baseStyles.MapBaseStyleControl, styles?.MapBaseLayerControl)
  return (
    <div className={mapBaseLayerControlClasses}>
      <label>{name}</label>
      <input type='radio' value={name} checked={checked} onChange={onChange} />
    </div>
  );
};