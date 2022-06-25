const Colors = {
  black: '#383842',
  white: '#ffffff',
  purple: '#4343EF',
  red: '#F26594',
  redBackground: '#FDECF2',
  green: '#34CF9C',
  greenBackground: '#E6F9F3',
  gray: '#BABABD',
  grayLight: '#E2E2E4',
  grayDark: '#919196',
  grayBackground: '#F7F7F7',
  background: '#F5F5F5',
};

export interface colorProps {
  color?:
    | 'black'
    | 'white'
    | 'purple'
    | 'red'
    | 'redBackground'
    | 'green'
    | 'greenBackground'
    | 'background'
    | 'gray'
    | 'grayLight'
    | 'grayDark'
    | 'grayBackground';
}

export default Colors;
