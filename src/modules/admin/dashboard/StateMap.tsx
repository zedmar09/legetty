type Props = {};

import { useAppSelector } from '@core/redux/store';
import { getStateName } from '@utils/state';
import { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { mapMarkers } from './mapMarkers';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const StateMap = (props: Props) => {
  const [scale, setScale] = useState(1000); // Initial scale factor
  const adminAggregates = useAppSelector((state) => state.admin.families);

  const filteredStates = adminAggregates.byState
    .filter((filterItem) =>
      mapMarkers.some((state) => state.name === getStateName(filterItem?.family_state))
    )
    .map((filterItem) => {
      const matchingState = mapMarkers.find(
        (state) => state.name === getStateName(filterItem?.family_state)
      );
      return {
        markerOffset: matchingState.markerOffset,
        name: matchingState.name,
        coordinates: matchingState.coordinates,
        familycount: filterItem.familycount,
      };
    });

  const handleZoomIn = () => {
    setScale(scale * 1.2); // Zoom in by increasing the scale
  };

  const handleZoomOut = () => {
    setScale(scale / 1.2); // Zoom out by decreasing the scale
  };

  return (
    <div className="w-full p-4 bg-white rounded-lg relative">
      <div className="absolute top-6 left-6">Geographic Distribution</div>
      <div className="flex justify-center">
        <div className="relative">
          <ComposableMap
            projection="geoAlbersUsa"
            projectionConfig={{
              scale: scale,
            }}
            className="sm:min-w-[480px] h-[350px] w-full">
            <Geographies geography={geoUrl}>
              {({ geographies }) => (
                <>
                  {geographies.map((geo) => (
                    <Geography key={geo.rsmKey} stroke="#FFF" geography={geo} fill="#DDD" />
                  ))}

                  {filteredStates.map(({ name, coordinates, markerOffset }) => (
                    <Marker key={name} coordinates={coordinates}>
                      <circle r={10} fill="#2174BB" stroke="#2174AA" strokeWidth={2} />
                      <text
                        textAnchor="middle"
                        y={markerOffset}
                        style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}>
                        {name}
                      </text>
                    </Marker>
                  ))}
                </>
              )}
            </Geographies>
          </ComposableMap>
        </div>
      </div>

      <div className="absolute left-6 bottom-6 flex flex-col space-y-4">
        <button
          onClick={handleZoomIn}
          className="px-3 py-1 bg-darker text-white text-xl bg-opacity-75 rounded-xl">
          +
        </button>
        <button
          onClick={handleZoomOut}
          className="px-3 py-1 bg-darker text-white text-xl bg-opacity-75 rounded-xl">
          -
        </button>
      </div>
    </div>
  );
};

export default StateMap;
