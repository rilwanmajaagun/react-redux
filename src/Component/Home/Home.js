import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {fetchData} from '../../Redux/Action/DataAction'

const HOME = ({fetchData, data}) => {
    useEffect(()=>{
        fetchData();
    },[])

    return (
        <div>
            {data.map((single, id)=>{
                return(
                  <div key={id}>
                      {single.email}
                  </div>
                )
            })}
          Welcome to HOME 
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        data: state.data.apidata
    }

}
const mapDispatchToProps = (dispatch)=>{
    return {
        fetchData:()=> dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HOME)
