import { useRecoilState, atom } from 'recoil';

export const logState = atom({
    key: 'logState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

export const activeFilter = atom({
    key: 'activeFilter',
    default: 'featured',
  })