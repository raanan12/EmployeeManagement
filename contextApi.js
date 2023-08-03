import {createContext,useState,useEffect} from 'react'
import { Alert } from 'react-native'

const addresIp= 'http://34.165.9.220'
const Alldata = createContext()

export const Data1 = ({children})=>{
    const [users,setUsers] = useState([])
    const [works,setWorks]= useState([])
    const [taskAction,setTaskAction]=useState([])
    const [taskStop,setTaskStop]=useState([])
    const [userConenct,setUserConect]=useState({userName:''})
    const [allEmpoly,setAllEmpoly]=useState([])
    const [flag,setFlag]=useState(false)
    const [flag1,setFlag1]=useState(false)
    const [flag2,setFlag2]=useState(false)

    useEffect(()=>{
        fetch(`${addresIp}/allTask`)
        .then(res=>res.json())
        .then((data)=>{
            setWorks(data)
        })
        .catch((e)=>{
            console.log(e);
        })
    },[flag])

    useEffect(()=>{
        fetch(`${addresIp}/actionTasc`,{
            headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
            method:'post',
            body:JSON.stringify({
              id:userConenct.id
            })
          })
        .then(res=>res.json())
        .then((data)=>{
            setTaskAction(data)
        })
    },[flag1])

    useEffect(()=>{
      fetch(`${addresIp}/takingTaskUsetStop`,{
            headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
            method:'post',
            body:JSON.stringify({
              id:userConenct.id
            })
          })
        .then(res=>res.json())
        .then((data)=>{
            setTaskStop(data)
        })
    },[flag2])

    const checkUser = async (name,id)=>{
      
        let booliun = false
        await fetch(`${addresIp}/checkUser`,{
            headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
            method:'post',
            body:JSON.stringify({
              userName:name,
              id:id
            })
          })
          .then(res=>res.json())
          .then((data)=>{
            if(data !== false){
                setUserConect(data)
                setFlag(!flag)
                setFlag1(!flag1)
                setFlag2(!flag2)
                booliun = true
            }
          })
          .catch((e)=>{
            console.log(e);
          })
          return booliun
    }

    const taceTasc = async (id,idTask)=>{
        await setFlag1(!flag1)
        if(taskAction.length < 5){
          await fetch(`${addresIp}/takingTask`,{
              headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
              method:'post',
              body:JSON.stringify({
                  id,
                  idTask
              })
            })
            .then(res=>res.json())
            .then((data)=>{
            })
            .catch((e)=>{
              console.log(e);
            })
        }
        else{
          Alert.alert('There are already five active missions')
        }
       setFlag(!flag)
    }

    const stopeTask = async (index)=>{
      await fetch(`${addresIp}/stopeTask`,{
              headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
              method:'post',
              body:JSON.stringify({
                  id:userConenct.id,
                  index
              })
            })
            .then(res=>res.json())
            .then((data)=>{

            })
            .catch((e)=>{
              console.log(e);
            })
            setFlag2(!flag2)
            setFlag1(!flag1)
    }

    const addEmpoly=async(name,id,class1)=>{
      let booliun = false
      await fetch(`${addresIp}/addEmpoly`,{
        headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
        method:'post',
        body:JSON.stringify({
            id:id,
            name,
            class:class1
        })
      })
      .then(res=>res.json())
      .then((data)=>{
         if(data == true){
          booliun = true
         }
         else{
          booliun = false
         }
      })
      .catch((e)=>{
        console.log(e);
      })

      return booliun
    }

    const addTask=async(name,descripton,class1)=>{
      let booliun = false
      await fetch(`${addresIp}/addTaskAdmin`,{
        headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
        method:'post',
        body:JSON.stringify({
            name,
            descripton,
            class:class1
        })
      })
      .then(res=>res.json())
      .then((data)=>{
        setFlag(!flag)
        booliun = data
      })
      .catch((e)=>{
        console.log(e);
      })

      return booliun
    }

    const deleteTask=async(id)=>{
      await fetch(`${addresIp}/deletTask`,{
        headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
        method:'post',
        body:JSON.stringify({
            id
        })
      })
      .then(res=>res.json())
      .then((data)=>{
        booliun = data
        setFlag(!flag)
      })
      .catch((e)=>{
        console.log(e);
      })

      return booliun
    }

    const givAllEmpoly=async()=>{
      await fetch(`${addresIp}/allEmpoly`)
      .then(res=>res.json())
      .then((data)=>{
        setAllEmpoly(data)
      })
      .catch((e)=>{
        console.log(e);
      })
    }
    return(
        <Alldata.Provider value={{setFlag,flag,allEmpoly,givAllEmpoly,deleteTask,addTask,addEmpoly,setUserConect,taskStop,stopeTask,taskAction,setFlag1,flag1,taceTasc,checkUser,users,works,userConenct}}>{children}</Alldata.Provider>
    )
}


export default Alldata;