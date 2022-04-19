import React, { useState } from 'react'
import Feed from './Feed'


const Form = () => {

    const [data, setData] = useState([])
    const [name, setName] = useState("")
    const [department, setDepartment] = useState("")
    const [rating, setRating] = useState("")
    const [toggle, setToggle] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        setData([...data, { name, department, rating }]);
        setName("")
        setDepartment("")
        setRating("")
        setToggle(!toggle)
    }

    const goBack = () => {
        setToggle(true)
    }

    return (
        <>

            {
                toggle ?
                    <> <h1>EMPLOYEE FEEDBACK FORM</h1>
                        <form className='container' onSubmit={handleSubmit}>
                            <label htmlFor="name">Name : </label>
                            <input type="text" required name="name" id="name" placeholder='Enter your name' onChange={e => setName(e.target.value)} value={name} />
                            <br />
                            <label htmlFor="name">Department : </label>
                            <input type="text" required name="department" id="department" placeholder='Enter your department' onChange={e => setDepartment(e.target.value)} value={department} />
                            <br />
                            <label htmlFor="name">Rating : </label>
                            <input type="number" required name="rating" id="name" placeholder='Give ratings' onChange={e => setRating(e.target.value)} value={rating} />
                            <br />
                            <button >SUBMIT</button>
                        </form> </> :
                    <Feed data={data} goBack={goBack} />

            }
        </>
    )
}

export default Form
