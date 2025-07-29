import React from 'react'

const BottomDivider = () => {
    return (
        <div className='rotate-180'>
            <svg width="100%" height="20px" opacity={.75} viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 Q50,150 100,0 L100,100 L0,100 Z" fill="#000000" />
            </svg>

        </div>
    )
}

export default BottomDivider