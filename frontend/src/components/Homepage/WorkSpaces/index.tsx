import React from 'react'
import classes from './workspaces.module.css'
function Workspaces({ data }:any) {
    console.log(data);
    const { title, description, testimonials } = data
    return (
        <div className={`${classes.Workspaces}`}>
            <div className="Containers_x">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className={`${classes.Workspaces_card}`}>
                    <h4>“WorkSocial feels like my new family”</h4>
                    <p>“The perfect space to work with a refreshing environment. All the modern facilities are provided and have good furnishing”</p>
                </div>
            </div>
        </div>
    )
}

export default Workspaces