import React, { useRef } from 'react'
import { setUserName } from '../../store/slices/userName.slice'
import {useDispatch, useSelector} from 'react-redux'


const FormNameUser = () => {
    
    const { userName } =useSelector(state => state)

    const inputName = useRef()

    const dispatch = useDispatch()

    const handleSubmit = e => {
         e.preventDefault()
        dispatch(setUserName(inputName.current.value.trim()))
    }

    console.log(userName)


  return (
    <form onSubmit={handleSubmit}>
        <input ref={inputName} type="text" />
        <button>Send</button>
    </form>
  )
}

export default FormNameUser