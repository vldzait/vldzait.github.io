import React from 'react';
import styles from './operationList.module.scss';
import { Operation } from 'src/types/Operation.type';
import ShortOperationView from '../shortOperationView/ShortOperationView';
export type OperationListProps = {
  operations: Operation[];
};

const OperationList: React.FC<OperationListProps> = ({ operations }) => {
  return (
    <div className={styles.operationList}>
      {operations?.map((operation: Operation) => {
        return <ShortOperationView key={'operationItem_' + operation.id} {...operation} />;
      })}
    </div>
  );
};

export default OperationList;
