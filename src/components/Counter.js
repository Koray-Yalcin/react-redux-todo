import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../redux/actions';

export const Counter = () => {
   const count = useSelector(state => state.count)
   const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() => dispatch(Actions.counterActions.increaseCount(50))}>INCREASE</button>
        <button onClick={() => dispatch(Actions.counterActions.decreaseCount(40))}>DECREASE</button>
        {count}
    </div>
  )
}
