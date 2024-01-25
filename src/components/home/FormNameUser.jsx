import React, { useRef } from 'react'
import { setUserName } from '../../store/slices/userName.slice'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'


const FormNameUser = () => {
    
    // const { userName } =useSelector(state => state)

    const inputName = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
         e.preventDefault()
        dispatch(setUserName(inputName.current.value.trim()))
        navigate('/countryFlag')
    }


  return (
    <form onSubmit={handleSubmit}>
        <input ref={inputName} type="text" />
        <button>Send</button>
    </form>
  )
}

export default FormNameUser