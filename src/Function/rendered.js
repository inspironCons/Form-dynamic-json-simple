import React from 'react'

import {
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

const TypeToComponent = {
    Row:Row,
    Col:Col,
    FormGroup:FormGroup,
    Label:Label,
    Input:Input,
    Button:Button
}
const rendered = (config) => {
    if(TypeToComponent[config.component] !== undefined){
        console.log(TypeToComponent[config.component])
        return React.createElement(
            TypeToComponent[config.component],
            config.props ===null ?
            {}
            :
            {...config.props}
            ,
            config.children &&
            (typeof config.children === "string" ?
                config.children
                :
                config.children.map(con => rendered(con)))
        )
    }
}

export default rendered