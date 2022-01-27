import React, {ChangeEvent, useEffect, useState} from "react";

type PropsType = {
  status: string
  updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: PropsType) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [status, setStatus] = useState<string>(props.status)

  useEffect(() => {setStatus(props.status)}, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }
    const deactivateEditMode = () => {
      setEditMode(false)
      props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
      setStatus(e.currentTarget.value)
    }

    return (
      <div>
        {!editMode &&
          <div>
            <span
              onDoubleClick={activateEditMode}>{props.status || "your status is here"}</span>
          </div>}
        {editMode &&
          <div>
            <input onChange={onStatusChange} autoFocus
                   onBlur={deactivateEditMode} value={status}/>
          </div>}
      </div>
    )
}

export default ProfileStatusWithHooks