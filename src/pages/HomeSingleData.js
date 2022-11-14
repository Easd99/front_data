import React, { useState, useEffect } from 'react'

const HomeSingleData = ({ props }) => {

    return (
        <div>
            <div key={props.seqno}> {props.ascii}
            </div>
        </div>
    )
}

export default HomeSingleData