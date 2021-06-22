import React from "react";
import {Grid} from "@material-ui/core";
import {OneMessage} from "./OneMessage/OneMessage";

type MessagesType = {
    messages: any
    authorizationUserId: any
}
 export const Messages = (props: MessagesType) => {
    return (<div>
            {props.messages.map((element: any) =>
                <Grid>
                    <div key={element.id}>
                        <OneMessage massageText={element.body} authorazedUserId={props.authorizationUserId}
                                    senderId={element.senderId}/>
                    </div>
                </Grid>)
            }
        </div>
    )
}