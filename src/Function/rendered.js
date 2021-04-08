import React from 'react'

import {
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Button,
    Form
} from 'reactstrap'

import getFunctionProps from './functionComponent'
const TypeToComponent = {
    Row:Row,
    Col:Col,
    FormGroup:FormGroup,
    Label:Label,
    Button:Button
}

const TypeComponentAction = {
    Form:Form,
    Input:Input,
}
const rendered = (config,index) => {
    if(TypeToComponent[config.component] !== undefined){
        let property = config.props !== null ? config.props:{}
        property.key = `${config.component}-${index}`
        console.log(config.component,property)
            // console.log(`${config.component}-${index}`)
        // if(property.key === null){
        //     process.exit;
        // }

        return React.createElement(
            TypeToComponent[config.component],
            config.props ===null ?
            {}
            :
            property
            ,
            config.children &&
            (typeof config.children === "string" ?
                config.children
                :
                config.children.map((con,i) => rendered(con,i)))
        )
    }else if(TypeComponentAction[config.component]!== undefined){
        return React.createElement(
            TypeComponentAction[config.component],
            getFunctionProps(config,index)
            ,
            config.children &&
            (typeof config.children === "string" ?
                config.children
                :
                config.children.map((con,i) => rendered(con,i)))
        )
    }
}

export default rendered