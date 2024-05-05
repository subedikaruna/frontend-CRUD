import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ReadSpecificStudent = () => {
    let[student,setStudent]=useState([])
   let params=useParams()
 
    let getData=async()=>{
        try {
            let result=await axios({
              url:`http://localhost:8000/students/${params.id}`,
              method:"get",
            })
            setStudent(result.data.result)
          } catch (error) {
            
          }
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
    <p>name is{student.name}</p>
    <p>age is{student.age}</p>
    <p>isMarried is{student.isMarried===true?"yes":"no"}</p>
    </div>
  )
}

export default ReadSpecificStudent