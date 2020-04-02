import * as React from "react";
import Input from './common/Input/Input';
import Button from './common/Button/Button';
import "./../styles/pages/Entrance.scss";

const { useState } = React;

const Entrance = () => {

    const [redeemCode, setRedeemCode] = useState("")

    const checkForRedeemCode = (value) => {
        console.log("Value of the redeem code is -- ", value);
    }

    const RedeemButtonClicked = () => {
        console.log("The button clicked was -- ");
    }

    return (<div>
        <div className={"login-in-container"}>
            <div className={"redeem-container"} >
                <Input
                    id={"redeem-code"}
                    defaultValue={redeemCode}
                    placeholder={"Code"}
                    onFocusOut={(value) => checkForRedeemCode(value)}
                ></Input>
                <Button
                    label={"Redeem"}
                    name={"redeem"}
                    clickHandler={RedeemButtonClicked}
                ></Button>
            </div>
            <div className={"redeemcode-message"}>
                Redeem code accepted
            </div>
            <div className={"enter-box"}>
                <Input
                    id={"redeem-code"}
                    defaultValue={""}
                    placeholder={"Name"}
                    onFocusOut={(value) => checkForRedeemCode(value)}
                ></Input>

                <Button
                    label={"Enter"}
                    name={"Enter"}
                    clickHandler={RedeemButtonClicked}
                ></Button>
            </div>
        </div>
    </div>)
}

export default Entrance;
