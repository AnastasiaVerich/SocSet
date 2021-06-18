import React from "react";
import S from './OneMessage.module.css'
import {Grid} from "@material-ui/core";


type SmsType = {
    massageText: string
    authorazedUserId: any
    senderId: any

}


export const OneMessage = (props: SmsType) => {
    return (<>
            {props.authorazedUserId === props.senderId
                ? <Grid container
                        direction="column"
                        justify="flex-end"
                        alignItems="center"
                ><div className={S.smsMy} >
                    <b>{props.massageText}</b>
                </div>
            </Grid>
                : <Grid container
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                ><div className={S.sms}>
                    {props.massageText}
                </div> </Grid>}
        </>
    )
}


