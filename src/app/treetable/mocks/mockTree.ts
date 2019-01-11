import { Node } from '../models';

export const mockNumberTree: Node<number> = {
  value: 1,
  id: '1',
  children: [
    {
      value: 2,
      id: '2',
      children: []
    },
    {
      value: 3,
      id: '3',
      children: [
        {
          value: 4,
          id: '4',
          children: []
        }
      ]
    }
  ]
};

export const mockComplexTree: Node<Mock> = {
  id: '1',
  value: {
    first: 'abc',
    second: 123,
    third: true
  },
  children: [
    {
      id: '11',
      value: {
        first: 'xyz',
        second: 999,
        third: false
      },
      children: []
    },
    {
      id: '12',
      value: {
        first: 'hhh',
        second: 888,
        third: false
      },
      children: []
    },
    {
      id: '13',
      value: {
        first: 'qwerty',
        second: 876,
        third: false
      },
      children: [
        {
          id: '131',
          value: {
            first: 'xyz',
            second: 777,
            third: true
          },
          children: []
        },
        {
          id: '132',
          value: {
            first: 'xyz',
            second: 43821,
            third: false
          },
          children: [
            {
              id: '1321',
              value: {
                first: 'pop',
                second: 12345,
                third: false
              },
              children: []
            }
          ]
        }
      ]
    }
  ]
};


export interface Mock {
  first: string;
  second: number;
  third: boolean;
}