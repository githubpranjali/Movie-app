import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { asyncloadperson } from '../store/actions/personActions'
import { removeperson } from '../store/reducers/personSlice'
import Loading from './Loading'
import HorizontalCards from './partials/HorizontalCards'

const PersonDetails = () => {
   const {pathname}=useLocation()
      const navigate = useNavigate()
      const { id } = useParams()
      const dispatch = useDispatch()
      const { info } = useSelector(state => state.person)
      console.log(info);
  
      useEffect(() => {
          dispatch(asyncloadperson(id))
          return () => dispatch(removeperson())
      }, [id])
      console.log(info);
  return info ? 
    <div>PersonDetails</div>:<Loading/>
  
}

export default PersonDetails