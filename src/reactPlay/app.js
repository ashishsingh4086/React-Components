
import Popover from "../components/popover"
import Button from "../components/button"
export default class MainApp extends React.PureComponent{

    render(){
        return (
            <Popover>
                {
                    <Button label ="Test Popover"/>
                }
                </Popover>
        )
    }
}