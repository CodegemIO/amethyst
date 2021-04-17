import React from 'react';
import styles from './List.scss';

interface Props {
  items: React.ReactNode[];
  minItemsPerColumn?: number;
  columns?: number;
  minColumnWidth?: number;
  numbered?: boolean;
}

const List: React.FC<Props> = ({
  items,
  minItemsPerColumn,
  columns = 1,
  minColumnWidth = 300,
  numbered = false,
}) => {
  let partitionFactor = Math.ceil(items.length / columns);

  if (minItemsPerColumn) {
    partitionFactor = Math.max(partitionFactor, minItemsPerColumn);
  }

  const partitioned: React.ReactNode[][] = [];

  for (let i = 0; i < items.length; i += partitionFactor) {
    partitioned.push(items.slice(i, i + partitionFactor));
  }

  return (
    <div className={styles.List}>
      {partitioned.map((partition, i) => (
        <div
          key={`list-partition-${i}`}
          className={styles.Sublist}
          style={{minWidth: minColumnWidth}}
        >
          {numbered ? (
            <ol>
              {partition.map((item, j) => (
                <li key={`list-item-${i}-${j}`}>{item}</li>
              ))}
            </ol>
          ) : (
            <ul>
              {partition.map((item, j) => (
                <li key={`list-item-${i}-${j}`}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default List;
