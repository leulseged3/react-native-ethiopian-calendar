# React Native Ethiopian Calendar

A react native calendar component which is mainly intended for applications which require Ethiopian calendar.

## Features

- Ethiopian/Gregorian mode toggle
- Supports multiple local languages
- Easy to customize
- Zero dependency
- Fully typed with typescript

## Demo

![](https://media.giphy.com/media/FrjD4KFbOvIRR5vyBX/giphy.gif)

## Installation

with yarn

```bash
yarn add react-native-ethiopian-calendar
```

Install with npm

```bash
npm i react-native-ethiopian-calendar
```

## Usage/Examples

#### Typescript Example

```javascript
import { Calendar } from 'react-native-ethiopian-calendar';
import type { LanguageCode, Mode, SelectedDate } from 'react-native-ethiopian-calendar/types';

function App() {
  const [mode, setMode] = React.useState<Mode>('EC');
  const [locale, setLocale] = React.useState<LanguageCode>('AMH');
  const [selectedDate, setSelectedDate] = React.useState<SelectedDate>();

  return (
      <Calendar
        mode={mode}
        onDatePress={(date) => setSelectedDate(date)}
        onModeChange={(selectedMode) => setMode(selectedMode)}
        onLanguageChange={(lang) => setLocale(lang)}
        locale={locale}
      />
  )
}
```

#### Javascript Example

```javascript
import { Calendar } from 'react-native-ethiopian-calendar';

function App() {
  const [mode, setMode] = React.useState('EC');
  const [locale, setLocale] = React.useState('AMH');
  const [selectedDate, setSelectedDate] = React.useState();

  return (
    <Calendar
      mode={mode}
      onDatePress={(date) => setSelectedDate(date)}
      onModeChange={(selectedMode) => setMode(selectedMode)}
      onLanguageChange={(lang) => setLocale(lang)}
      locale={locale}
    />
  );
}
```

## API Reference

| Prop                | Type            | Required | Description                                                          | Default                     |
| :------------------ | :-------------- | :------- | :------------------------------------------------------------------- | :-------------------------- |
| `mode`              | `Mode`          | `false`  | a prop to switch b/n Ethiopian calendar and Gregorian calendar       | `EC`                        |
| `locale`            | `LanguageCode`  | `false`  | to change the language of days names and months names.               | `AMH for EC and ENG for GC` |
| `theme`             | `Theme`         | `false`  | to override default style                                            | `{}`                        |
| `hideHeaderButtons` | `boolean`       | `false`  | to hide switch mode & change language dropdowns.                     | `false`                     |
| `onDatePress`       | `function void` | `true`   | an event handler gets executed when date press event is fired.       |                             |
| `onModeChange`      | `function void` | `false`  | an event handler gets invoked on mode change.                        |                             |
| `onLanguageChange`  | `function void` | `false`  | an event handler gets invoked on language change.                    |                             |
| `initialDate`       | `Date`          | `false`  | if this prop is not set, the calendar will start from current month. | `today`                     |

## License

[MIT](https://choosealicense.com/licenses/mit/)

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
