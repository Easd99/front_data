import React from 'react'

const HomeMainData = ({ props }) => {
    return (
        <div>
            <table style={{ marginLeft: 'auto', marginRight: 'auto', borderCollapse: 'collapse' }}>
                <tbody>
                    <tr>
                        <td style={{ border: "5px solid", width: '300px' , }}> {props.ascii[0]} </td>

                        <td style={{ border: "5px solid",  width: '300px' , }}> {props.ascii[1]} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default HomeMainData