import React, { useMemo } from 'react';
import styles from './operationList.module.scss';
import { Operation } from 'src/types/Operation.type';
import ShortOperationView from '../shortOperationView/ShortOperationView';

export type OperationListProps = {
  operations: Operation[];
};

const OperationList: React.FC<OperationListProps> = React.memo(({ operations }) => {
  const renderedOperations = useMemo(() => {
    return operations?.map((operation: Operation) => (
      <ShortOperationView key={`operationItem_${operation.id}`} {...operation} />
    ));
  }, [operations]); // Зависимость - operations

  return <div className={styles.operationList}>{renderedOperations}</div>;
});

OperationList.displayName = 'OperationList';

export default OperationList;
