import {Button} from "@material-ui/core";
import React from "react";
import {Contact} from "./Contact";

export const UserInfo = (props: any) => {
    return (
        <div>
            <div>
                <h2><b>FullName: </b>{props.profile.fullName}</h2>
            </div>

            <div>
                <b>looking for a job: </b>{props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {props.profile.lookingForAJobDescription &&
            <div>
                <b>I can: </b>{props.profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>About me: </b>{props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts: </b>{Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
            </div>
            {props.ownerId &&
            <Button variant="contained" color="primary" onClick={props.goToEditeMode}>edit Data</Button>}
        </div>
    )
}