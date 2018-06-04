import Button from "./components/button.js"
import IconButton from "./components/iconButton.js"
import Demo, {props as P} from 'react-demo'

export default class DemoServices extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Demo target={Button} props={{
            label: P.string('Click me'),
            id: P.string('Button'),
            value: P.string('click'),
            primary: P.bool(true),
            disabled: P.bool(true),
            onClick: P.callback.logLatest()
        }}/>
        <Demo target={IconButton} props={{
          label: P.string('Sample Icon Button'),
          id: P.string('Icon-Button'),
          iconClass: P.string('icon-checkmark')
        }} />
      </React.Fragment>
    );
  }
}
