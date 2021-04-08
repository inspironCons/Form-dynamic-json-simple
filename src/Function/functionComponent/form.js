const setFormMethod = (type,name)=>{
    if(type === "onSubmit" && name === "pelakuUsaha"){
        return onSubmitPelakuUsaha
    }else if(type === "onChange" && name === "onChangeText"){
        return onChangeText
    }
    else{
        return null
    }
}

const onChangeText = (e)=>{
    const {name,value} = e.target
}

const onSubmitPelakuUsaha = (e) =>{
    e.preventDefault()
    console.log('klik form')
}

export default setFormMethod