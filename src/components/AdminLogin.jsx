import React from 'react'

const AdminLogin = () => {

    const navigate=useNavigate()
    const [input,setInput]=new useState(
    
    {
        
    }
    )
    const inputHandler=(event)=>{
    
       setInput({...input,[event.target.name]:event.target.value})
    
    
    }
    
    const readvalues=()=>{
    console.log(input)
    axios.post("http://172.16.184.27:3001/api/blog/signin",input).then(
    
       (response)=>{
    
    console.log(response.data)
    if (response.data.status=="success") {
      console.log(response.data.userData._id)
      sessionStorage.setItem("userid",response.data._id)
        navigate("/add")
        setInput(
    
            {
    
                "email":"",
                 "password":""
            }
        )
        
    } else {
        alert("Invalid username or password")
    }
    
    
       }
    
    )
    
    
    }


  return (
    <div>




    </div>
  )
}

export default AdminLogin