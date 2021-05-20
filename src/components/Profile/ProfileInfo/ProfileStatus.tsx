import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'
import thunk from "redux-thunk";

export class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({editMode: true})
    }
    offEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange=(e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({
       status: e.target.value})
    }
    componentDidUpdate(prevProps:Readonly<any>, prevState:Readonly<any>, snapshot?:any){
       if(prevProps.status!==this.props.status) this.setState({
            status: this.props.status
        })
    }



    render() {
        return <>
            {!this.state.editMode
                ? <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</span>
                </div>
                : <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.offEditMode} value={this.state.status}/>
                </div>
            }

        </>
    }
}
