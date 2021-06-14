import React, {ChangeEvent, useEffect, useState} from "react";

export const ProfileStatusHOC = (props: any) => {
    let[editMode, setEditMode]=useState(false)
    let[status, setStatus]=useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])


    const activateMode=()=>{
        setEditMode(true)
    }

   const offEditMode = () => {
       setEditMode(false)
       props.updateStatus(status)
    }
    const onStatusChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setStatus( e.target.value)
    }

    return <>
        <b>Статус: </b>
        {!editMode &&

            <span onDoubleClick={activateMode}>{props.status || "-----"}</span>

        }
        {editMode &&

            <input autoFocus={true}
                   onBlur={offEditMode}
                   onChange={onStatusChange}
            value={status}/>

        }

    </>

}
